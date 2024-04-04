import { Works } from '../../../.data/works';
import { divSections } from '../a.AboutMe/sectionAboutMe';
import "./works.css";

export const worksSection = document.createElement("Works");


export const createProyects = () => {
    const imgButtonMousse = document.createElement('img');
    const sectionWorks = document.createElement('section');
    const tittle = document.createElement('h3');
    const line = document.createElement('img')
    const text = document.createElement('p');
    const sectionCards =document.createElement('section');
    const ulCards = document.createElement('ul');
    const divCs = document.createElement('div');
 
    imgButtonMousse.src = './mousseLine.png';
    line.src = './Line-options.png';
    tittle.textContent = 'Works';
    text.textContent = 'Pero las FUNCIONES no dicen NADA sin EJEMPLOS..'
  
    worksSection.setAttribute('id','Works');
    imgButtonMousse.classList.add('buttonMousse');
    tittle.classList.add('titleS');
    text.classList.add('textS')
    worksSection.classList.add('worksSection');
    line.classList.add('line');
    sectionCards.classList.add('sectionCards');
    divCs.classList.add('divCards');
    ulCards.classList.add('ulCards');
   
    Works.forEach((link, index) => {
      const li = document.createElement('li');
      const divC = document.createElement('div');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      const figure = document.createElement('figure');
      const img = document.createElement('img')
      const divRed =document.createElement('div');
      const aGit = document.createElement('a');
      const aNet = document.createElement('a');
      const buttonG = document.createElement('button');
      const buttonN = document.createElement('button');    
      buttonG.classList.add('btnGit');
      buttonN.classList.add('btnNet');

      img.src=link.preview;
      h2.textContent = link.title;
      p.textContent = link.description;
      aGit.src=link.github;
      aNet.src=link.netlify;
      buttonN.append(aNet);
      buttonG.append(aGit);
      divRed.append(buttonG);
      divRed.append(buttonN);
      figure.append(img);
      divC.append(h2);
      divC.append(p);
      divC.append(figure);
      li.append(divC);
      li.append(divRed);
      ulCards.append(li);
    });
  
    divCs.append(ulCards);
    sectionWorks.append(tittle);
    sectionWorks.append(line);
    sectionWorks.append(text);
    sectionCards.append(divCs);
    worksSection.append(imgButtonMousse, sectionWorks, sectionCards);
  
    document.addEventListener("DOMContentLoaded", function() {
      if (!text) {
          console.error("El elemento textInfo no se encontró en el DOM.");
          return;
      }
      const wordsToColor = ["FUNCIONES", "NADA", "EJEMPLOS"];
  
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

 divSections.append(worksSection);