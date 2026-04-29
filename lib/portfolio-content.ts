export type Lang = "ar" | "en";

export const portfolioContent = {
  ar: {
    brand: "محمد الغامدي",
    nav: ["الرئيسية", "الخبرات", "المهارات", "المشاريع", "نبذة", "تواصل"],
    ids: ["home", "experience", "skills", "projects", "about", "contact"],
    title: "محمد الغامدي",
    subtitle: "أخصائي معلوماتية صحية",
    tagline:
      "خبرة في إدارة بيانات الرعاية الصحية، أنظمة السجلات الصحية الإلكترونية، وتكامل تبادل المعلومات الصحية.",
    ctaContact: "تواصل معي",
    ctaProjects: "عرض المشاريع",
    cv: "تحميل السيرة الذاتية",
    scroll: "اسحب للأسفل",
    sectionExperience: "الخبرات",
    sectionSkills: "المهارات",
    sectionProjects: "المشاريع",
    sectionAbout: "نبذة",
    sectionContact: "تواصل",
    timelineTitle: "المسار المهني",
    skillsTitle: "المهارات التقنية",
    projectsTitle: "مشاريع مختارة",
    aboutTitle: "أخصائي معلوماتية صحية",
    contactTitle: "لنبدأ تعاونًا مهنيًا",
    aboutBio:
      "أعمل على تحويل البيانات الطبية إلى قرارات عملية عبر حلول معلوماتية حديثة تدعم جودة الرعاية وسلامة المرضى.",
    aboutBioEn:
      "Experienced in healthcare data management, EHR systems, and health information exchange with a strong focus on quality of care.",
    education: "بكالوريوس نظم معلومات صحية",
    certifications: ["RHIA", "Certified HL7 Specialist", "HIPAA Security Training"],
    formName: "الاسم",
    formEmail: "البريد الإلكتروني",
    formMessage: "الرسالة",
    send: "إرسال الرسالة",
    copied: "تم النسخ",
    copy: "نسخ",
    emailLabel: "البريد",
    socialLabel: "الحسابات المهنية",
    langButton: "English",
    themeAuto: "تلقائي",
    themeDark: "مساء",
    themeLight: "صباح",
    sending: "جاري الإرسال...",
    sentSuccess: "تم إرسال رسالتك بنجاح",
    sentError: "تعذر الإرسال، حاول مرة أخرى",
  },
  en: {
    brand: "Mohammed Al-Ghamdi",
    nav: ["Home", "Experience", "Skills", "Projects", "About", "Contact"],
    ids: ["home", "experience", "skills", "projects", "about", "contact"],
    title: "Mohammed Al-Ghamdi",
    subtitle: "Health Informatics Specialist",
    tagline:
      "Experienced in healthcare data management, EHR systems, and health information exchange.",
    ctaContact: "Contact Me",
    ctaProjects: "View Projects",
    cv: "Download CV",
    scroll: "Scroll Down",
    sectionExperience: "Experience",
    sectionSkills: "Skills",
    sectionProjects: "Projects",
    sectionAbout: "About",
    sectionContact: "Contact",
    timelineTitle: "Professional Timeline",
    skillsTitle: "Technical Skills",
    projectsTitle: "Featured Projects",
    aboutTitle: "Health Informatics Specialist",
    contactTitle: "Let us build healthcare solutions",
    aboutBio:
      "I help healthcare organizations turn clinical and operational data into actionable insights through scalable informatics systems.",
    aboutBioEn:
      "Experienced in healthcare data management, EHR systems, and health information exchange.",
    education: "BSc in Health Information Systems",
    certifications: ["RHIA", "Certified HL7 Specialist", "HIPAA Security Training"],
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    send: "Send Message",
    copied: "Copied",
    copy: "Copy",
    emailLabel: "Email",
    socialLabel: "Professional Profiles",
    langButton: "العربية",
    themeAuto: "Auto",
    themeDark: "Night",
    themeLight: "Day",
    sending: "Sending...",
    sentSuccess: "Your message has been sent",
    sentError: "Could not send message, try again",
  },
} as const;

export const experiences = [
  {
    org: "Kingdom Health Network",
    arTitle: "أخصائي معلوماتية صحية",
    enTitle: "Health Informatics Specialist",
    period: "2022 - Present",
    descAr: "قيادة مبادرات تكامل السجلات الصحية وتحسين جودة البيانات السريرية عبر المستشفيات.",
    descEn:
      "Led EHR interoperability initiatives and improved clinical data quality across hospitals.",
  },
  {
    org: "Al Noor Medical Group",
    arTitle: "أخصائي تنفيذ أنظمة EHR",
    enTitle: "EHR Implementation Specialist",
    period: "2019 - 2022",
    descAr: "تنفيذ Epic وCerner وتدريب الفرق الطبية على سير العمل الرقمي.",
    descEn:
      "Implemented Epic and Cerner workflows and trained care teams on digital processes.",
  },
  {
    org: "CareData Analytics",
    arTitle: "محلل بيانات صحية",
    enTitle: "Data Analyst - Healthcare",
    period: "2017 - 2019",
    descAr: "بناء لوحات قياس وتحليل مؤشرات الأداء لدعم قرارات الإدارة الصحية.",
    descEn:
      "Built KPI dashboards and analytics pipelines for healthcare operational decisions.",
  },
];

export const skills = [
  "EHR Systems (Epic, Cerner, MEDITECH)",
  "HL7 & FHIR Standards",
  "SQL & Database Management",
  "Python for Healthcare Analytics",
  "Data Visualization (Tableau, Power BI)",
  "Healthcare Information Exchange (HIE)",
  "Medical Coding (ICD-10, CPT)",
  "HIPAA Compliance & Security",
];

export const projects = [
  "EHR Integration Project",
  "Healthcare Dashboard",
  "Medical Data Analysis Tool",
  "FHIR API Implementation",
];

export const contactEmail = "alghamdi.mhmd.d@gmail.com";
export const cvFilePath = "/cv/mohammed-alghamdi-cv.pdf";
