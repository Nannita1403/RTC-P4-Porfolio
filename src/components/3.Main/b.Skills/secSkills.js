import { Backend, FrontEnd, Others } from '../../../.data/skills';
import { divSections } from '../a.AboutMe/sectionAboutMe';
import "./skills.css";

export const Skills = document.createElement('div');

Skills.innerHTML += `
    <section id="skillsSection">
        <img class="buttonMousse" src='./mousseLine.png'>
        <section id="sectionSkills">
            <h3 class="titleSkills" >Skills</h3>
            <img class="line" src='./Line-options.png'>
            <p class="textS" >'Me ESFUERZO por nunca dejar de APRENDER y MEJORAR'</p>
        </section>
        <section id="sectionIcons">
            <div class="divSkills">
            <button>FrontEnd</button>
            <ul class="FrontEnd"></ul>
            </div>
            <div class="divSkills">
            <button>Backend</button>
            <ul class="Backend"></ul>
            </div>
            <div class="divSkills">
            <button>Others</button>
            <ul class="Others"></ul>
            </div>
        </section>
    </section>
`;
/*const ulF = document.getElementsByClassName("FrontEnd");
const ulB = document.getElementsByClassName("Backend");
const ulO = document.getElementsByClassName("Others");


const bucleSkills = (skills, ul) => {
  //const type = document.getElementById("FrontEnd","Backend","Others");
    skills.forEach((link, index) => {
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

  bucleSkills(FrontEnd, ulF);
  bucleSkills(Backend, ulB);
  bucleSkills(Others, ulO);
*/
/*export const createSkills = () => {
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
  tittle.classList.add('titleSkills');
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
}*/

//divSections.append(Skills);