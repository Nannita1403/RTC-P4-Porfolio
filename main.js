import { navLinks } from './src/.data/navLinks';
import { header } from './src/components/1.header/header'
import { aside, divApp } from './src/components/2.NavigationBar/aside'
import { createAboutMe, divSections} from './src/components/3.Main/a.AboutMe/sectionAboutMe';
import { createSkills } from './src/components/3.Main/b.Skills/sectionSkills';
import { footer } from './src/components/4.footer/sectionFooter';

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
  document.body.appendChild(footer);
};

initializeApp();

let funcionar = false;

window.addEventListener("wheel", (e) => {
if (e.wheelDelta < 0) {
  console.log(window.location.hash);
  const indice = navLinks.findIndex (
    (element)=> element.url === window.location.hash
  );
  if (!funcionar) {
    funcionar = true;
    const enlace = document.querySelector(
      `a[href="${navLinks[indice + 1]?.url}"]`
    );
    enlace?.click();

    setTimeout(()=> {
      funcionar = false;
    }, 1000);
  }
}
});






