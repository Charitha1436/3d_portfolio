export const resumeNavLinks =  [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "achievements", title: "Achievements" },
    { id: "contact", title: "Contact" },
  ];
  
  export const resumeData = {
    name: "Charitha Nalipireddy",
    email: "charithanarayan33@gmail.com",
    phone: "+91 89777 70905",
    github: "https://github.com/Charitha1436",
    linkedin: "https://www.linkedin.com/in/charitha-nalipireddy-4a1366260/",
    summary: "Results-driven Full Stack Software Engineer specializing in high-throughput web application architecture, microservices, and real-time backend systems using Next.js, React.js, Go, Node.js, PostgreSQL, and Redis.",
  };
  
  export const resumeExperience = [
    {
      role: "Software Development Intern",
      company: "AppsForBharat",
      date: "Jan 2026 – Jul 2026",
      tech: "React.js • Go • PostgreSQL • Redis • Razorpay",
      points: [
        "Built 15+ reusable React.js components for production platforms supporting 10,000+ daily active users.",
        "Deployed 10+ concurrent RESTful Web Services in Go with PostgreSQL and Redis, reducing API latency by 40%.",
        "Integrated Razorpay webhooks and authentication, securing 500+ live financial checkout workflows.",
        "Resolved 20+ production defects through weekly Agile pull-request reviews, lowering regressions by 15%.",
      ],
    },
    {
      role: "S.N. Bose Research Intern",
      company: "MedYou – Community Health Forum",
      date: "May 2025 – Jul 2025",
      tech: "HTML5 • CSS3 • JavaScript • SQL",
      points: [
        "Created community forum interfaces serving 200+ active members.",
        "Optimized a normalized SQL schema across 5+ tables, improving query execution by 35%.",
        "Implemented threaded discussions and content ranking for 100+ posts, increasing engagement by 40%.",
      ],
    },
  ];
  
  export const resumeSkills = [
    { title: "Languages", items: ["C", "C++", "JavaScript", "TypeScript", "Go", "SQL", "Python", "HTML5", "CSS3"] },
    { title: "Frontend", items: ["Next.js", "React.js", "React Router", "Tailwind CSS", "WebSockets", "State Management"] },
    { title: "Backend", items: ["Node.js", "Express.js", "Socket.io", "REST APIs", "Microservices", "JWT"] },
    { title: "Databases", items: ["PostgreSQL", "Prisma ORM", "MySQL", "Redis", "Firebase"] },
    { title: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "Linux", "VS Code", "CI/CD"] },
    { title: "Core Concepts", items: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "OOP"] },
  ];
  
  export const resumeProjects = [
    {
      title: "Real-Time Bike Auction",
      type: "Full Stack • Real-time",
      description: "A real-time bidding platform with role-based access, live inventory management, buyer verification, and transaction audit logs.",
      stack: ["Next.js 15", "Socket.io", "Prisma", "PostgreSQL", "WebSockets"],
      metric: "<100ms",
      metricLabel: "sync latency",
      github: "https://github.com/Charitha1436",
    },
    {
      title: "Contest Tracker",
      type: "Web Application",
      description: "An automated competitive programming dashboard aggregating contests from LeetCode, Codeforces, CodeChef, and AtCoder.",
      stack: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Web Scraping"],
      metric: "70%",
      metricLabel: "less manual lookup",
      github: "https://github.com/Charitha1436",
    },
  ];
  
  export const resumeAchievements = [
    { value: "200+", label: "DSA problems solved", detail: "LeetCode, Codeforces & GeeksforGeeks" },
    { value: "National", label: "Semi-Finalist", detail: "Flipkart GRiD 7.0" },
    { value: "350+", label: "Event participants", detail: "Event organization & anchoring" },
    { value: "95.6%", label: "Class XII score", detail: "Sri Chaitanya Educational Institutions" },
  ];