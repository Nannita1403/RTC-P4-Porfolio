import { header } from './src/components/1.header/header'
import { aside, divApp } from './src/components/2.NavigationBar/aside'
import { createAboutMe, divSections} from './src/components/3.AboutMe/sectionAboutMe';
import { createSkills } from './src/components/4.Skills/sectionSkills';
import './style.css'

const initializeApp = async () => {
  // Agrego header
  divApp.appendChild(header);
  // Agrego divApp al Body
  document.body.appendChild(divApp);
  aside ();
  document.body.appendChild(divSections);
  
  // Agrego sections y footer
  createAboutMe ();
  createSkills ();
  //divApp.appendChild(aboutMe);
  //divApp.appendChild(footer);



};

initializeApp();





