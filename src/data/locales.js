export const translations = {
  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', certifications: 'Certifications', contact: 'Contact', hire: 'Hire Me' },
    hero: {
      greeting: 'hello, I’m',
      role: 'Software Engineer & Technical Trainer',
      desc: ' Full-Stack Software Engineer & Technical Trainer from Jordan. I combine creativity with technical solutions to deliver secure, scalable web applications and empower others through technical training.',
      checkWork: 'Check my work',
      downloadCv: 'Download CV'
    },
    about: {
      title: 'About Me',
      p1: "I'm a dedicated Full-Stack Software Engineer and Technical Trainer with over two years of hands-on experience, and a Diploma holder in Information Security (Ranked first in the governorate).",
      p2: "My journey is one of continuous growth, combining ongoing learning, hands-on experience, and a passion for teaching. From analyzing complex code and building advanced web applications to training the next generation of developers.",
      current: "Currently working remotely as a Full-Stack Developer and Technical Trainer.",
      items: ['Based in Jordan', 'Analytical Thinking', 'Technical Training', 'Continuous Learning', 'Problem Solving', 'Effective Communication']
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: 'Laravel Full-Stack Trainer',
          company: '@ Code Circle',
          date: 'Jul 2026 - Aug 2026 | Remote',
          points: [
            'Conducted interactive full-stack training sessions in Laravel for adult learners, including postgraduates, educators, and practicing developers, utilizing live coding, hands-on activities, and real-time bug resolution.',
            'Executed iterative code reviews for trainee projects, delivering detailed feedback on debugging techniques and industry best practices to ensure high-quality code submissions.',
            'Employed adaptive teaching methodologies tailored to diverse technical backgrounds, actively guiding trainees through complex software architecture thinking and advanced debugging processes.'
          ],
          tech: ['Laravel', 'PHP']
        },
        {
          role: 'Full-Stack Software Engineer',
          company: '@ Freelance',
          date: 'Mar 2026 - Jun 2026 | Remote',
          points: [
            'Architected and delivered comprehensive freelance web solutions utilizing Laravel, React, Next.js, and Node.js, managing the complete software development lifecycle.',
            'TradeX: Developed a luxury-themed full-stack web platform featuring an automated system for digital product delivery and secure transaction workflows.',
            'Shejo: Co-developed a multi-tenant web application, successfully architecting complex backend models, database relations, and repository synchronization.',
            'Global Bridge: Engineered a scalable full-stack web solution, optimizing frontend performance and ensuring robust backend data integrity to meet specific client requirements.'
          ],
          tech: ['Laravel', 'React', 'Next.js', 'Node.js']
        },
        {
          role: 'Full-Stack Software Engineer',
          company: '@ A-Tech',
          date: 'Nov 2024 - Mar 2026 | Remote',
          points: [
            'Designed scalable web applications using Next.js and React, building robust backends with Node.js and Express.',
            'Managed and optimized complex databases using PostgreSQL and MySQL, including migrations and seeding.',
            'Integrated Square Payment Gateway for secure and reliable online transactions.',
            'Developed secure REST APIs and optimized multilingual support (i18n) for global accessibility.',
            'Worked on developing and maintaining websites using WordPress and Laravel, focusing on performance and stability.',
            'Enhanced dashboard performance by optimizing database queries and maintaining detailed technical documentation.'
          ],
          tech: [
            'Next.js', 'React', 'Node.js', 'Express', 'Laravel', 'WordPress',
            'PostgreSQL', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Square API',
            'REST APIs', 'i18n'
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
            'Laravel', 'PHP', 'React', 'WordPress', 'MySQL', 'JavaScript',
            'HTML', 'CSS', 'Figma', 'Simplon Certified'
          ]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "TradeX | Advanced Trading Automation",
          desc: "A comprehensive Full-Stack platform , featuring a luxury-themed design, smooth animations, and immersive 3D elements. It includes a fully automated system for digital product delivery, seamlessly managed through a secure, hidden admin panel.",
          tags: ["Next.js", "Node.js", "3D UI/UX", "Automation", "Full-Stack"],
          isTeam: false,
          isPrivate: false,
          githubLink: "#",
          demoLink: "https://www.tradexautomatic.com/",
          videoLink: "/Portfolio-Yasmeen-Abu-Zaid/demo/tradex-demo.mp4"
        },
        {
          title: "Enterprise POS & E-Invoicing System",
          desc: "Developed a comprehensive Point of Sale (POS) system integrated with an advanced e-invoicing and billing module. Engineered complex logic to manage billing cycles, automated subscriptions, tax calculations, and secure payment gateway integrations.",
          tags: ["Next.js", "Node.js", "PostgreSQL", "Billing Systems", "SaaS"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        },
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
        },
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
          note: "This was my capstone project at Orange Coding Academy. I am currently working on a major design overhaul and will be publishing it live very soon.",          
          desc: "A web platform that connects beauty salons with customers, allowing easy appointment booking, service comparison, and viewing previous customer reviews.",
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
    skills: {
      title: "Skills & Education",
      techTitle: "Technical Arsenal",
      eduTitle: "Education",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
      edu1: { title: "Bachelor in Software Engineering", place: "Aqaba University of Technology" },
      edu2: { title: "Diploma in Info Security", place: "Al-Balqa Applied University", badge: "First in her class within the Governorate" }
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
    },
    certifications: {
      title: "Certifications",
      items: [
        {
          title: "AWS Certified Cloud Practitioner",
          issuer: "Amazon Web Services (AWS)",
          date: "In Progress",
          // images: [
          //   "/images/certs/aws-cert.jpg"
          // ] 
        },
        {
          title: "Cyber Warriors Training - CTF Track (40 Hours)",
          issuer: "National Cyber Security Center (NCSCJO)",
          date: "May 2026",
            images: [
            "/Portfolio-Yasmeen-Abu-Zaid/images/certs/cyber-warriors.jpg"
          ] 
        },
        {
          title: "Full-Stack Web Development Certification (910 Hours)",
          issuer: "Orange Coding Academy (Certified by PSUT & Simplon)",
          date: "Nov 2024",
   images: [
  "/Portfolio-Yasmeen-Abu-Zaid/images/certs/orange-academy.png",
  "/Portfolio-Yasmeen-Abu-Zaid/images/certs/orange-academy2.png"
]
        }
      ]
    }
  },
  ar: {
    nav: { about: 'من أنا', experience: 'الخبرة', projects: 'المشاريع', skills: 'المهارات', certifications: 'الشهادات', contact: 'تواصل', hire: 'وظفني' },
    hero: {
      greeting: 'مرحباً، أنا',
      role: 'مهندسة برمجيات ومدربة تقنية',
      desc: 'مهندسة برمجيات (Full-Stack) ومدربة تقنية من الأردن. أجمع بين الإبداع والحلول التقنية لبناء تطبيقات ويب آمنة وقابلة للتوسع، بالإضافة إلى شغفي بتمكين المطورين عبر التدريب التقني.',
      checkWork: 'شاهد أعمالي',
      downloadCv: 'تحميل السيرة الذاتية'
    },
    about: {
      title: 'نبذة عني',
      p1: "أنا مهندسة برمجيات (Full-Stack) ومدربة تقنية بخبرة عملية تتجاوز السنتين، وحاصلة على دبلوم في أمن المعلومات (الأولى على المحافظة).",
      p2: "رحلتي هي رحلة تطوير مستمر، تجمع بين التعلم المستمر، الخبرة العملية، والشغف بالتعليم. من فهم وتحليل الأكواد المعقدة وبناء تطبيقات ويب متقدمة، إلى تدريب الجيل القادم من المطورين.",
      current: "أعمل حالياً كمطورة Full-Stack ومدربة تقنية عن بعد.",
      items: ['أقيم في الأردن', 'تفكير تحليلي', 'تدريب تقني', 'تعلم مستمر', 'حل المشكلات', 'تواصل فعّال']
    },
    experience: {
      title: "الخبرات العملية",
      jobs: [
        {
          role: 'مدربة تطوير ويب شامل (Laravel)',
          company: '@ Code Circle',
          date: 'يوليو 2026 - أغسطس 2026 | عن بعد',
          points: [
            'قدمت جلسات تدريبية تفاعلية في تطوير الويب الشامل باستخدام Laravel للمتعلمين البالغين، شملت الخريجين، المعلمين، والمطورين الممارسين، مع التركيز على البرمجة المباشرة والتطبيق العملي وحل المشكلات في الوقت الفعلي.',
            'أجريت مراجعات دورية لأكواد المتدربين، وقدمت ملاحظات تفصيلية حول تقنيات تصحيح الأخطاء وأفضل الممارسات البرمجية لضمان جودة الأكواد.',
            'استخدمت منهجيات تدريس مرنة تتناسب مع الخلفيات التقنية المتنوعة، مع توجيه المتدربين لتطوير التفكير المعماري للبرمجيات وعمليات تصحيح الأخطاء المتقدمة.'
          ],
          tech: ['Laravel', 'PHP']
        },
        {
          role: 'مهندسة برمجيات (Full-Stack)',
          company: '@ عمل حر (Freelance)',
          date: 'مارس 2026 - يونيو 2026 | عن بعد',
          points: [
            'هندسة وتسليم حلول ويب متكاملة للعمل الحر باستخدام Laravel و React و Next.js و Node.js، مع إدارة دورة حياة تطوير البرمجيات بالكامل.',
            'TradeX: تطوير منصة ويب متكاملة ذات طابع فاخر تتميز بنظام آلي لتسليم المنتجات الرقمية وسير عمل آمن للمعاملات.',
            'Shejo: المشاركة في تطوير تطبيق ويب متعدد المستأجرين (Multi-tenant)، مع تصميم نماذج خلفية معقدة وعلاقات قواعد بيانات ومزامنة المستودعات بنجاح.',
            'Global Bridge: هندسة حل ويب متكامل وقابل للتوسع، مع تحسين أداء الواجهة الأمامية وضمان سلامة بيانات الواجهة الخلفية لتلبية متطلبات العملاء.'
          ],
          tech: ['Laravel', 'React', 'Next.js', 'Node.js']
        },
        {
          role: 'مهندس برمجيات شامل',
          company: '@ A-Tech',
          date: 'نوفمبر 2024 - مارس 2026 | عن بعد',
          points: [
            'صممت تطبيقات ويب قابلة للتوسع باستخدام Next.js وReact، وبنيت خلفيات قوية باستخدام Node.js وExpress.',
            'أدرت وحسّنت قواعد بيانات معقدة باستخدام PostgreSQL وMySQL، بما في ذلك الترحيل وتهيئة البيانات.',
            'دمجت بوابة الدفع Square لتنفيذ معاملات إلكترونية آمنة وموثوقة.',
            'طورت REST APIs آمنة، وحسّنت الدعم متعدد اللغات (i18n) لضمان وصول عالمي.',
            'عملت على تطوير وصيانة مواقع باستخدام WordPress وLaravel مع التركيز على الأداء والاستقرار.',
            'حسّنت أداء لوحات التحكم من خلال تحسين استعلامات قاعدة البيانات والحفاظ على توثيق تقني واضح.'
          ],
          tech: [
            'Next.js', 'React', 'Node.js', 'Express', 'Laravel', 'WordPress',
            'PostgreSQL', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Square API',
            'REST APIs', 'i18n'
          ]
        },
        {
          role: 'متدربة تطوير ويب شامل',
          company: '@ أكاديمية أورنج للبرمجة',
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
            'Laravel', 'PHP', 'React', 'WordPress', 'MySQL', 'JavaScript',
            'HTML', 'CSS', 'Figma', 'Simplon Certified'
          ]
        }
      ]
    },
    projects: {
      title: "أبرز المشاريع",
      items: [
        {
          title: "تريد إكس | أتمتة التداول المتقدمة",
          desc: "منصة متكاملة (Full-Stack) تتميز بتصميم فاخر وتجربة مستخدم غنية بالحركات الانسيابية والعناصر ثلاثية الأبعاد. تتضمن المنصة نظاماً مؤتمتاً بالكامل لتسليم المنتجات الرقمية، يتم إدارته بسلاسة عبر لوحة تحكم مخفية وآمنة.",
          tags: ["Next.js", "Node.js", "3D UI/UX", "Automation", "Full-Stack"],
          isTeam: false,
          isPrivate: false,
          githubLink: "#",
          demoLink: "https://www.tradexautomatic.com/",
          videoLink: "/Portfolio-Yasmeen-Abu-Zaid/demo/tradex-demo.mp4" 
        },
        {
          title: "نظام نقاط البيع والفلترة الإلكترونية للمؤسسات",
          desc: "تطوير نظام متكامل لنقاط البيع (POS) مرتبط بوحدة متطورة للفواتير الإلكترونية. تم بناء خوارزميات معقدة لإدارة دورات الفوترة، الاشتراكات المؤتمتة، حسابات الضرائب، والربط الآمن مع بوابات الدفع الإلكتروني.",
          tags: ["Next.js", "Node.js", "PostgreSQL", "Billing Systems", "SaaS"],
          isTeam: true,
          isPrivate: true,
          githubLink: "#",
          demoLink: "#"
        },
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
      edu1: { title: "بكالوريوس هندسة برمجيات", place: "جامعة العقبة للتكنولوجيا" },
      edu2: { title: "دبلوم أمن المعلومات والشبكات", place: "جامعة البلقاء التطبيقية", badge: "الأولى في سنتها بالمحافظة" }
    },
    contact: {
      subtitle: "لنتحدث",
      title: "تواصل معي",
      desc: " متاحة حالياً للعمل بدوام كامل أو جزئي، ومستعدة للرد على أي استفسارات أو فرص تعاون بسرعة وفعالية.",
      form: { name: "الاسم", email: "البريد الإلكتروني", msg: "الرسالة", send: "إرسال الرسالة" },
      footer: "تم التصميم والبرمجة بواسطة ياسمين أبو زيد"
    },
    terminal: {
      title: "منصة المطور التفاعلية",
      intro: [
        "> جاري تهيئة الواجهة التفاعلية...",
        "> اكتب 'help' لعرض الأوامر المتاحة."
      ]
    },
    certifications: {
      title: "الشهادات",
      items: [
        {
          title: "ممارس سحابة معتمد (Cloud Practitioner)",
          issuer: "خدمات أمازون ويب (AWS)",
          date: "قيد الإنجاز",
          // images: [
          //   "/images/certs/aws-cert.jpg"
          // ] 
        },
        {
          title: "تدريب محاربي السايبر - مسار CTF (40 ساعة)",
          issuer: "المركز الوطني للأمن السيبراني (NCSCJO)",
          date: "مايو 2026",
          images: [
            "/Portfolio-Yasmeen-Abu-Zaid/images/certs/cyber-warriors.jpg"
          ] 
        },
        {
          title: "شهادة تطوير الويب الشامل (910 ساعة)",
          issuer: "أكاديمية أورنج للبرمجة (معتمدة من PSUT و Simplon)",
          date: "نوفمبر 2024",
        images: [
  "/Portfolio-Yasmeen-Abu-Zaid/images/certs/orange-academy.png",
  "/Portfolio-Yasmeen-Abu-Zaid/images/certs/orange-academy2.png"
]
        }
      ]
    }
  }
};