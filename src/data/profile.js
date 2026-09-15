// All personal content lives here so the site is easy to update — no need to
// touch component code to change wording, links, experience or education.

export const profile = {
  name: "Agnel Salve",
  firstName: "Agnel",
  lastName: "Salve",
  role: "Data Engineer • AI/ML Engineer • Cloud Solution Architect",
  // Rotating words for the hero "I am into ..." typing effect
  typingWords: [
    "data analytics",
    "data engineering",
    "data science",
    "business intelligence",
    "cloud solution architect",
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1DK-djeu2HaCjUODb8XrBeJPLt1AMxjLC/view?usp=sharing",
  profileImage: "assets/images/profile2.webp",

  contact: {
    email: "salve.a@northeastern.edu",
    personalEmail: "salveagnel@gmail.com",
    location: "Boston, MA - 02130",
  },

  socials: [
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/agnelsalve/" },
    { name: "GitHub", icon: "github", url: "https://github.com/agnelsalve" },
    { name: "Medium", icon: "medium", url: "https://medium.com/@salveagnel" },
    { name: "Topmate", icon: "topmate", url: "https://topmate.io/agnelsalve" },
  ],
};

// About section — paragraphs preserved from the original site (HTML kept for bold accents).
export const about = {
  intro:
    "I'm <strong>Agnel Salve</strong> — a full-time graduate student at <strong>Northeastern University, Boston</strong> (M.S. Information Systems) with 3+ years of experience across <strong>data engineering, data science, and cloud computing</strong>.",
  paragraphs: [
    "My focus? <strong>Building scalable data systems & LLMs, intelligent pipelines, and cloud-native solutions</strong> that turn messy raw data into real business impact. My journey spans <strong>finance / insure-tech, service-based, and startup ecosystems</strong> — solving tough data problems, architecting modern systems, and helping teams make smarter, faster decisions.",
    "Previously, I led key data initiatives at <strong>Probus Insurance</strong> — building an <strong>AWS-based data warehouse</strong> from scratch, optimizing <strong>MS SQL pipelines (90% faster)</strong>, and enabling real-time insights through <strong>Power BI & AWS QuickSight.</strong> I also designed and deployed <strong>RAG-driven reporting systems</strong> and <strong>automated incentive calculation logic</strong> using SQL CTEs — aligning tech with business outcomes.",
    "Earlier, at <strong>Reliance Jio Platforms</strong>, I worked on <strong>big data pipelines</strong> using Hadoop, Spark, Kafka, Sqoop, and Azure. I led the <strong>5G Infrastructure Analytics Project</strong>, delivered key KPIs, and contributed to the <strong>Azure Data Mesh initiative</strong> — creating stakeholder dashboards in Power BI & ZoomData.",
  ],
  research: [
    "🌟 SAIVA – Smart AI Virtual Assistant (Published Paper: TIJER2409018)",
    "🌟 Panderma - a multi-agent AI framework that diagnoses skin diseases (Research in progress)",
    "🌟 Design Patent: Intelligent Recruitment Management System (OCR + NLP CV Parsing)",
  ],
  connect: [
    "🧑‍💻 Hiring curious minds",
    "💡 Tackling data-driven challenges",
    "🚀 Building tech-powered growth stories",
    "🤝 Open to collaborating, sharing, or creating together",
  ],
  closer: "All I know is that at the end of the day, I want to make an impact!!",
};

export const experience = [
    {
    company: "Marino Recreation Center, Northeastern University | Boston, MA",
    role: "Fitness Consultant",
    period: "Mar 2026 - Present",
  },
  {
    company: "Probus Insurance Broker Pvt. Ltd. | Mumbai, India",
    role: "Data Analyst - Strategy Team",
    period: "Mar 2024 - Jul 2025",
  },
  {
    company: "Jio Platforms Ltd. - Reliance - Mumbai, India",
    role: "Assistant Technical Manager (GET) - Analytical & Big Data (COE)",
    period: "Jul 2022 - Mar 2024",
  },
  {
    company: "Ideal Education and Research Institute | Mumbai, India",
    role: "Volunteer Teacher",
    period: "April 2017 - June 2017, March 2018 - June 2018",
  },
  {
    company: "SAF Consulting and Project Management LLP | Remote",
    role: "Python Development Intern",
    period: "May 30, 2021 - August 31, 2021",
  },
];

export const education = [
  {
    degree: "Master of Science in Information Systems",
    school: "College of Engineering | Northeastern University, Boston",
    period: "2025 - 2027",
    image: "assets/images/neu.webp",
    points: [
      "Data Science & Cloud Computing Focus",
      "Courses - Data Science Engineering Methods & Tools, Data Management And Database Design AND Program Structure Algorithms",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Don Bosco Institute of Technology | University of Mumbai",
    period: "2018 - 2022",
    image: "assets/images/college.webp",
    points: [
      "Head Coordinator of Training and Placement Cell",
      "Chapter Head of Idiot's Room Entrepreneurship-Cell",
      "Marketing, Publicity and Sponsorship Head at The Association for Computing Machinery",
      "Participated in many Seminars and Presentations related to startups and entrepreneurship",
    ],
  },
];

// Project category filter labels
export const projectCategories = [
  { key: "*", label: "All" },
  { key: "data-engg", label: "Data Engineering" },
  { key: "bi", label: "Business Intelligence" },
  { key: "analytics", label: "Data Analytics" },
  { key: "data-science", label: "Data Science & AI / ML" },
  { key: "publ", label: "Publications" },
];
