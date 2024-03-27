import { Backend, FrontEnd, Others } from '../../.data/skills';
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
  const sectionIcons =document.createElement('section');
  const ulIcons = document.createElement('ul');
  
  imgButtonMousse.src = './mousseLine.png';
  line.src = './Line-options.png';
  tittle.textContent = 'Skills';
  text.textContent = 'Me ESFUERZO por nunca dejar de APRENDER y MEJORAR'
  buttonAD.textContent = 'App Developement';
  buttonWD.textContent = 'Web Developement';

  skillsSection.setAttribute('id','Skills');
  imgButtonMousse.classList.add('buttonMousse');
  tittle.classList.add('title');
  text.classList.add('textS')
  sectionSkills.classList.add('sectionSkills');
  line.classList.add('line');
  sectionIcons.classList.add('sectionIcons');
  ulIcons.classList.add('ulIcon');
 
  FrontEnd.forEach((link, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img')
    const a = document.createElement('a');
    a.textContent = link.name;
    img.src=link.img.src;
    a.append(img);
    li.append(a);
    ulIcons.append(li);
  });
  Backend.forEach((link, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img')
    const a = document.createElement('a');
    a.textContent = link.name;
    img.src=link.img.src;
    a.append(img);
    li.append(a);
    ulIcons.append(li);
  });

  Others.forEach((link, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img')
    const a = document.createElement('a');
    a.textContent = link.name;
    img.src=link.img.src;
    a.append(img);
    li.append(a);
    ulIcons.append(li);
  });

  divButton.append(buttonWD);
  divButton.append(buttonAD);  
  sectionSkills.append(tittle);
  sectionSkills.append(line)
  sectionSkills.append(text)
  sectionSkills.append(divButton)
  sectionIcons.append(ulIcons);

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