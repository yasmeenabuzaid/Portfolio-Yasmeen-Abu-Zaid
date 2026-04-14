export const translations = {
  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact', hire: 'Hire Me' },
hero: {
  greeting: 'Hi, I’m',
  role: 'I design and develop high-performance web applications.',
  desc: ' Full-Stack Software Engineer from Jordan, specializing in the MERN stack. I combine creativity with technical solutions to deliver secure, scalable web applications with a seamless user experience.',
  checkWork: 'Check my work',
  downloadCv: 'Download CV'
},

about: {
  title: 'About Me',
  p1: "I'm a dedicated Full-Stack Software Engineer with over two years of hands-on experience, and a Diploma holder in Information Security (Ranked first in the governorate).",
  p2: "My journey is one of continuous growth, combining ongoing learning, hands-on experience, and persistent effort. From understanding and analyzing complex code to building advanced and efficient web applications.",
  current: "Currently working remotely as a Full-Stack Developer.",
  items: ['Based in Jordan', 'Analytical Thinking', 'Teamwork', 'Continuous Learning', 'Problem Solving', 'Effective Communication']
},
  jobs: [
  {
    role: 'Full-Stack Web Developer',
    company: '@ A-Tech',
    date: 'Nov 2024 - Present | Remote',
    points: [
      'Designed scalable web applications using Next.js and React, building robust backends with Node.js and Express.',
      'Managed and optimized complex databases using PostgreSQL and MySQL, including migrations and seeding.',
      'Integrated Square Payment Gateway for secure and reliable online transactions.',
      'Developed secure REST APIs and optimized multilingual support (i18n) for global accessibility.',
      'Worked on developing and maintaining websites using WordPress and Laravel, focusing on performance and stability.',
      'Enhanced dashboard performance by optimizing database queries and maintaining detailed technical documentation.'
    ],
    tech: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'Laravel',
      'WordPress',
      'PostgreSQL',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
      'Square API',
      'REST APIs',
      'i18n'
    ]
  },
  {
    role: 'Full-Stack Web Development Trainee',
    company: '@ Orange Coding Academy',
    date: 'May 2024 - Nov 2024 | Aqaba',
    points: [
      'Developed end-to-end web applications using React, JavaScript, PHP (Laravel), and MySQL from frontend to backend.',
      'Built responsive web pages using HTML and CSS, following best UX/UI practices.',
      'Worked on website development using WordPress, customizing themes to meet project requirements.',
      'Collaborated with UI/UX teams using Figma to transform designs into functional applications.',
      'Delivered individual and group projects with a focus on clean code and debugging.',
      'Certified by Princess Sumaya University (PSUT) and Simplon (France) after intensive technical training.'
    ],
    tech: [
      'Laravel',
      'PHP',
      'React',
      'WordPress',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
      'Figma',
      'Simplon Certified'
    ]
  }
],

    
    projects: {
      title: "Featured Projects",
      items: [
        // {
        //   title: "E-Commerce Payment Integration",
        //   desc: "A secure payment system integrated with Square Gateway, handling real-time transactions and order processing.",
        //   tags: ["Next.js", "Node.js", "Square API", "Security"],
        //   isTeam: true,
        //   isPrivate: true, // Company project
        //   githubLink: "#", 
        //   demoLink: "#"
        // },
{
          title: "360° Interactive Image Viewer",
          desc: "An immersive 3D panoramic image viewer built with high-performance rendering capabilities, allowing users to explore spaces dynamically.",
           note: "The live demo uses free hosting tiers. If the site doesn't load due to ISP blocks, try using mobile data", 
          tags: ["Next.js", "Three.js", "React", "WebGL"],
          isTeam: false,
          isPrivate: false,
          githubLink: "https://github.com/yasmeenabuzaid/OmniView.git", 
          demoLink: "https://lnkd.in/dUztGxW5" 
        },
    {
    title: "Remote Digital Services Platform",
    desc: "A freelance task for an international client featuring a decoupled architecture (separated frontend and backend). Focused on implementing secure business logic, API integrations, and responsive UI components.",
 note: "The live demo uses free hosting tiers. If the site doesn't load due to ISP blocks, try using mobile data. Please also allow a few extra seconds for the backend's initial cold start.", 
    tags: ["Next.js", "Node.js", "Sequelize", "MUI", "Tailwind CSS"],
    isTeam: false,
    isPrivate: false, 
    githubLinks: [
        { label: "Frontend", url: "https://github.com/yasmeenabuzaid/onlinemihna-technical-task-frontend.git" },
        { label: "Backend", url: "https://github.com/yasmeenabuzaid/onlinemihna-technical-task-backend.git" }
    ],
    videoLink: "https://youtu.be/0rx9gTDoy2U", 
    demoLink: "https://onlinemihna-technical-task-frontend.vercel.app/en" 
} ,
{
          title: "JavaScript Problem Solving (Codewars)",
          desc: "A continuous journey of tackling algorithmic challenges to improve analytical thinking. Focused on breaking down problems, designing algorithms, and writing clean, maintainable code.",
          note: "Strategy: I solve problems using two approaches—manual low-level logic (to understand the hood) and modern JS methods like .map() and .reduce() (for efficiency).",
          tags: ["JavaScript", "Problem Solving", "Algorithms", "Clean Code"],
          isTeam: false,
          isPrivate: false,
          githubLink: "https://github.com/yasmeenabuzaid/codewars-javascript-solutions.git", 
          demoLink: "#" 
        },
        {
          title: "Salonak",
note: "This was my capstone project at Orange Coding Academy. I am currently working on a major design overhaul and will be publishing it live very soon.",          desc: "A web platform that connects beauty salons with customers, allowing easy appointment booking, service comparison, and viewing previous customer reviews.",
          tags: ["Laravel", "Booking System", "Dashboard", "MVC", "MySQL"],
          isTeam: false,
          isPrivate: false,
          githubLink: "https://github.com/yasmeenabuzaid/masterpiece.git",
          demoLink: "#"
        },
        {
          title: "Customer Relationship Management (CRM)",
          desc: "Developed a comprehensive CRM system to manage clients, sales, and internal tasks using Next.js and Express.",
          tags: ["Next.js", "Express", "Node.js", "PostgreSQL"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        },
        // {
        //   title: "Weather Data Application",
        //   desc: "Built a web application to display weather data for different regions, with an interactive interface and dynamic maps.",
        //   tags: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
        //   isTeam: false,
        //   isPrivate: false,
        //   githubLink: "https://github.com/yourusername/weather",
        //   demoLink: "#"
        // },
        {
          title: "E-commerce Store",
          desc: "Developed a full-featured e-commerce platform with product management, shopping cart, online payment, and seamless user experience.",
          tags: ["Next.js", "Stripe API", "React", "MySQL"],
          isTeam: false,
          isPrivate: true,
          githubLink: "https://github.com/yourusername/ecommerce",
          demoLink: "#"
        },
        {
          title: "Gym Management System",
          desc: "Developed a system to manage a gym, including membership tracking, class scheduling, managing trainers and staff.",
          tags: ["React", "Node.js", "Express", "MongoDB"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        },
        {
          title: "Service Booking & Orders System",
          desc: "Developed a system to manage customer orders and service bookings, with features for tracking orders and managing services.",
          tags: ["Express", "Node.js", "MongoDB", "Dashboard"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        },
        {
          title: "Human Resources Management System (HR)",
          desc: "Developed a system to manage employees, track attendance and leaves, performance evaluation, and payroll management.",
          tags: ["React", "Node.js", "Express", "MySQL"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        }
      ]
    },
"experience": {
  "title": "Experience",
  "jobs": [
    {
      "role": "Software Engineer",
      "company": "@ A-Tech (Remote)",
      "date": "Nov 2024 - Feb 2026",
      "points": [
        "Spearheaded the development of enterprise-level web applications using Next.js, React, and TypeScript.",
        "Engineered robust backend systems and secure RESTful APIs using Node.js, Express, and Laravel, leveraging AWS and Azure.",
        "Provided training to clients ensuring smooth system onboarding and maintained detailed technical documentation in a fully remote Agile environment."
      ],
      "tech": ["Next.js", "React", "TypeScript", "Node.js", "Express", "Laravel", "AWS","WordPress","CL/CD"]
    },
    {
      "role": "Full-Stack Web Development Trainee",
      "company": "@ Orange Coding Academy (Hybrid)",
      "date": "May 2024 - Nov 2024",
      "points": [
        "Developed 5+ full-stack web applications using React, PHP (Laravel), and MySQL.",
        "Designed and deployed a comprehensive individual capstone project demonstrating end-to-end UI/UX design and backend logic mastery.",
        "Collaborated within Agile/Scrum teams to build responsive projects, adhering strictly to OOP principles."
      ],
      "tech": ["React", "PHP", "Laravel", "MySQL", "JavaScript", "WordPress"]
    }
  ]
},
skills: {
  title: "Skills & Education",
  techTitle: "Technical Arsenal",
  eduTitle: "Education",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
  // edu1: { title: "Bachelor in Software Engineering", place: "Aqaba University of Technology", year: "2025-2027" },
  edu2: { title: "Diploma in Info Security", place: "Al-Balqa Applied University", year: "2022-2024", badge: "First in her class within the Governorate" }
},

    contact: {
      subtitle: "Let's Talk",
      title: "Get In Touch",
      desc: "Currently available for full-time or part-time work, and ready to respond to any inquiries or collaboration opportunities promptly and efficiently",
      form: { name: "Your Name", email: "Your Email", msg: "Message", send: "Send Message" },
      footer: "Designed & Built by Yasmeen Abu Zaid"
    },
    terminal: {
      title: "Interactive Developer Console",
      intro: [
        "> Initializing interactive shell...",
        "> Type 'help' to see available commands."
      ]
    }
  },
  ar: {
    nav: { about: 'من أنا', experience: 'الخبرة', projects: 'المشاريع', skills: 'المهارات', contact: 'تواصل', hire: 'وظفني' },
 hero: {
  greeting: 'مرحباً، أنا',
  role: 'أبتكر وأطور تطبيقات ويب عالية الأداء.',
desc: 'Full-Stack Software Engineer من الأردن، متخصصة في تقنيات MERN، أطور تطبيقات ويب حديثة تجمع بين الأداء العالي، الأمان، وقابلية التوسع مع تجربة مستخدم مميزة.',  checkWork: 'شاهد أعمالي',
  downloadCv: 'تحميل السيرة الذاتية'
},

  about: {
  title: 'نبذة عني',
  p1: "أنا مهندسة برمجيات (Full-Stack) بخبرة عملية تتجاوز السنتين، وحاصلة على دبلوم في أمن المعلومات (الأولى على المحافظة).",
  p2: "رحلتي هي رحلة تطوير مستمر، تجمع بين التعلم المستمر، الخبرة العملية، والجهد المتواصل. من فهم وتحليل الأكواد المعقدة إلى بناء تطبيقات ويب متقدمة وفعّالة.",
  current: "أعمل حالياً كمطورة Full-Stack عن بعد.",
  items: ['أقيم في الأردن', 'تفكير تحليلي', 'العمل ضمن فريق', 'تعلم مستمر', 'حل المشكلات', 'تواصل فعّال']
},
  jobs: [
  {
    role: 'مطور ويب شامل',
    company: 'في A-Tech',
    date: 'نوفمبر 2024 - الآن | عن بعد',
    points: [
      'صممت تطبيقات ويب قابلة للتوسع باستخدام Next.js وReact، وبنيت خلفيات قوية باستخدام Node.js وExpress.',
      'أدرت وحسّنت قواعد بيانات معقدة باستخدام PostgreSQL وMySQL، بما في ذلك الترحيل وتهيئة البيانات.',
      'دمجت بوابة الدفع Square لتنفيذ معاملات إلكترونية آمنة وموثوقة.',
      'طورت REST APIs آمنة، وحسّنت الدعم متعدد اللغات (i18n) لضمان وصول عالمي.',
      'عملت على تطوير وصيانة مواقع باستخدام WordPress وLaravel مع التركيز على الأداء والاستقرار.',
      'حسّنت أداء لوحات التحكم من خلال تحسين استعلامات قاعدة البيانات والحفاظ على توثيق تقني واضح.'
    ],
    tech: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'Laravel',
      'WordPress',
      'PostgreSQL',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
      'Square API',
      'REST APIs',
      'i18n'
    ]
  },
  {
    role: 'متدربة تطوير ويب شامل',
    company: 'في أكاديمية أورنج للبرمجة',
    date: 'مايو 2024 - نوفمبر 2024 | العقبة',
    points: [
      'طورت تطبيقات ويب متكاملة باستخدام React وJavaScript وPHP (Laravel) وMySQL من الواجهة الأمامية حتى الخلفية.',
      'أنشأت صفحات ويب متجاوبة باستخدام HTML وCSS مع مراعاة أفضل ممارسات تجربة المستخدم.',
      'عملت على تطوير مواقع باستخدام WordPress وتخصيص القوالب بما يتناسب مع متطلبات المشاريع.',
      'تعاونت مع فرق UI/UX باستخدام Figma لتحويل التصاميم إلى تطبيقات عملية.',
      'قدمت مشاريع فردية وجماعية مع التركيز على الكود النظيف وتصحيح الأخطاء.',
      'حصلت على شهادة معتمدة من جامعة الأميرة سمية (PSUT) وSimplon (فرنسا) بعد تدريب تقني مكثف.'
    ],
    tech: [
      'Laravel',
      'PHP',
      'React',
      'WordPress',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
      'Figma',
      'Simplon Certified'
    ]
  }
]
,
"experience": {
  "title": "الخبرات العملية",
  "jobs": [
    {
      "role": "مهندسة برمجيات",
      "company": "@ A-Tech (عن بُعد)",
      "date": "نوفمبر 2024 - فبراير 2026",
      "points": [
        "قيادة تطوير تطبيقات ويب على مستوى المؤسسات باستخدام Next.js و React و TypeScript لضمان تسليم المشاريع بكفاءة.",
        "هندسة أنظمة خلفية (Backend) قوية وواجهات برمجة تطبيقات (APIs) آمنة باستخدام Node.js و Express و Laravel مع خدمات AWS و Azure.",
        "تقديم التدريب للعملاء لضمان سلاسة الاستخدام، والحفاظ على توثيق فني دقيق ضمن بيئة عمل Agile عن بُعد."
      ],
      "tech": ["Next.js", "React", "TypeScript", "Node.js", "Express", "Laravel", "AWS","WordPress","CL/CD"]
    },
    {
      "role": "متدربة تطوير ويب شامل (Full-Stack)",
      "company": "@ Orange Coding Academy (هجين)",
      "date": "مايو 2024 - نوفمبر 2024",
      "points": [
        "تطوير أكثر من 5 تطبيقات ويب متكاملة باستخدام React و PHP (Laravel) و MySQL.",
        "تصميم ونشر مشروع تخرج فردي شامل يثبت التمكن من واجهات المستخدم (UI/UX) والمنطق البرمجي الخلفي (Backend).",
        "التعاون ضمن فرق Agile/Scrum لبناء مشاريع متجاوبة وتطبيق مبادئ البرمجة كائنية التوجه (OOP)."
      ],
      "tech": ["React", "PHP", "Laravel", "MySQL", "JavaScript", "WordPress"]
    }
  ]
},
    projects: {
      title: "أبرز المشاريع",
      items: [
        // {
        //   title: "نظام دفع إلكتروني",
        //   desc: "نظام دفع آمن مدمج مع Square Gateway، يعالج المعاملات المالية ومعالجة الطلبات في الوقت الفعلي.",
        //   tags: ["Next.js", "Node.js", "Square API", "Security"],
        //   isTeam: true,
        //   isPrivate: true,
        //   githubLink: "#",
        //   demoLink: "#"
        // },

  {
          title: "مستعرض صور 360 درجة",
          desc: "مستعرض تفاعلي للصور البانورامية ثلاثية الأبعاد، يوفر تجربة مستخدم سلسة وأداء عالي في عرض الرسوميات، مما يتيح للمستخدمين استكشاف المساحات بشكل ديناميكي.",
          note: "يعتمد الرابط الحي على استضافة مجانية. إذا لم يفتح الموقع بسبب حظر بعض مزودي الخدمة (ISP)، يرجى محاولة فتح الرابط باستخدام بيانات الهاتف (Mobile Data).",
          tags: ["Next.js", "Three.js", "React", "WebGL"],
          isTeam: false,
          isPrivate: false,
          githubLink: "https://github.com/yasmeenabuzaid/OmniView.git", 
          demoLink: "https://lnkd.in/dUztGxW5" 
        },
        {
          title: "تحديات الخوارزميات (Codewars)",
          desc: "رحلة مستمرة في حل التحديات البرمجية لتطوير التفكير التحليلي. يركز هذا المستودع على تحليل المشاكل، هندسة الخوارزميات، وكتابة كود نظيف وقابل للصيانة.",
          note: "استراتيجية الحل: أعتمد على طريقتين—بناء المنطق من الصفر (Manual Logic) لفهم الأساسيات، واستخدام دوال JavaScript الحديثة لكتابة كود مختصر وفعال.",
          tags: ["JavaScript", "Problem Solving", "Algorithms", "Clean Code"],
          isTeam: false,
          isPrivate: false,
          githubLink: "https://github.com/yasmeenabuzaid/codewars-javascript-solutions.git",
          demoLink: "#" 
        },
        {
          title: "منصة خدمات رقمية (عمل حر)",
          desc: "مهمة عمل حر لعميل دولي مبنية بهيكلية برمجية مفصولة (Decoupled Architecture). يركز المشروع على بناء منطق برمجي آمن (Business Logic)، الربط مع واجهات برمجة التطبيقات (APIs)، وتطوير واجهات مستخدم متجاوبة.",
          note: "يعتمد الرابط الحي على استضافة مجانية. إذا لم يفتح الموقع جرب استخدام بيانات الهاتف. يرجى أيضاً الانتظار بضع ثوانٍ إضافية عند التحميل الأول للسيرفر (Cold Start).", 
          tags: ["Next.js", "Node.js", "Sequelize", "MUI", "Tailwind CSS"],
          isTeam: false,
          isPrivate: false, 
          githubLinks: [
            { label: "Frontend", url: "https://github.com/yasmeenabuzaid/onlinemihna-technical-task-frontend.git" },
            { label: "Backend", url: "https://github.com/yasmeenabuzaid/onlinemihna-technical-task-backend.git" }
          ],
          videoLink: "https://youtu.be/0rx9gTDoy2U", 
          demoLink: "https://onlinemihna-technical-task-frontend.vercel.app/en" 
        },
        {
          title: "Salonak",
          note: "هذا المشروع كان مشروع تخرجي من أكاديمية أورنج للبرمجة. أعمل حالياً على تحديث جوهري وشامل للتصميم، وسيتم نشره لايف في القريب العاجل.",
          desc: "منصة ويب تربط صالونات التجميل بالعملاء، وتتيح حجز المواعيد بسهولة، ومقارنة الخدمات، والاطلاع على تقييمات العملاء السابقة.",
          tags: ["Laravel", "نظام الحجز", "لوحة التحكم", "MVC", "MySQL"],
          isTeam: false,
          isPrivate: false,
          githubLink: "https://github.com/yasmeenabuzaid/masterpiece.git",

          demoLink: "#"
        },
        {
          title: "نظام إدارة علاقات العملاء (CRM)",
          desc: "تطوير نظام CRM متكامل لإدارة العملاء والمبيعات والمهام الداخلية، باستخدام Next.js وExpress، مع واجهة تفاعلية.",
          tags: ["Next.js", "Express", "Node.js", "PostgreSQL"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        },
        // {
        //   title: "تطبيق عرض بيانات الطقس",
        //   desc: "تطوير تطبيق ويب لعرض بيانات الطقس للمناطق المختلفة، مع واجهة تفاعلية وخرائط ديناميكية.",
        //   tags: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
        //   isTeam: false,
        //   isPrivate: false,
        //   githubLink: "https://github.com/yourusername/weather",
        //   demoLink: "#"
        // },
        {
          title: "متجر إلكتروني",
          desc: "إنشاء متجر إلكتروني متكامل مع إدارة المنتجات، سلة التسوق، الدفع الإلكتروني، وتجربة مستخدم سلسة.",
          tags: ["Next.js", "Stripe API", "React", "MySQL"],
          isTeam: false,
          isPrivate: true,
          githubLink: "https://github.com/yourusername/ecommerce",
          demoLink: "#"
        },
        {
          title: "نظام إدارة الصالة الرياضية",
          desc: "تطوير نظام لإدارة الصالة الرياضية يشمل تتبع العضويات، جدولة الحصص، إدارة المدربين والموظفين، وتقارير الأداء.",
          tags: ["React", "Node.js", "Express", "MongoDB"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        },
        {
          title: "نظام إدارة الطلبات والحجوزات",
          desc: "تطوير نظام لإدارة طلبات العملاء وحجوزات الخدمات، مع إمكانيات متابعة الطلبات، إدارة الخدمات، والتقارير اللحظية.",
          tags: ["Express", "Node.js", "MongoDB", "Dashboard"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        },
        {
          title: "نظام إدارة الموارد البشرية (HR)",
          desc: "تطوير نظام لإدارة الموظفين، تتبع الحضور والإجازات، تقييم الأداء، وإدارة الرواتب، مع واجهة تفاعلية سهلة الاستخدام.",
          tags: ["React", "Node.js", "Express", "MySQL"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        }
      ]
    },
    skills: {
      title: "المهارات والتعليم",
      techTitle: "الترسانة التقنية",
      eduTitle: "التعليم",
      frontend: "واجهات أمامية",
      backend: "واجهات خلفية",
      database: "قواعد بيانات",
      tools: "أدوات",
      // edu1: { title: "بكالوريوس هندسة برمجيات", place: "جامعة العقبة للتكنولوجيا", year: "2025-2027" },
      edu2: { title: "دبلوم أمن المعلومات والشبكات", place: "جامعة البلقاء التطبيقية", year: "2022-2024", badge: "الأولى في سنتها بالمحافظة" }
    },
    contact: {
      subtitle: "لنتحدث",
      title: "تواصل معي",
      desc:" متاحة حالياً للعمل بدوام كامل أو جزئي، ومستعدة للرد على أي استفسارات أو فرص تعاون بسرعة وفعالية.",
      form: { name: "الاسم", email: "البريد الإلكتروني", msg: "الرسالة", send: "إرسال الرسالة" },
      footer: "تم التصميم والبرمجة بواسطة ياسمين أبو زيد"
    },
    terminal: {
      title: "منصة المطور التفاعلية",
      intro: [
        "> جاري تهيئة الواجهة التفاعلية...",
        "> اكتب 'help' لعرض الأوامر المتاحة."
      ]
    }
  }
};