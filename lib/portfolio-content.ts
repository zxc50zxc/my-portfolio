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
    certifications: [
      "Healthcare AI Specialist Certificate",
      "Certified Marketing Specialist: دورة مكثفة (45 ساعة) من جامعة الملك عبدالعزيز - مركز المبدعون",
      "Data Analysis & Dashboard Expert",
    ],
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
    certifications: [
      "Healthcare AI Specialist Certificate: Focused on integrating AI into healthcare systems",
      "Certified Marketing Specialist: 45-hour intensive course by King Abdulaziz University - Al-Mubdioun Center",
      "Data Analysis & Dashboard Expert: Advanced skills in Power BI and Streamlit for healthcare analytics",
    ],
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

export type TimelineIconKey =
  | "trophy"
  | "graduationCap"
  | "bookOpen"
  | "stethoscope"
  | "briefcase"
  | "target";

export type TimelineEntry = {
  id: string;
  icon: TimelineIconKey;
  periodAr: string;
  periodEn: string;
  titleAr: string;
  titleEn: string;
  orgAr: string;
  orgEn: string;
  pointsAr: string[];
  pointsEn: string[];
};

export const experiences: TimelineEntry[] = [
  {
    id: "pre-university",
    icon: "trophy",
    periodAr: "قبل 2023",
    periodEn: "Before 2023",
    titleAr: "أنشطة ما قبل الجامعة",
    titleEn: "Pre-University Activities",
    orgAr: "الأنشطة الرياضية والجماعية",
    orgEn: "Sports & Group Activities",
    pointsAr: ["كرة القدم", "السباحة", "ركوب الخيل", "الرماية", "أنشطة جماعية"],
    pointsEn: ["Football", "Swimming", "Horse Riding", "Shooting", "Group Activities"],
  },
  {
    id: "university-activities",
    icon: "graduationCap",
    periodAr: "2023 - 2026",
    periodEn: "2023 - 2026",
    titleAr: "الأنشطة الجامعية",
    titleEn: "University Activities",
    orgAr: "جمعية ظاهرة لبن / الهاكثون الصحي",
    orgEn: "Dhahira Laban Association / Health Hackathon",
    pointsAr: [
      "2024: التنظيم في موسم الحج - المشاركة في تنظيم موسم الحج وتقديم الدعم للحجاج.",
      "2025: تنظيم هاكثون - التنسيق بين الفرق المشاركة ودعم المشاركين.",
    ],
    pointsEn: [
      "2024: Hajj Season Organization - Participated in organizing Hajj and supporting pilgrims.",
      "2025: Hackathon Organization - Coordinated participating teams and supported attendees.",
    ],
  },
  {
    id: "training-courses",
    icon: "bookOpen",
    periodAr: "2023 - 2026",
    periodEn: "2023 - 2026",
    titleAr: "الدورات والتدريب",
    titleEn: "Training & Courses",
    orgAr: "التطوير المهني",
    orgEn: "Professional Development",
    pointsAr: [
      "مهارات التسويق التجارية والشخصية",
      "التصوير الفوتوغرافي",
      "تصميم المواقع الإلكترونية",
      "الأمن السيبراني",
      "تحليل البيانات و Power BI",
    ],
    pointsEn: [
      "Business & Personal Marketing Skills",
      "Photography",
      "Web Design",
      "Cybersecurity",
      "Data Analysis & Power BI",
    ],
  },
  {
    id: "internship",
    icon: "stethoscope",
    periodAr: "يناير 2026 - أبريل 2026",
    periodEn: "Jan 2026 - Apr 2026",
    titleAr: "متدرب أخصائي معلوماتية صحية",
    titleEn: "Health Informatics Specialist (Intern)",
    orgAr: "مستشفى الحرس الوطني - الشؤون الصحية بالحرس الوطني (MNGHA)",
    orgEn: "National Guard Health Affairs (MNGHA)",
    pointsAr: [
      " عملت في إدخال الأدوية في نظام BestCare، و أعي تمامًا معايير HL7 لضمان انتقال البيانات بسلامة، وأطبق معايير HIPAA لضمان أمن وخصوصية المريض خلال سير العمل الرقمي.",
      "إدارة بيانات الأدوية: إدارة وتحديث قائمة الأدوية في نظام BestCare لضمان دقة الجرعات والتوثيق السريري.",
      "تحسين الأنظمة: التعاون مع فريق التحسين لتبسيط سير العمل الرقمي وتعزيز وظائف السجل الطبي الإلكتروني.",
      "دعم سير العمل السريري: المساهمة في تحسين سجلات إعطاء الدواء (MAR) لتقليل الأخطاء ورفع سلامة المرضى.",
    ],
    pointsEn: [
      "I do not only enter medications into the BestCare system; I also apply HL7 standards for safe data exchange and HIPAA standards to protect patient privacy and security throughout digital workflows.",
      "Medication Data Management: Maintained and updated the BestCare medication formulary with accurate entries and documentation.",
      "System Optimization: Collaborated with the improvement team to streamline digital workflows and improve EHR functionality.",
      "Clinical Workflow Support: Helped refine medication administration records (MAR) to reduce errors and improve patient safety.",
    ],
  },
  {
    id: "current-job",
    icon: "briefcase",
    periodAr: "2023 - الآن",
    periodEn: "2023 - Present",
    titleAr: "إدارة مشاريع وتطوير رقمي",
    titleEn: "Project Management",
    orgAr: "رواد التقدم",
    orgEn: "Rowad Al-Taqaddum",
    pointsAr: [
      "المشاركة في تأسيس الشركة والتدرج بأدوار متعددة (استقبال، محاسبة، تصميم، إدارة صفقات).",
      "إدارة وتنسيق المشاريع بشكل احترافي ومتابعة سير العمل.",
      "تطوير وإدارة الظهور الرقمي للشركة.",
      "التواصل مع الفرق المختلفة وإعداد التقارير الدورية لضمان جودة التنفيذ.",
    ],
    pointsEn: [
      "Managing and coordinating projects professionally.",
      "Tracking progress and ensuring target delivery.",
      "Collaborating with cross-functional teams to maintain implementation quality.",
      "Preparing periodic reports on project progress.",
    ],
  },
  {
    id: "career-aspirations",
    icon: "target",
    periodAr: "قيد التقدم",
    periodEn: "In Progress",
    titleAr: "الطموحات المهنية",
    titleEn: "Career Aspirations",
    orgAr: "شهادات احترافية قيد الإنجاز",
    orgEn: "Certifications in Progress",
    pointsAr: [
      "PMP (Project Management Professional) - قيد الإنجاز",
      "Risk Management Professional Certification - قيد الإنجاز",
    ],
    pointsEn: [
      "PMP (Project Management Professional) - In Progress",
      "Risk Management Professional Certification - In Progress",
    ],
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
