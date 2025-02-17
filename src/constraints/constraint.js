import LinkedIn from "../assets/icons/linkedin.png";
import Github from "../assets/icons/github.png";
import Email from "../assets/icons/email.png";
import HeroImg from "../assets/heroImg.png";
import Code from "../assets/icons/Code.png";
import Work from "../assets/icons/ProjectsIcon.svg";
import Design from "../assets/icons/DesignIcon.svg";
import Art from "../assets/icons/art.svg";
import DigitalFinance from "../assets/Digital Finance.png";
import VirtualR from "../assets/VirtualR.png";
import Perfume from "../assets/perfume.png";
import AI from "../assets/Aichatting.png";
import Rental from "../assets/rental.png";
import Coffe from "../assets/coffee.png";
import CheeseCake from "../assets/cheesecake.png";
import Headphone from "../assets/headphone.png";
import Reacticon from "../assets/tools/React.png";
import JavaScript from "../assets/tools/Javascript.png";
import TypeScript from "../assets/tools/TypeScript.png";
import NextJs from "../assets/tools/Nextjs.png";
import Cssicon from "../assets/tools/Group 1.png";
import Htmlicon from "../assets/tools/HTML5.png";
import Figmaicon from "../assets/tools/Figma.png";
import Githubicon from "../assets/tools/Github.png";
import Shapeicon from "../assets/tools/Shape.png";
import Insomniaicon from "../assets/tools/Insomnia.png";
import Bitbucketicon from "../assets/tools/bitbucket.png";
import Vueicon from "../assets/tools/Vue.png";
import Nodejsicon from "../assets/tools/Nodejs.png";
import Tailwindcssicon from "../assets/tools/TailwindCSS.png";
import Sassicon from "../assets/tools/sass.png";
import Pythonicon from "../assets/tools/Python.png";
import Mysqlicon from "../assets/tools/mysql.png";
import Postgresqlicon from "../assets/tools/Union.png";
import MongoDBicon from "../assets/tools/leaf.png";
import Dockericon from "../assets/tools/Docker.png";
import Planeicon from "../assets/PaperPlaneTilt.png";
import CopyIcon from "../assets/CopySimple.png";
import ProfileImg from "../assets/profile.png";

export const header = [
  {
    title: "Home",
    id: "hero",
  },
  {
    title: "About me",
    id: "about",
  },
  {
    title: "Projects",
    id: "project",
  },
  {
    title: "Skills",
    id: "skills",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

export const heroSection = {
  caption: "👋 Greetings!",
  title: "Rich Kariuki",
  subtitle: "Front-end developer · UI designer",
  icons: [
    {
      icon: LinkedIn,
      url: "https://www.linkedin.com/in/rich-victor-emanuel-001165196/",
      alt: "LinkedIn",
      id: 1,
    },
    {
      icon: Github,
      url: "https://github.com/Trailblazer-dev",
      alt: "Github",
      id: 2,
    },
    {
      icon: Email,
      url: "mailto:richvictor830@gmail.com",
      alt: "Email",
      id: 3,
    },
  ],
  Image: HeroImg,
  button1: "Download CV",
  button2: "Let's talk",
};

export const ExperienceSection = [
  {
    icon: Code,
    years: "2 years as",
    title: "Programmer",
  },
  {
    icon: Work,
    years: "1 year as",
    title: "Work",
  },
  {
    icon: Design,
    years: "1 year as",
    title: "Designer",
  },
];

export const ExperienceSection2 = [
  {
    subtitle: "Developer",
    title: "Front-end",
  },
  {
    subtitle: "Dozens of projects and",
    title: "Experiences",
  },
  {
    subtitle: "Freelance Designer and",
    title: "UI · UX",
  },
];

export const about = 
  {
    icon: "🧐 About me",
    name: "Rich Victor Emanuel Kariuki",
    img:ProfileImg,
    desktop: [
      {
        desc:
          "👋My name is Rich victor Emanuel Kariuki , but you can call me just Rich. Nice to meet you!",
      },
      {
        desc:
          "👨‍💻 For over 2 years, developing and programming interfaces with JavaScript, React JS, and TypeScript.",
      },
      {
        desc:
          "🎓undergraduate pursing bachelor in applied Computer Science at Egerton University Njoro Campus.",
      },
      {
        desc:
          "💡Interests in Front-end development with React,Tailwindcss and UX/UI Design.",
      },
      {
        desc: "🚀 Trying to be a little better than yesterday every day.",
      },
    ],
    mobile:[
        {text:"But you can call me just Rich. Nice to meet you! For over 2 years, I have been developing and programming interfaces with JavaScript, React JS, and TypeScript. Undergraduate pursing bachelor  in applied Computer Science at Egerton University Njoro Campus. Interested in Front-end development with React, React Native, and UX/UI Design."},{
        text:"🚀 Trying to be a little better than yesterday every day."}
    ]
  };

export const portfolio = 
  {
    icon: "🔗 Portfolio",
    title: "Works and projects",
    container: [
      {
        id: 1,
        title: "UI Design",
        icon: Design,
      },
      {
        id: 2,
        title: "Design",
        icon: Art,
      },
      {
        id: 3,
        title: "UI Design",
        icon: Design,
      },
    ],
    projects: [
      {
        id: 1,
        title: "Digital Finance",
        descrption:
          "Digital Finance is a fintech application designed to help users manage their finances efficiently.",
        cta1: "JavaScript",
        cta2: "TailwindCss",
        img: DigitalFinance,
        url: "https://wwfinacingsite.netlify.app/",
      },
      {
        id: 2,
        title: "VirtualR",
        descrption:
          "A sleek and futuristic website promoting VR development tools.",
        cta1: "React JS",
        cta2: "TailwindCss",
        img: VirtualR,
        url: "https://responsive-landig-page-react-tailwind-css.vercel.app/",
      },
      {
        id: 3,
        title: "Perfume Landing Page",
        descrption: "A visually striking perfume advertisement website",
        cta1: "JavaScript",
        cta2: "TailwindCss",
        img: Perfume,
        url: "https://perfume01.netlify.app/",
      },
      {
        id: 4,
        title: "AI Chat App",
        descrption:
          "A sleek and modern AI chat application landing page with a dark theme and neon accents.",
        cta1: "React JS",
        cta2: "TailwindCss",
        img: AI,
        url: "https://ai-chatting-website-in-react-js-with.vercel.app/",
      },
      {
        id: 5,
        title: "House Rental Website ",
        descrption: "A clean and modern real estate website for renting homes.",
        cta1: "JavaScript",
        cta2: "Css",
        img: Rental,
        url: "https://rentsl.netlify.app/",
      },
      {
        id: 6,
        title: "Coffee Website",
        descrption:
          "A rich and sophisticated design that highlights premium coffee experiences.",
        cta1: "React JS",
        cta2: "TailwindCss",
        img: Coffe,
        url: "https://coffe-website-react.vercel.app/",
      },
      {
        id: 7,
        title: "Cheesecake Website",
        descrption: "A warm and inviting web design for a cheesecake brand.",
        cta1: "JavaScript",
        cta2: "TailwindCss",
        img: CheeseCake,
        url: "https://cheesecake2.netlify.app/",
      },
      {
        id: 8,
        title: "Headphone ",
        descrption:
          "A sleek and modern product page for the Beats 3 wireless headphones.",
        cta1: "JavaScript",
        cta2: "Css",
        img: Headphone,
        url: "https://head12.netlify.app/",
      },
    ],
    more: "See more projects on github",
  };

export const skills = {
  icon: "🧑‍💻 Skills · Experiences",
  title: "Technologies and skills",
  subtitle: "Techs I use daily",
  techstacks: [
    Reacticon,
    JavaScript,
    TypeScript,
    NextJs,
    Cssicon,
    Htmlicon,
    Figmaicon,
    Githubicon,
    Shapeicon,
    Insomniaicon,
  ],
  subtitle2: "Other techs I have worked on projects with",
  techstacks2: [
    Bitbucketicon,
    Vueicon,
    Nodejsicon,
    Tailwindcssicon,
    Sassicon,
    Pythonicon,
    Mysqlicon,
    Postgresqlicon,
    MongoDBicon,
    Dockericon,
  ],
};

export const contact = {
  icon: "📬 Contacts",
  title: "Get in touch",
  whatapp: "Let's talk",
  email: {
    icon: Planeicon,
    text: "richvictor830@gmail.com",
    copyicon: CopyIcon,
  },
};

export const footer = {
  copyright: "Copyright © Rich Kariuki: 2025",
  socials: [
    {
      icon: LinkedIn,
      url: "https://www.linkedin.com/in/rich-victor-emanuel-001165196/",
      alt: "LinkedIn",
      id: 1,
    },
    {
      icon: Github,
      url: "https://github.com/Trailblazer-dev",
      alt: "Github",
      id: 2,
    }
  ],
};
