import { Backend, FrontEnd, Others } from '../../../.data/skills';
import { divSections } from '../a.AboutMe/sectionAboutMe';
import "./skills.css";

export const skillsSection = document.createElement('div');

export const createSkills = () => {
  const imgButtonMousse = document.createElement('img');
  const sectionSkills = document.createElement('section');
  const tittle = document.createElement('h3');
  const line = document.createElement('img')
  const text = document.createElement('p');
  const sectionIcons =document.createElement('section');
  const divF = document.createElement('div');
  const buttonF = document.createElement('button');
  const ulIconsF = document.createElement('ul');
  const divB = document.createElement('div');
  const buttonB = document.createElement('button');
  const ulIconsB = document.createElement('ul');
  const divO = document.createElement('div');
  const buttonO = document.createElement('button');
  const ulIconsO = document.createElement('ul');
  
  imgButtonMousse.src = './mousseLine.png';
  line.src = './Line-options.png';
  tittle.textContent = 'Skills';
  text.textContent = 'Me ESFUERZO por nunca dejar de APRENDER y MEJORAR'
  buttonF.textContent = 'FrontEnd';
  buttonB.textContent = 'Backend';
  buttonO.textContent = 'Others ';

  skillsSection.setAttribute('id','Skills');
  imgButtonMousse.classList.add('buttonMousse');
  tittle.classList.add('titleS');
  text.classList.add('textS')
  sectionSkills.classList.add('sectionSkills');
  line.classList.add('line');
  sectionIcons.classList.add('sectionIcons');
  divF.classList.add('divSkills');
  divB.classList.add('divSkills');
  divO.classList.add('divSkills');
  ulIconsF.classList.add('ulIcon');
  ulIconsB.classList.add('ulIcon');
  ulIconsO.classList.add('ulIcon');
 
  FrontEnd.forEach((link, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img')
    const a = document.createElement('a');
    img.src=link.img.src;
    a.textContent = link.name;
    a.append(img);
    li.append(a);
    ulIconsF.append(li);
  });
  Backend.forEach((link, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img')
    const a = document.createElement('a');
    img.src=link.img.src;
    a.textContent = link.name;
    a.append(img);
    li.append(a);
    ulIconsB.append(li);
  });

  Others.forEach((link, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img')
    const a = document.createElement('a');
    img.src=link.img.src;
    a.textContent = link.name;
    a.append(img);
    li.append(a);
    ulIconsO.append(li);
  });

  divF.append(buttonF);
  divF.append(ulIconsF);
  divB.append(buttonB);  
  divB.append(ulIconsB);
  divO.append(buttonO); 
  divO.append(ulIconsO);
  sectionSkills.append(tittle);
  sectionSkills.append(line);
  sectionSkills.append(text);
  sectionIcons.append(divF);
  sectionIcons.append(divB);
  sectionIcons.append(divO);
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