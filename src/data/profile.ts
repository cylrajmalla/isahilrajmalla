export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  isLeadership?: boolean;
};

export type VentureItem = {
  name: string;
  role: string;
  year: string;
  category: string;
  description: string;
  website?: string;
  accent: string;
};

export type ExpertiseCategory = {
  title: string;
  items: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationItem = {
  institution: string;
  program: string;
  period: string;
  note?: string;
};

export const profile = {
  name: "Sahil Raj Malla",
  headline: "HR Leader | People & Culture | Talent Acquisition | Entrepreneur",
  subheadline: "Building High-Performing Teams, Businesses & Ideas",
  intro:
    "I build high-performing teams, strengthen people systems, and turn ideas into businesses.",
  overview:
    "With 7+ years of professional experience across HR, recruitment, talent acquisition, employee engagement and organizational development, I combine people leadership with hands-on entrepreneurial experience across technology, trade and business ventures.",
  summary:
    "Sahil Raj Malla is an HR professional and entrepreneur with 7+ years of experience in recruitment, talent acquisition, employee engagement, HR operations and organizational development. He has worked extensively with technology recruitment and has recruited for a wide range of technical and non-technical positions. His career has also involved leading HR, recruitment and operations teams, developing employee experience initiatives, implementing AI-assisted hiring approaches, coordinating recruitment processes, managing performance reviews, and supporting organizational growth. Alongside his HR career, Sahil has founded, co-founded and advised businesses across technology, AI, cybersecurity, trade and other ventures. This combination gives him a perspective that goes beyond traditional HR: he understands the employee, the organization, and the business owner. As a pioneer-minded builder, he brings a practical entrepreneurial lens to how teams, systems and ideas are shaped.",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "HR Leadership", href: "#hr-leadership" },
    { label: "Entrepreneurship", href: "#entrepreneurship" },
    { label: "Journey", href: "#journey" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sahilrajmalla/" },
    { label: "GitHub", href: "https://github.com/cylrajmalla" },
    { label: "Email", href: "mailto:sahilrajmalla@gmail.com" },
  ] as SocialLink[],
  contact: {
    email: "sahilrajmalla@gmail.com",
    linkedin: "https://www.linkedin.com/in/sahilrajmalla/",
    github: "https://github.com/cylrajmalla",
    website: "https://www.sahilrajmalla.com.np",
    phone: "+977-9801260669",
    location: "Kathmandu, Nepal",
    goodAsGold: "https://www.goodasgoldtech.com",
    laskus: "https://www.laskus.ai",
  },
  achievements: [
    { value: "7+", label: "Years of HR experience" },
    { value: "700+", label: "IT requirements supported" },
    { value: "4+", label: "Years of venture leadership" },
    { value: "Multiple", label: "Industries and business ventures" },
  ],
  expertise: [
    {
      title: "Talent Acquisition",
      items: [
        "Executive / Senior-level Hiring",
        "Headhunting",
        "Technical Recruitment",
        "Candidate Screening",
        "Interview Management",
        "Recruitment Strategy",
        "Recruitment Pipeline Development",
      ],
    },
    {
      title: "People Operations",
      items: [
        "Onboarding",
        "Offboarding",
        "HR Documentation",
        "Employee Lifecycle Management",
        "Probation Evaluation",
        "HR Letters & Agreements",
      ],
    },
    {
      title: "People & Culture",
      items: [
        "Employee Engagement",
        "Candidate Experience",
        "Employee Experience",
        "Grievance Handling",
        "Retention",
        "Performance Reviews",
        "Employee Communication",
      ],
    },
    {
      title: "Leadership",
      items: [
        "HR Team Leadership",
        "Recruitment Team Leadership",
        "Operations Coordination",
        "Interviewer Support",
        "Stakeholder Management",
        "Cross-functional Collaboration",
      ],
    },
    {
      title: "Employer Branding",
      items: [
        "Recruitment Marketing",
        "Social Media Hiring Campaigns",
        "Job Fair Participation",
        "Event Coordination",
        "Employee Recognition Content",
      ],
    },
    {
      title: "Modern HR",
      items: [
        "AI-assisted Candidate Screening",
        "AI Interviews",
        "HR Surveys",
        "Data-informed Recruitment",
        "Digital HR Processes",
      ],
    },
  ] as ExpertiseCategory[],
  skills: [
    {
      title: "Recruitment / ATS",
      items: ["LinkedIn Recruiter Lite", "Monster / Foundit", "Naukri", "SEEK", "Indeed"],
    },
    {
      title: "Business Development",
      items: [
        "HubSpot",
        "JazzHR",
        "Zoiper",
        "VoIP",
        "LinkedIn Sales Navigator",
        "Apollo.io",
        "Lusha",
        "Mailchimp",
      ],
    },
    {
      title: "HRIS",
      items: ["Nimbus HR", "BambooHR"],
    },
    {
      title: "Collaboration",
      items: ["Slack", "Google Meet", "Notion", "Miro", "Microsoft Teams"],
    },
    {
      title: "Productivity",
      items: ["Google Workspace", "Microsoft Office", "Canva", "Zoho"],
    },
    {
      title: "Digital Marketing",
      items: ["SEMrush", "Google Ads", "Meta Business Suite", "Google Analytics", "HubSpot", "Canva"],
    },
  ] as SkillGroup[],
  experiences: [
    {
      company: "CodingMountain",
      role: "Senior HR Lead",
      period: "August 2024 – Present",
      location: "Kathmandu, Nepal",
      summary:
        "Led HR, recruitment and operations functions while taking ownership of critical hiring priorities and improving candidate and employee experience.",
      highlights: [
        "Talent Acquisition & Headhunting",
        "Recruitment Strategy",
        "HR & Recruitment Team Leadership",
        "Employee Engagement",
        "Candidate Experience",
        "Performance Management",
        "People Operations",
        "Onboarding & Offboarding",
        "HR Documentation",
        "Employee Relations",
        "Employer Branding",
        "Recruitment Marketing",
        "HR Process Improvement",
        "AI-Assisted Recruitment",
      ],
      isLeadership: true,
    },
    {
      company: "New York Global Consultants",
      role: "Technical Recruiter",
      period: "August 2022 – July 2024",
      location: "Kathmandu, Nepal",
      summary:
        "Supported recruitment and placement across 700+ IT technical and non-technical requirements, spanning end-to-end technical hiring across multiple domains.",
      highlights: [
        "End-to-end technical recruitment",
        "Candidate sourcing",
        "Candidate qualification",
        "Requirement analysis",
        "Recruitment pipeline development",
        "Technology talent acquisition",
        "Interview coordination",
        "Candidate follow-up",
        "Recruitment process improvement",
        "Social recruiting",
        "Market research",
      ],
    },
    {
      company: "Kumari Job",
      role: "Technical Recruitment Officer",
      period: "December 2021 – April 2022",
      summary:
        "Focused on recruitment planning, sourcing, screening and candidate evaluation for growing hiring needs.",
      highlights: [
        "Recruitment strategy",
        "Job description development",
        "Sourcing",
        "Resume screening",
        "Interviews",
        "Candidate assessment",
        "Senior-level HR relationship management",
      ],
    },
    {
      company: "Kumari Job",
      role: "Program Coordinator / Tech Recruiter",
      period: "October 2020 – December 2022",
      summary:
        "Designed and launched software development training programs while supporting tech recruitment, placement pipelines and training operations.",
      highlights: [
        "Designed and launched software development training programs",
        "Identified organizational training needs",
        "Recruited and evaluated trainers",
        "Led onboarding and trainer performance evaluation",
        "Designed training programs",
        "Developed placement and internship pipelines",
        "Supported marketing of training programs",
      ],
    },
  ] as ExperienceItem[],
  earlierExperience: [
    {
      company: "Rastriya Banijya Bank",
      role: "Internship",
      period: "November 2019 – February 2020",
      summary: "Electronic Cheque Clearing, Cash Department and Loan Department experience in a banking environment.",
      highlights: ["Electronic Cheque Clearing", "Cash Department", "Loan Department"],
    },
    {
      company: "Alpha Saving and Credit Co-operative Pvt. Ltd.",
      role: "Accountant & Office Assistant",
      period: "June 2011 – August 2015",
      summary: "Career progression from Marketing Representative to Office Assistant to Accountant, supporting administrative and financial operations.",
      highlights: [
        "Financial reporting",
        "Audit coordination",
        "Cash reporting",
        "Program management policies",
        "Administrative operations",
      ],
    },
    {
      company: "Freelancer.com",
      role: "Professional Freelancer",
      period: "January 2015 – July 2019",
      summary: "Early digital work demonstrating self-directed learning and adaptability across online business tasks.",
      highlights: [
        "Digital Marketing",
        "SEO",
        "Data Entry",
        "Blog Posting",
        "Content Writing",
      ],
    },
  ],
  entrepreneurship: [
    {
      company: "Good As Gold Cyber Technologies Inc.",
      role: "Founder",
      period: "May 2022 – Present",
      location: "Nepal",
      summary:
        "Founder focused on building technology-driven solutions and exploring opportunities at the intersection of AI, cybersecurity and business.",
      highlights: ["Technology", "AI", "Cybersecurity", "Business development", "Technology solutions"],
    },
    {
      company: "Laskus AI",
      role: "Founder",
      period: "November 2025 – Present",
      summary:
        "Founder exploring practical applications of artificial intelligence and technology to solve business problems.",
      highlights: ["Artificial Intelligence", "AI solutions", "Technology entrepreneurship"],
    },
    {
      company: "HamroNiwas",
      role: "Business Advisor",
      period: "May 2024 – Present",
      location: "Banepa, Nepal",
      summary: "Advisory support for business development and strategic direction.",
      highlights: ["Business advisory", "Strategic guidance", "Commercial thinking"],
    },
    {
      company: "Sonarhigh Pvt. Ltd.",
      role: "Co-Founder",
      period: "June 2013 – Present",
      summary:
        "International trade and export-focused venture spanning handicrafts, singing bowls and hemp-related products.",
      highlights: ["International trade", "Handicraft exports", "Singing bowls", "Hemp products"],
    },
    {
      company: "Raj Import and Export",
      role: "Proprietor",
      period: "December 2013 – Present",
      summary:
        "Import/export operations rooted in product development, manufacturing coordination and international market development.",
      highlights: ["Import/export", "Product development", "Manufacturing coordination", "International trade"],
    },
  ],
  ventures: [
    {
      name: "Good As Gold Cyber Technologies Inc.",
      role: "Founder",
      year: "May 2022",
      category: "Technology | AI | Cybersecurity",
      description: "Technology-driven business exploring opportunities at the intersection of AI, cybersecurity and commercial solutions.",
      website: "https://www.goodasgoldtech.com",
      accent: "gold",
    },
    {
      name: "Laskus AI",
      role: "Founder",
      year: "November 2025",
      category: "Artificial Intelligence | Technology",
      description: "An AI-focused entrepreneurial venture exploring practical solutions for businesses and digital transformation.",
      website: "https://www.laskus.ai",
      accent: "slate",
    },
    {
      name: "Sonarhigh Pvt. Ltd.",
      role: "Co-Founder",
      year: "June 2013",
      category: "International Trade | Handicrafts | Export",
      description: "Trade-oriented business supporting export and international marketplace experience across handcrafted goods.",
      website: undefined,
      accent: "stone",
    },
    {
      name: "Raj Import & Export",
      role: "Proprietor",
      year: "December 2013",
      category: "International Trade | Manufacturing | Export",
      description: "Import/export venture with a focus on product development, manufacturing coordination and global market reach.",
      website: undefined,
      accent: "amber",
    },
    {
      name: "HamroNiwas",
      role: "Business Advisor",
      year: "May 2024",
      category: "Business Advisory",
      description: "Advisory role supporting business development and strategic decision-making in a growing venture environment.",
      website: undefined,
      accent: "bronze",
    },
  ] as VentureItem[],
  education: [
    {
      institution: "Golden Gate University",
      program: "Doctorate in Business Administration — Research & Development Management",
      period: "2026",
      note: "Current program focus in research and development management; no completion claim made.",
    },
    {
      institution: "Chartered Institute of Management Accountants (CIMA)",
      program: "Professional Management Accountancy",
      period: "2013 – 2016",
    },
    {
      institution: "Imperial Business College, Kathmandu",
      program: "Bachelor's Degree — Business Administration & Management",
      period: "2016 – 2020",
    },
    {
      institution: "Khwopa College",
      program: "+2 Education",
      period: "2011 – 2013",
    },
  ],
  certifications: [
    {
      title: "Advanced Search Engine Optimization",
    },
  ],
  philosophy: [
    {
      title: "People First",
      text: "Strong organizations begin with people who feel valued, supported and challenged to grow.",
    },
    {
      title: "Business Alignment",
      text: "HR should not operate separately from business strategy. People decisions should contribute to organizational objectives.",
    },
    {
      title: "Continuous Learning",
      text: "Technology, recruitment and business are constantly changing. Continuous learning is essential.",
    },
    {
      title: "Build & Execute",
      text: "Ideas matter only when they are translated into execution.",
    },
  ],
  differentiator: {
    hr: [
      "People",
      "Culture",
      "Talent",
      "Recruitment",
      "Employee Experience",
      "Performance",
      "Organizational Development",
    ],
    entrepreneur: [
      "Strategy",
      "Business",
      "Execution",
      "Innovation",
      "Risk",
      "Commercial Thinking",
      "Leadership",
    ],
  },
};
