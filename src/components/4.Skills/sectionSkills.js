
import { navLinks } from '../../.data/navLinks';
//import { Backend, FrontEnd, Others } from '../../.data/skills';
import { divSections } from '../3.AboutMe/sectionAboutMe';
import "./skills.css";

export const skillsSection = document.createElement('div');

export const createSkills = () => {
  const imgButtonMousse = document.createElement('img');
  const sectionSkills = document.createElement('section');
  const tittle = document.createElement('h3');
  const line = document.createElement('img')
  const text = document.createElement('p');
  const divButton = document.createElement('div');
  const buttonWD = document.createElement('button');
  const buttonAD = document.createElement('button');
  const sectionIcons = document.createElement('section');
  const iconCSS = document.createElement('img');
  const iconJS = document.createElement('img');
  const iconHTML = document.createElement('img');
  const iconREACT = document.createElement('img');
 

  imgButtonMousse.src = './mousseLine.png';
  line.src = './Line-options.png';
  tittle.textContent = 'Skills';
  text.textContent = 'Me ESFUERZO por nunca dejar de APRENDER y MEJORAR'
  buttonAD.textContent = 'App Developement';
  buttonWD.textContent = 'Web Developement';
  iconCSS.src = './icon-css.png';
  iconHTML.src = './icon-html.png';
  iconJS.src = './icon-js.png';
  iconREACT.src = './icon-react.png';

  skillsSection.classList.add('#Skills');
  imgButtonMousse.classList.add('buttonMousse');
  tittle.classList.add('title');
  text.classList.add('text')
  sectionSkills.classList.add('sectionSkills');
  line.classList.add('line');
  sectionIcons.classList.add('sectionIcons')
  iconCSS.classList.add('imgIcon');
  iconJS.classList.add('imgIcon');
  iconREACT.classList.add('imgIcon');
  iconHTML.classList.add('imgIcon');

  sectionIcons.append(iconHTML);
  sectionIcons.append(iconCSS);
  sectionIcons.append(iconJS);
  sectionIcons.append(iconREACT);
  divButton.append(buttonWD);
  divButton.append(buttonAD);  
  sectionSkills.append(tittle);
  sectionSkills.append(line)
  sectionSkills.append(text)
  sectionSkills.append(divButton)
  sectionSkills.append(sectionIcons);

  skillsSection.append(imgButtonMousse, sectionSkills);

  document.addEventListener("DOMContentLoaded", function() {
    if (!text) {
        console.error("El elemento textInfo no se encontró en el DOM.");
        return;
    }
    const wordsToColor = ["ESFUERZO", "APRENDER", "MEJORAR"];

    let words;
    if (typeof text.textContent === "string") {
        words = text.textContent.match(/\b\w+\b/g);
    } else {
        console.error("El texto proporcionado no es una cadena de texto válida.");
        return;
    }

    let coloredText = '';
    words.forEach(word => {
        if (wordsToColor.includes(word.replace(/[^a-zA-Z]/g, ""))) {
            coloredText += `<span class="green">${word}</span> `;
        } else {
            coloredText += `${word} `;
        }
    });

    text.innerHTML = coloredText;
})
}


divSections.append(skillsSection);