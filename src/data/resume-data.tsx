import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Cyprian Gburek",
  initials: "CG",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa",
  about:
    "Full-stack developer, CS Student at the Polish-Japanese Academy of Information Technology",
  summary:
    "I am a passionate and goal-oriented computer science student at PJAIT with 5+ years of experience in programming web apps and developing video games. Currently working as a Software Development Specialist at Scanmed Group S.A., previously I gained experience in business intelligence at the National Development Bank of Poland (BGK) and as a .NET developer at a software house.",
  personalWebsiteUrl: "https://cg-personal.vercel.app/",
  contact: {
    email: "dcyprian.a.gburek@gmail.com",
    tel: "+48602235607",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SirCypkowskyy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cyprian-gburek/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Polish-Japanese Academy of Information Technology",
      degree: "Bachelor's Engineering Degree in Computer Science, Business Applications Programming",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Scanmed Group S.A.",
      link: "https://scanmed.pl/",
      badges: ["Hybrid", "Medical Sector", "Medical Services"],
      title: "Software Development and Maintenance Specialist",
      start: "2024",
      end: null,
      description: "While working at Scanmed Group S.A., I am responsible for creating internal software for company employees and its departments. I develop most projects using technologies such as Python and C# (ASP.NET Core) on the backend, and TypeScript/JavaScript/React on the Frontend. I implement my projects in accordance with contemporary programming practices, architectures or design patterns, such as Domain-Driven Design, Event-Sourcing Pattern, Vertical-Slice Architecture, etc. Technologies: C#, ASP.NET Core, EF Core, MediatR, RabbitMQ, Redis, Docker, React, TypeScript, JavaScript, SQL Server, Tailwindcss, Shad.cn, Python, Pywebview",
    },
    {
      company: "Bank Gospodarstwa Krajowego (BGK)",
      link: "https://www.en.bgk.pl/",
      badges: ["Hybrid", "Financial Sector", "Banking"],
      title: "Intern in the Controlling Department",
      start: "2024",
      end: null,
      description: "While working at BGK, I was involved in creating Power BI reports, assisted the team in extracting and processing data from the SQL Server data warehouse with Python (Pandas) support. I also automated the process of emailing relevant employees about errors when updating data in the data warehouse. My final contributions were co-creation of Excel financial reports, and I also initiated the topic of Machine Learning utilization within the team. Technologies: SQL Server, Python, Pandas, C# (for automation), Microsoft Power BI, M Query, DAX, JavaScript & TypeScript (for Power BI custom visuals)"
    },
    {
      company: "AGS Systems",
      link: "https://www.agssystems.pl/en/",
      badges: ["Hybrid", "Software House", "Leasing", "Financial Sector"],
      title: "Junior .NET Developer",
      start: "2023",
      end: "2024",
      description:
        "During my employment at AGS Systems, I was involved in developing internal full stack applications for leasing and financial entities. Technologies: C#, ASP.NET Core, jQuery, Blazor",
    },
  ],
  skills: [
    "C#",
    "ASP.NET Core / .NET",
    "Blazor",
    "Entity Framework Core",
    "SignalR",
    "React / Vite.js",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "Docker",
    "Microsoft Power BI / DAX / M Query",
    "SQL",
    "Microsoft Office 365 Apps",
    "Jira / Microsoft Planner / Microsoft Lists",
    "Leadership",
    "Communication",
    "UML / Enterprise Architect / Lucidchart / Draw.io"
  ],
  projects: [
    {
      title: "MoodCat",
      techStack: [
        "Backend Developer",
        "TypeScript",
        "C#",
        "ASP.NET Core",
        "SQL Server",
        "Entity Framework Core",
        "Microsoft Identity",
        "OpenAI API",
        "SignalR"
      ],
      description: "A HackYeah 2024 hackathon project serving as an intermediary between therapists and patients. The app enables voice and text mood diary entries, which are AI-processed into periodic reports for therapists. Features include patient-specific questionnaires, mood tracking, and automated report generation, improving the efficiency of therapeutic care.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/MoodCat-App",
      },
    },
    {
      title: "Roleplay Campaign Manager",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "C#",
        "ASP.NET Core",
        "SQL Server",
        "Entity Framework Core",
        "Vite.js",
        "SignalR",
        "Zustand",
        "Shad.cn",
        "React Router",
        "Docker"
      ],
      description:
        "An application for managing RPG campaigns and real-time chats, created as part of the final project for the Modeling and Analysis of Information Systems course at PJATK.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/Roleplay-Campaign-Manager-PJA/blob/main/README.en.md",
      },
    },
    {
      title: "Sample ASP.NET Core with React and Docker support application",
      techStack: [
        "C#",
        "ASP.NET Core",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Zustand",
        "Shad.cn",
        "Tailwindcss",
        "React Router",
        "i18next",
        "Nginx",
        "Docker"
      ],
      description: "A sample .Net 8.0 web API with React and Docker support project for demonstration purposes and as a starting point for a fullstack SPA.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/SampleAspNetReactDockerApp"
      }
    },
    {
      title: "Single Layer Neural Network (Language Recognition)",
      techStack: [
        "Python",
        "TypeScript",
        "React",
        "Tailwindcss",
        "DaisyUI",
        "Apexcharts",
        "Machine Learning (ML)"
      ],
      description: "The aim of this project was to create a single layer neural network that would be able to recognize the language of the given text. The network was trained on 4 languages: Polish, English, Spanish and German.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/Single-Layer-Neural-Network-LR"
      }
    },
    {
      title: "Java Discord Gaming Lobbies Bot",
      techStack: [
        "JDA",
        "Java",
        "MongoDB",
        "Discord",
      ],
      description:
        "Discord bot written in Java, based on the JDA framework, made to facilitate the process of creating temporary gaming lobbies on Discord servers through a dedicated system.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/Java-Discord-Gaming-Lobbies-Bot",
      },
    }],
} as const;

export const RESUME_DATA_PL = {
  name: "Cyprian Gburek",
  initials: "CG",
  location: "Warszawa, Polska, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa",
  about:
    "Programista full-stack, student informatyki na Polsko-Japońskiej Akademii Technik Komputerowych",
  summary:
    "Jestem pełnym pasji i zorientowanym na cele studentem informatyki na PJATK z ponad 5-letnim doświadczeniem w programowaniu aplikacji internetowych oraz tworzeniu gier wideo. Obecnie pracuję jako Specjalista ds. Utrzymania i Rozwoju Oprogramowania w Grupie Scanmed S.A., wcześniej zdobywałem doświadczenie w business intelligence w Banku Gospodarstwa Krajowego (BGK) oraz jako programista .NET w software house.",
  personalWebsiteUrl: "https://cg-personal.vercel.app/",
  contact: {
    email: "dcyprian.a.gburek@gmail.com",
    tel: "+48602235607",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SirCypkowskyy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cyprian-gburek/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Polsko-Japońska Akademia Technik Komputerowych",
      degree: "Inżynier Informatyki, specjalizacja Programowanie Aplikacji Biznesowych",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Grupa Scanmed S.A.",
      link: "https://scanmed.pl/",
      badges: ["Hybrydowy", "Sektor Medyczny", "Usługi Medyczne"],
      title: "Specjalista ds. Utrzymania i Rozwoju Oprogramowania",
      start: "2024",
      end: null,
      description: "Pracując w Grupie Scanmed S.A. zajmuję się tworzeniem internal oprogramowania do wykorzystania przez pracowników firmy oraz jej departamenty. Większość projektów opracowuję z wykorzystaniem technologii takich jak Python czy C# (ASP.NET Core) na backendzie, i TypeScript/JavaScript/React na Frontendzie. Swoje projekty realizuję zgodnie ze współczesnymi praktykami programistycznymi, architekturami czy wzorcami projektowymi, jak np. Domain-Driven Design, Event-Sourcing Pattern, Vertical-Slice Architecture, etc. Technologie: C#, ASP.NET Core, EF Core, MediatR, RabbitMQ, Redis, Docker, React, TypeScript, JavaScript, SQL Server, Tailwindcss, Shad.cn, Python, Pywebview",
    },
    {
      company: "Bank Gospodarstwa Krajowego (BGK)",
      link: "https://www.bgk.pl/",
      badges: ["Hybrydowy", "Sektor Finansowy", "Bankowość"],
      title: "Stażysta w Departamencie Kontrolingu",
      start: "2024",
      end: null,
      description: "Podczas pracy w BGK tworzyłem raporty w Power BI, wspierałem zespół w pobieraniu i przetwarzaniu danych z hurtowni danych SQL Server, korzystając z Python (Pandas). Zautomatyzowałem proces wysyłania e-maili do odpowiednich pracowników w przypadku błędów w aktualizacji danych. Brałem także udział w współtworzeniu raportów finansowych w Excelu oraz zapoczątkowałem temat wykorzystania Machine Learning w zespole. Technologie: SQL Server, Python, Pandas, C# (do automatyzacji), Microsoft Power BI, M Query, DAX, JavaScript & TypeScript (dla wizualizacji Power BI)",
    },
    {
      company: "AGS Systems",
      link: "https://www.agssystems.pl/",
      badges: ["Hybrydowy", "Software House", "Leasing", "Sektor Finansowy"],
      title: "Młodszy Programista .NET",
      start: "2023",
      end: "2024",
      description:
        "Podczas pracy w AGS Systems, brałem udział w tworzeniu wewnętrznych aplikacji full stack dla podmiotów leasingowych i finansowych. Technologie: C#, ASP.NET Core, jQuery, Blazor",
    },
  ],
  skills: [
    "C#",
    "ASP.NET Core / .NET",
    "Blazor",
    "Entity Framework Core",
    "SignalR",
    "React / Vite.js",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "Docker",
    "Microsoft Power BI / DAX / M Query",
    "SQL",
    "Microsoft Office 365 Apps",
    "Jira / Microsoft Planner / Microsoft Lists",
    "Przywództwo",
    "Komunikacja",
    "UML / Enterprise Architect / Lucidchart / Draw.io"
  ],
  projects: [
    {
      title: "MoodCat",
      techStack: [
        "Backend Developer",
        "TypeScript",
        "C#",
        "ASP.NET Core",
        "SQL Server",
        "Entity Framework Core",
        "Microsoft Identity",
        "OpenAI",
        "SignalR"
      ],
      description: "Projekt stworzony podczas hackathonu HackYeah 2024, służący jako pomost między terapeutami a pacjentami. Aplikacja umożliwia tworzenie głosowych i tekstowych wpisów w dzienniku nastrojów, które są przetwarzane przez AI w okresowe raporty dla terapeutów. Funkcjonalności obejmują spersonalizowane kwestionariusze, śledzenie nastrojów oraz automatyczne generowanie raportów, usprawniając proces opieki terapeutycznej.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/MoodCat-App",
      },
    },
    {
      title: "Menedżer Kampanii RPG",
      techStack: [
        "Programista Full Stack",
        "TypeScript",
        "React",
        "C#",
        "ASP.NET Core",
        "SQL Server",
        "Entity Framework Core",
        "Vite.js",
        "SignalR",
        "Zustand",
        "Shad.cn",
        "React Router",
        "Docker"
      ],
      description:
        "Aplikacja do zarządzania kampaniami RPG i czatami w czasie rzeczywistym, stworzona w ramach projektu końcowego na przedmiot Modelowanie i Analiza Systemów Informacyjnych na PJATK.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/Roleplay-Campaign-Manager-PJA/blob/main/README.en.md",
      },
    },
    {
      title: "Przykładowa aplikacja ASP.NET Core z wsparciem dla React i Docker",
      techStack: [
        "C#",
        "ASP.NET Core",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Zustand",
        "Shad.cn",
        "Tailwindcss",
        "React Router",
        "i18next",
        "Nginx",
        "Docker"
      ],
      description: "Przykładowa aplikacja webowa .Net 8.0 z wsparciem dla React i Docker, stworzona w celach demonstracyjnych i jako punkt wyjściowy dla pełnostronnicowej aplikacji SPA.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/SampleAspNetReactDockerApp"
      }
    },
    {
      title: "Jednowarstwowa Sieć Neuronowa (Rozpoznawanie Języka)",
      techStack: [
        "Python",
        "TypeScript",
        "React",
        "Tailwindcss",
        "DaisyUI",
        "Apexcharts",
        "Uczenie Maszynowe (ML)"
      ],
      description: "Celem projektu było stworzenie jednowarstwowej sieci neuronowej, która potrafiłaby rozpoznawać język podanego tekstu. Sieć była trenowana na 4 językach: polskim, angielskim, hiszpańskim i niemieckim.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/Single-Layer-Neural-Network-LR"
      }
    },
    {
      title: "Java Discord Gaming Lobbies Bot",
      techStack: [
        "JDA",
        "Java",
        "MongoDB",
        "Discord",
      ],
      description:
        "Bot Discord napisany w Javie, oparty na frameworku JDA, stworzony w celu ułatwienia procesu tworzenia tymczasowych lobby do gier na serwerach Discord za pomocą dedykowanego systemu.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/Java-Discord-Gaming-Lobbies-Bot",
      },
    }],
} as const;

