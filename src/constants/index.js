import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    cpp,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
  export const resumeNavLinks = [
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