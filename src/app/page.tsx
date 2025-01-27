"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA, RESUME_DATA_PL } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

// Definicja interfejsu dla metadanych
interface MetadataProps {
  title: string;
  description: string;
}

export default function Page() {
  // Stan przechowujący aktualny język (domyślnie angielski)
  const [language, setLanguage] = useState<"EN" | "PL">("EN");
  const [metadata, setMetadata] = useState<MetadataProps>({
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
  });

  // Wybieramy odpowiednie dane w zależności od wybranego języka
  const currentResumeData = language === "EN" ? RESUME_DATA : RESUME_DATA_PL;

  // Aktualizacja metadanych przy zmianie języka
  useEffect(() => {
    if (language === "EN") {
      setMetadata({
        title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
        description: RESUME_DATA.summary,
      });
    } else {
      setMetadata({
        title: `${RESUME_DATA_PL.name} | ${RESUME_DATA_PL.about}`,
        description: RESUME_DATA_PL.summary,
      });
    }
  }, [language]);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      {/* Przełącznik języka */}
      <div className="absolute top-4 right-4">
        <Button
          onClick={() => setLanguage(language === "EN" ? "PL" : "EN")}
          variant="outline"
          className="print:hidden"
        >
          {language === "EN" ? "EN" : "PL"}
        </Button>
      </div>

      <section className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{currentResumeData.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {currentResumeData.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={currentResumeData.locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon className="size-3" />
                {currentResumeData.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {currentResumeData.contact.email && (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${currentResumeData.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              )}
              {currentResumeData.contact.tel && (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${currentResumeData.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              )}
              {currentResumeData.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              {currentResumeData.contact.email && (
                <a href={`mailto:${currentResumeData.contact.email}`}>
                  <span className="underline">
                    {currentResumeData.contact.email}
                  </span>
                </a>
              )}
              {currentResumeData.contact.tel && (
                <a href={`tel:${currentResumeData.contact.tel}`}>
                  <span className="underline">{currentResumeData.contact.tel}</span>
                </a>
              )}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage
              alt={currentResumeData.name}
            />
            <AvatarFallback>{currentResumeData.initials}</AvatarFallback>
          </Avatar>
        </div>

        {/* Sekcja About */}
        <Section>
          <h2 className="text-xl font-bold">
            {language === "EN" ? "About" : "O mnie"}
          </h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {currentResumeData.summary}
          </p>
        </Section>

        {/* Sekcja Doświadczenie Zawodowe */}
        <Section>
          <h2 className="text-xl font-bold">
            {language === "EN" ? "Work Experience" : "Doświadczenie zawodowe"}
          </h2>
          {currentResumeData.work.map((work) => (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a
                      className="hover:underline"
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {work.company}
                    </a>

                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} -{" "}
                    {work.end
                      ? work.end
                      : language === "EN"
                      ? "Present"
                      : "Obecnie"}
                  </div>
                </div>

                <h4 className="font-mono text-sm leading-none print:text-[12px]">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs print:text-[10px]">
                {work.description}
              </CardContent>
            </Card>
          ))}
        </Section>

        {/* Sekcja Edukacja */}
        <Section>
          <h2 className="text-xl font-bold">
            {language === "EN" ? "Education" : "Edukacja"}
          </h2>
          {currentResumeData.education.map((education) => (
            <Card key={education.school}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {education.school}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 print:text-[12px]">
                {education.degree}
              </CardContent>
            </Card>
          ))}
        </Section>

        {/* Sekcja Umiejętności */}
        {/* <Section>
          <h2 className="text-xl font-bold">
            {language === "EN" ? "Skills" : "Umiejętności"}
          </h2>
          <div className="flex flex-wrap gap-1">
            {currentResumeData.skills.map((skill) => (
              <Badge className="print:text-[10px]" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Section> */}

        {/* Sekcja Projekty */}
        <Section className="mt-4">
          <h2 className="text-xl font-bold">
            {language === "EN" ? "Projects" : "Projekty"}
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {currentResumeData.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </Section>

        {/* Sekcja RODO */}
        <Section>
          <div className="text-pretty font-mono text-sm text-muted-foreground print:text-[8px] print:leading-tight">
            {language === "EN" ? (
              <>
                I agree to the processing of personal data provided in this document for
                realizing the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018
                (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU)
                2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of
                natural persons with regard to the processing of personal data and on the free movement of such data,
                and repealing Directive 95/46/EC (General Data Protection Regulation).
              </>
            ) : (
              <>
                Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie w celu
                realizacji procesu rekrutacyjnego zgodnie z Ustawą o Ochronie Danych Osobowych z dnia 10 maja 2018
                roku (Dz. U. 2018 poz. 1000) oraz zgodnie z Rozporządzeniem (UE) 2016/679 Parlamentu Europejskiego
                i Rady z dnia 27 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem
                danych osobowych oraz swobodnym przepływem takich danych i uchylającym dyrektywę 95/46/WE
                (Ogólne Rozporządzenie o Ochronie Danych).
              </>
            )}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: currentResumeData.personalWebsiteUrl,
            title: language === "EN" ? "Personal Website" : "Strona osobista",
          },
          ...currentResumeData.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
        lang={language === "EN" ? "en" : "pl"}
      />
    </main>
  );
}
