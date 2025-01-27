import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Cyprian Gburek",
  initials: "CG",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa",
  about:
    "Full-stack developer",
  summary:
    "I am a passionate and goal-oriented computer science student at PJAIT with 5+ years of experience in programming web apps and developing video games. Currently working as a Software Development Specialist at Scanmed Group S.A. and as a consultant for business process automation at the National Development Bank of Poland (BGK), previously I gained experience in business intelligence at (BGK) and as a NET developer at a software house.",
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
      company: "Bank Gospodarstwa Krajowego (BGK)",
      link: "https://www.en.bgk.pl/",
      badges: ["Financial Sector", "Banking"],
      title: "Consultant for Business Process Automation",
      start: "2025",
      end: null,
      description: "As a consultant for business process automation, I am responsible for creating and maintaining applications that support the work of my BGK department. Most of the projects I work on use technologies such as Python and SQL Server, and TypeScript/JavaScript/React on the Frontend."
    },
    {
      company: "Scanmed Group S.A.",
      link: "https://scanmed.pl/",
      badges: ["Medical Sector", "Medical Services"],
      title: "Software Development and Maintenance Specialist",
      start: "2024",
      end: null,
      description: "While working at Scanmed Group S.A., I am responsible for creating internal software for company employees and its departments. I develop most projects using technologies such as Python and C# (ASP.NET Core) on the backend, and TypeScript/JavaScript/React on the Frontend. I implement my projects in accordance with contemporary programming practices, architectures or design patterns, such as Domain-Driven Design, Event-Sourcing Pattern, Vertical-Slice Architecture, etc. Technologies: C#, ASP.NET Core, EF Core, MediatR, RabbitMQ, Redis, Docker, React, TypeScript, JavaScript, SQL Server, Tailwindcss, Shad.cn, Python, Pywebview",
    },
    {
      company: "Bank Gospodarstwa Krajowego (BGK)",
      link: "https://www.en.bgk.pl/",
      badges: ["Financial Sector", "Banking"],
      title: "Intern in the Controlling Department",
      start: "2024",
      end: "2024",
      description: "While working at BGK, I was involved in creating Power BI reports, assisted the team in extracting and processing data from the SQL Server data warehouse with Python (Pandas) support. I also automated the process of emailing relevant employees about errors when updating data in the data warehouse. My final contributions were co-creation of Excel financial reports, and I also initiated the topic of Machine Learning utilization within the team. Technologies: SQL Server, Python, Pandas, C# (for automation), Microsoft Power BI, M Query, DAX, JavaScript & TypeScript (for Power BI custom visuals)"
    },
    {
      company: "AGS Systems",
      link: "https://www.agssystems.pl/en/",
      badges: ["Software House", "Leasing & Financial", "Financial Sector"],
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
    "React",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "Docker",
    "Microsoft Power BI / DAX / M Query",
    "SQL (PostgreSQL, SQL Server, SQLite)",
    "Microsoft Office 365 Apps",
    "UML / Enterprise Architect / Lucidchart / Draw.io"
  ],
  projects: [
    {
      title: "Apocalypse Guide",
      techStack: [
        "TypeScript",
        "React",
        "Python",
        "FastAPI",
        "Docker",
        "SQLite"
      ],
      description: "An advanced AI-powered tool for creating character sheets in the 'Apocalypse World' RPG system. The application guides users through a personalized, interactive character creation process, utilizing AI models to generate contextual questions and character visualizations.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/Projekt-SUML-PJATK",
      },
    },
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
    }
  ],
} as const;

export const RESUME_DATA_PL = {
  name: "Cyprian Gburek",
  initials: "CG",
  location: "Warszawa, Polska, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa",
  about:
    "Programista full-stack",
  summary:
    "Jestem pełnym pasji studentem informatyki na PJATK z ponad 5-letnim doświadczeniem w programowaniu aplikacji webowych oraz tworzeniu gier wideo (w Unity). Obecnie pracuję jako Specjalista ds. Utrzymania i Rozwoju Oprogramowania w Grupie Scanmed S.A. oraz jako konsultant ds. automatyzacji procesów biznesowych w Banku Gospodarstwa Krajowego, wcześniej zdobywałem doświadczenie w BI w BGK oraz jako programista .NET w niewielkim software house.",
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
      company: "Bank Gospodarstwa Krajowego (BGK)",
      link: "https://www.bgk.pl/",
      badges: ["Sektor Finansowy", "Bankowość"],
      title: "Konsultant ds. Automatyzacji Procesów Biznesowych",
      start: "2025",
      end: null,
      description: "Jako konsultant ds. automatyzacji procesów biznesowych, zajmuję się tworzeniem i utrzymywaniem aplikacji wspomagających pracę członków mojego departamentu w BGK. Większość projektów realizuję z wykorzystaniem Pythona, SQL Server oraz TypeScript z wykorzystaniem frameworków takich jak React, Next.js Tailwindcss, Shad.cn, etc.",
    },
    {
      company: "Grupa Scanmed S.A.",
      link: "https://scanmed.pl/",
      badges: ["Sektor Medyczny", "Usługi Medyczne"],
      title: "Specjalista ds. Utrzymania i Rozwoju Oprogramowania",
      start: "2024",
      end: null,
      description: "Pracując w Grupie Scanmed S.A. zajmuję się tworzeniem internal oprogramowania do wykorzystania przez pracowników firmy oraz jej departamenty. Większość projektów opracowuję z wykorzystaniem technologii takich jak Python czy C# (ASP.NET Core) na backendzie, i TypeScript/JavaScript/React na Frontendzie. Swoje projekty realizuję zgodnie ze współczesnymi praktykami programistycznymi, architekturami czy wzorcami projektowymi, jak np. Domain-Driven Design, Event-Sourcing Architecture, Vertical-Slice Architecture, etc. Technologie: C#, ASP.NET Core, EF Core, MediatR, RabbitMQ, Redis Docker, React, TypeScript, JavaScript, SQL Server, Tailwindcss, Shad.cn, Python, Pywebview",
    },
    {
      company: "Bank Gospodarstwa Krajowego (BGK)",
      link: "https://www.bgk.pl/",
      badges: ["Sektor Finansowy", "Bankowość"],
      title: "Stażysta w Departamencie Kontrolingu",
      start: "2024",
      end: "2025",
      description: "Podczas pracy w BGK tworzyłem raporty w Power BI, wspierałem zespół w pobieraniu i przetwarzaniu danych z hurtowni danych SQL Server, korzystając z Python (Pandas). Zautomatyzowałem proces wysyłania e-maili do odpowiednich pracowników w przypadku błędów w aktualizacji danych. Brałem także udział w współtworzeniu raportów finansowych w Excelu oraz zapoczątkowałem temat wykorzystania Machine Learning w zespole. Technologie: SQL Server, Python, Pandas, C# (do automatyzacji), Microsoft Power BI, M Query, DAX, JavaScript & TypeScript (dla wizualizacji Power BI)",
    },
    {
      company: "AGS Systems",
      link: "https://www.agssystems.pl/",
      badges: ["Software House", "Leasing", "Sektor Finansowy"],
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
    "React",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "Docker",
    "Microsoft Power BI / DAX / M Query",
    "SQL (PostgreSQL, SQL Server, SQLite)",
    "Microsoft Office 365 Apps",
    "UML / Enterprise Architect / Lucidchart / Draw.io"
  ],
  projects: [
    {
      title: "Przewodnik Apokalipsy",
      techStack: [
        "TypeScript",
        "React",
        "Python",
        "FastAPI",
        "Docker",
        "SQLite"
      ],
      description: "Zaawansowane narzędzie wykorzystujące sztuczną inteligencję do tworzenia kart postaci w systemie RPG 'Apocalypse World'. Aplikacja przeprowadza użytkownika przez spersonalizowany, interaktywny proces kreacji bohatera, wykorzystując modele AI do generowania kontekstowych pytań i wizualizacji postaci.",
      link: {
        label: "github.com",
        href: "https://github.com/SirCypkowskyy/Projekt-SUML-PJATK",
      },
    },
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
    }
  ],
} as const;

