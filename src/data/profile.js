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
    "I'm <strong>Agnel Salve</strong> — a data engineer with <strong>3+ years</strong> building production data platforms across insure-tech, telecom and early-stage startups, now pursuing an <strong>M.S. in Information Systems at Northeastern University, Boston</strong>.",
  paragraphs: [
    "I build the layer between raw data and decisions: cloud data warehouses, batch and streaming pipelines, and the BI and LLM-powered tools that sit on top. I'm most useful where the data is messy, the requirements are half-formed, and the result has to hold up in production.",
    "At <strong>Probus Insurance</strong>, I built an <strong>AWS data warehouse from scratch</strong> and rewrote the MS SQL pipelines feeding it — cutting run time by <strong>90%</strong>. I delivered real-time reporting in <strong>Power BI and AWS QuickSight</strong>, deployed a <strong>RAG-driven reporting system</strong>, and automated the incentive calculation logic in SQL.",
    "Earlier, at <strong>Jio Platforms (Reliance)</strong>, I worked on big-data pipelines in <strong>Hadoop, Spark, Kafka and Azure</strong>. I led the <strong>5G Infrastructure Analytics</strong> project and delivered its core KPIs, and contributed to the <strong>Azure Data Mesh</strong> initiative — building stakeholder dashboards in Power BI and ZoomData.",
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
