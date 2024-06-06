import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    sql,
    tailwind,
    nodejs,
    net,
    git,
    python,
    docker,
    actioncity,
    rescuefoster,
    rfcuny,
    tutorcorps,
    carrent,
    discordbot,
    flooringapp,
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
      id: "works",
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
      title: "Frontend Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MS SQL Server",
      icon: sql,
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
      name: "net",
      icon: net,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    
    {
      title: "Software Engineer",
      company_name: "Action City Comics",
      icon: actioncity,
      iconBg: "#383E56",
      date: "Aug 2023 - Jan 2024",
      points: [
        "Created back-end web application for operations and data management.",
        "Allows users to add, modify, and delete merchandise from the database directory.",
        "Uses a SQL Server backend with C# and the .Net framework with JavaScript and Angular for UI.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Rescue Foster",
      icon: rescuefoster,
      iconBg: "#383E56",
      date: "Sept 2022 - Feb 2023",
      points: [
        "Implemented mobile-friendly layouts for various platforms and browsers using React.js and Bootstrap.",
        "Developed clean, semantic markup with best practices utilizing HTML5, CSS3, and JavaScript libraries.",
        "Implemented marketing promotional tactics that led to 34% growth in total social media shares and 27% increase in website traffic from sitewide social media posts across the platform",
      ],
    },
    {
      title: "Teaching Assistant (TA)",
      company_name: "RF CUNY Research Foundation",
      icon: rfcuny,
      iconBg: "#E6DEDD",
      date: "March 2020 - Present",
      points: [
        "Organized weekly meetings to assist students in comprehending assignments.",
        "Educated students on the fundamentals of Python, Java and object-oriented programming concepts.",
        "Led analysis on algorithm performance and provided recommendations for optimization.",
        "Participating in code reviews and providing constructive feedback to other students.",
      ],
    },
    {
      title: "Python Tutoring",
      company_name: "NYC DOE - Tutor Corps",
      icon: tutorcorps,
      iconBg: "#383E56",
      date: "Jan 2020 - Aug 2020",
      points: [
        "Assisted students in learning the fundamentals of programming and showcased how to effectively create simple projects in JavaScript and Python.",
        "Conducted one-on-one help on how to improve code implementation and time complexity while also assisting in after class tutoring",
        "Participating in code reviews and providing constructive feedback to other students.",
      ],
    },
    
  ];
  
  /*const testimonials = [
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
  */
  const projects = [
    {
      name: "Discord Bot",
      description:
        "A project designed to automate web features for community service, custom commands and scripts, moderate discussions, and interact with users within the Discord platform through external API data scraping integration.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Heroku Cloud",
          color: "green-text-gradient",
        },
        
      ],
      image: discordbot,
      source_code_link: "https://github.com/albixhuveli/discord-bot",
    },
    {
      name: "Flooring Android App",
      description:
        "Mobile application designed to assist users in selecting, visualizing, and estimating various types of flooring options for their homes or commercial spaces, offering a convenient and interactive way to explore different materials, patterns, and designs.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
      
      ],
      image: flooringapp,
      source_code_link: "https://github.com/albixhuveli/FlooringAppAndroid",
    },
    {
      name: "Amazon/Ebay Price Track App",
      description:
        "Software tool that enables users to monitor and track the prices of products listed on Amazon or eBay, providing real-time updates and alerts to assist users in making informed purchasing decisions.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "BeautifulSoup",
          color: "green-text-gradient",
        },
        {
          name: "SendGrid",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/albixhuveli/AmazonTrackApp",
    },
  ];
  
  export { services, technologies, experiences, projects };