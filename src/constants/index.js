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
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphics Designer",
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
      name: "mysql",
      icon: docker,
    },
    {
      name: "dotnetframework",
      icon: typescript,

    },
  ];
  
  const experiences = [
    {
      title: "Junior HR Specialist with Technical Support",
      company_name: "Трест Россем",
      icon: starbucks,
      iconBg: "#fffff2",
      date: "March 2021 - April 2022",
      points: [
        "Managed various HR functions including recruitment, onboarding, employee relations, and performance management.",
        "Oversaw the legalization process of documents for foreign workers, ensuring compliance with necessary permits and visas.",
        "Provided technical support to employees, assisting with troubleshooting hardware, software, and other technical issues.",
        "Supported administrative tasks within the HR department, including documentation management and employee file organization.",
        "Communicated with employees, both local and foreign, and coordinated HR-related matters with other departments and external entitie",
      ],
    },
    {
    title: "Founder and CEO",
    company_name: "Prodigy AI",
    icon: tesla,
    iconBg: "#ffffff",
    date: "September 2022 - Present",
    points: [
    "Founded and established Prodigy AI, a company focused on artificial intelligence solutions.",
    "Lead strategic planning, business development, and overall management of the company.",
    "Oversee the development and implementation of AI technologies and solutions.",
    "Integrate and research various AI resources, exploring new technologies and advancements.",
    "Collaborate with clients and stakeholders to identify their needs and provide tailored AI solutions.",
    ],
    },
    {
      title: "Founder, and Software Developer",
      company_name: "ByteVerse",
      icon: shopify,
      iconBg: "#ffffff",
      date: "May 2023 - Present",
      points: [
      "Founded and established ByteVerse, a leading software development company offering cutting-edge solutions.",
      "Lead strategic planning, business development, and overall management of the company.",
      "Utilize expertise in software development to actively contribute to React development, UI/UX design, and mobile application development projects.",
      "Collaborate with a talented team of software engineers, designers, and consultants to deliver exceptional results.",
      "Stay abreast of industry trends and emerging technologies to drive innovation and maintain a competitive edge.",
      "Work closely with clients and stakeholders to understand their requirements and provide tailored software solutions.",
      "Provide technical guidance and mentorship to team members, promoting their professional growth and development.",
      "Adhere to best practices, coding standards, and quality assurance processes to ensure high-quality deliverables.",
      ]
      },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I had the privilege of working alongside Shuvo in the HR department, and I am impressed by his professionalism and dedication. His valuable contributions and exceptional skills greatly benefited our team.",
      name: "Vera Sabastianova",
      designation: "Head of HR Department",
      company: "Trest Rossem",
      image: "https://randomuser.me/api/portraits/women/83.jpg",
    },
    {
      testimonial:
        "Wahid is a dedicated learner, embodying excellence and commitment. Was valuable asset to our training school.",
      name: "Denis Shmigirilov",
      designation: "COO",
      company: "ASE",
      image: "https://randomuser.me/api/portraits/men/79.jpg",
    },
    {
      testimonial:
        "Wahid's web development skills helped me create an impressive personal portfolio website. Highly recommended!",
      name: " Topon Kumar",
      designation: "CEO",
      company: "SaiMass Corporation",
      image: "https://randomuser.me/api/portraits/men/69.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Nexa",
      description:"Nexa is a feature-rich social media platform designed to bring people closer together. With Nexa, users can create profiles, connect with friends, share posts, photos, and videos, engage in real-time conversations, discover trending content, join groups, and stay updated on the latest news and events. Experience the power of social connectivity with Nexa.",
      tags: [
        {
          name: ".NET Framework",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "orange-text-gradient",
        },
        {
          name: "webRTC",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/wshuv-o/Nexa-Social-Media",
    },
    {
      name: "Railway Ticketing System",  
      description:"The Railway Ticketing System aims to efficiently handle various aspects of ticket management, including Booking, Station names, Ticket purchases, Train names, and ticket Fare. It serves as a comprehensive platform for managing and organizing information related to Ticket Booking, Timetable, and ticket Fare. These are the key functionalities",
      tags: [
        {
          name: "Java Swing",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/wshuv-o/Railway-Ticketing-System",
    },
    {
      name: "Foodies",
      description:"Indulge in a gastronomic journey through our website, your ultimate destination for all things food and recipes. Immerse yourself in a world of culinary wonders as we showcase a myriad of flavors, from traditional favorites to exotic delicacies. Unlock your culinary potential with our extensive collection of recipes and embark on a delicious adventure that will tantalize your taste buds and inspire your inner chef.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
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