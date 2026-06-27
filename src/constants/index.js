// Import Gambar dari folder assets
import profileImg from '../assets/foto.png'; 
import laravelLogo from '../assets/laravel.png';
import tailwindLogo from '../assets/tailwindcss.png';
import mysqlLogo from '../assets/mysql.png';
import figmaLogo from '../assets/figma.png';
import drawioLogo from '../assets/drawio.png';
import ibmLogo from '../assets/ibm.png';
import tableauLogo from '../assets/tableau.png';
import wixLogo from '../assets/wix.png';
import officeLogo from '../assets/msoffice.png';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Gambar icon untuk portfolio home
import webIcon from '../assets/web.png';
import dataIcon from '../assets/data-analysis.png';

// Gambar project
import egallery from '../assets/projects/egallery.png';
import brayutedujo from '../assets/projects/brayutedujo.png';
import emoney from '../assets/projects/emoney.png';
import rst from '../assets/projects/rst.png';
import raung from '../assets/projects/raung.png';
import tableu from '../assets/projects/tableu.png';
import himmi from '../assets/projects/himmi.png';
import imadikom from '../assets/projects/imadikom.png';

export const DATA = {
  profile: {
    name: "Sylviana Rahmawati",
    role: "Junior Web Developer | System Design & Testing",
    description: "I develop web applications with a focus on backend development and database design, supported by system design (UML) and manual testing to ensure reliability.",
    image: profileImg,
  },
  
 socials: [
    {
        icon: FaLinkedin,
        color: "bg-[#0077b5]",
        link: "https://linkedin.com/in/sylvianarahma/"
    },
    {
        icon: FaInstagram,
        color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600",
        link: "https://instagram.com/sylvianarhma/"
    },
    {
        icon: FaGithub,
        color: "bg-gray-800 border border-gray-800",
        link: "https://github.com/Sylvirhm"
    },
    {
        icon: MdEmail,
        color: "bg-[#EA4335]",
        link: "mailto:sylvianarahma@gmail.com",
    }
    ],

  techStack: [
    { name: "Laravel", icon: laravelLogo },
    { name: "Tailwind", icon: tailwindLogo },
    { name: "MySQL", icon: mysqlLogo },
    { name: "Figma", icon: figmaLogo },
    { name: "Draw.io", icon: drawioLogo },
    { name: "IBM", icon: ibmLogo },
    { name: "Wix", icon: wixLogo },
    { name: "Tableau", icon: tableauLogo },
    { name: "Office", icon: officeLogo },
    
  ],

  homePortfolio: [
    { 
        title: "Web & UI/UX Design", 
        icon: webIcon, 
        gradient: "from-purple-900 to-transparent" 
    },
    { 
        title: "Data & Administration", 
        icon: dataIcon, 
        gradient: "from-red-900 to-transparent" 
    }
  ],

  portfolioProjects: [

    {
        id: 1,
        title: "Brayutedujo",
        category: "Web",
        group: "web",
        image: "",
        description: "Online tourism village ticket booking system with CRUD operations.",
        longDescription:
        "Brayutedujo is an online ticket booking website for a tourism village. It helps users view tour packages and make reservations efficiently. I worked as a full-stack developer focusing on system design, database, frontend, and backend development. The project was not deployed to production.",
        tools: [
        "Laravel",
        "PHP",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "HTML",
        "CSS",
        "Draw.io",
        "Figma"
        ],
        link: [
            {
                label: "Figma Prototype",
                url: "https://www.figma.com/proto/A9YUwdeHYgovYGTB11ALn5/Desa-Wisata"
            },
            {
                label: "GitHub",
                url: "https://github.com/Sylvirhm/brayutedujo-public"
            }
        ]
    },

    {
        id: 2,
        title: "Data Analysis & Visualization",
        category: "Data Analytics",
        group: "data",
        image: tableu,
        description:
            "Analyzed datasets and created interactive dashboards for data-driven insights.",
        longDescription:
            "Performed data cleaning, exploration, and visualization using Google Colab and Tableau. Processed datasets to identify trends and present insights through interactive dashboards and clear visual reports to support decision-making.",
        tools: [
            "Python",
            "Google Colab",
            "Pandas",
            "NumPy",
            "Tableau",
            "Data Cleaning",
            "Data Visualization"
        ],
        link: [
            {
                label: "Google Colab",
                url: "https://colab.research.google.com/drive/1akMyOSji1u87FNGIpUFjWGZsLbfq3lib?usp=sharing"
            },
            {
                label: "Tableau",
                url: "https://drive.google.com/drive/folders/17Db0jq-X2is49YTGpbtcIHQPCl1wxEv-?usp=sharing"
            }
        ]
    },
    ]
};