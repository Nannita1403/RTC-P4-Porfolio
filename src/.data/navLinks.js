
import { aboutMeSection } from '../components/3.Main/a.AboutMe/sectionAboutMe.js';
import { skillsSection } from '../components/3.Main/b.Skills/sectionSkills.js';
import { worksSection } from '../components/3.Main/c.Works/sectionWorks.js';
import { contactSection } from '../components/3.Main/d.Contact/sectionContact.js';
//import {header} from '../components/1.header/header.js'; 


  export const navLinks = [
     /*{
    name: 'Default',
    url: '#header',
    img: {src:'/1.Default.png', alt:'Header'},
    page: header,∫
  },*/
  {
    name: 'About Me',
    url: '#AboutMe',
    img: {src:'/2.AboutMe.png', alt:'AboutMe'},
    page: aboutMeSection,
  },
  {
    name: 'Skills',
    url: '#Skills',
    img: {src:'/3.Skills.png', alt:'Skills'},
    page: skillsSection,
  },
  {
    name: 'Works',
    url: '#Works',
    img: {src:'/4.Works.png', alt:'Works'},
    page: worksSection,
  },
  {
    name: 'Contact',
    url: '#Contact',
    img: {src:'/5.Contact.png', alt:'Contact'},
    page: contactSection,
  }
];