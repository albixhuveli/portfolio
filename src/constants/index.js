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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

    {
      title: "Teaching Assistant (TA)",
      company_name: "RF CUNY Research Foundation",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2020 - Present",
      points: [
        "Organized weekly meetings to assist students in comprehending data structures.",
        "Educated students on the fundamentals of Python, Java and object-oriented programming concepts.",
        "Led analysis on algorithm performance and provided recommendations for optimization.",
        "Participating in code reviews and providing constructive feedback to other students.",
      ],
    },
    {
      title: "Python Tutoring",
      company_name: "NYC DOE",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2020 - Aug 2020",
      points: [
        "Assisted students in learning the fundamentals of programming and showcased how to effectively create simple projects in JavaScript and Python.",
        "Conducted one-on-one help on how to improve code implementation and time complexity while also helping  professors in grading extra credit work and after class tutoring",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
        "Programmable software application designed to automate tasks, moderate discussions, and interact with users within the Discord platform through the use of custom commands and scripts.",
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
      image: carrent,
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
      image: jobit,
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
      image: tripguide,
      source_code_link: "https://github.com/albixhuveli/AmazonTrackApp",
    },
  ];
  
  export { services, technologies, experiences, projects };