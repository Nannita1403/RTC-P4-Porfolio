
import { aboutMeSection } from '../components/3.AboutMe/sectionAboutMe.js';
//import { Skills } from '../components/4.Skills/sectionSkills.js';
//import { Works } from '../components/5.Works/sectionWorks.js';
//import { Contact } from '../components/6.Contact/sectionContact.js';

 
export const navLinks = [
     {
    name: 'Default',
    url: '#Default',
    img: {src:'/1.Default.png', alt:'defaul'},
    //page: Default,
  },
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
    //page: Skills,
  },
  {
    name: 'Works',
    url: '#Works',
    img: {src:'/4.Works.png', alt:'Works'},
    //page: Works,
  },
  {
    name: 'Contact',
    url: '#Contact',
    img: {src:'./public/5.Contact.png', alt:'Contact'},
    //page: Contact,
  }
];