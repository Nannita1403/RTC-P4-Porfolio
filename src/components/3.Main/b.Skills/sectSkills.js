import { Backend, FrontEnd, Others } from '../../../.data/skills';
import { divSections } from '../a.AboutMe/sectionAboutMe';
import "./skills.css";

export const skillsSection = document.createElement('section');

export const createSkills2 = () => {
  const imgButtonMousse = document.createElement('img');
  imgButtonMousse.src = './mousseLine.png';
  const sectionSkills = document.createElement('section');
  sectionSkills.classList.add('sectionSkills');
  const tittle = document.createElement('h3');
  tittle.textContent = 'Skills';
  const line = document.createElement('img')
  line.src = './Line-options.png';
  const text = document.createElement('p');
  text.classList.add('textS');
  text.textContent = 'Me ESFUERZO por nunca dejar de APRENDER y MEJORAR';
  const sectionIcons =document.createElement('section');
  sectionIcons.classList.add('sectionIcons');
  const divF = document.createElement('div');
  const buttonF = document.createElement('button');
  buttonF.textContent = 'FrontEnds';
  const ulIconsF = document.createElement('ul');
  const divB = document.createElement('div');
  const buttonB = document.createElement('button');
  buttonB.textContent = 'Backend';
  const ulIconsB = document.createElement('ul');
  const divO = document.createElement('div');
  const buttonO = document.createElement('button');
  buttonO.textContent = 'Others ';
  const ulIconsO = document.createElement('ul');
  skillsSection.setAttribute('id','Skills');
 
  const bucleSkills = (skill, ul) => {
    skill.forEach((link, index) => {
      const li = document.createElement('li');
      const img = document.createElement('img')
      const a = document.createElement('a');
      img.src=link.img.src;
      a.textContent = link.name;
      a.append(img);
      li.append(a);
      ul.append(li);
    });
  }

  bucleSkills(FrontEnd,ulIconsF);
  bucleSkills(Backend,ulIconsB);
  bucleSkills(Others,ulIconsO);

  divF.append(buttonF, ulIconsF);
  divB.append(buttonB, ulIconsB);  
  divO.append(buttonO, ulIconsO); 

  sectionSkills.append(tittle, line, text);
  sectionIcons.append(divF, divB, divO);
  skillsSection.append(imgButtonMousse, sectionSkills, sectionIcons);

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