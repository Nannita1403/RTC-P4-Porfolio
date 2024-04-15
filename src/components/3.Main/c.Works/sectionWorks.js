import { Works } from '../../../.data/works';
import { divSections } from '../a.AboutMe/sectionAboutMe';
import "./works.css";

export const worksSection = document.createElement("Works");


export const createProyects = () => {
    const imgButtonMousse = document.createElement('img');
    imgButtonMousse.src = './mousseLine.png';
    imgButtonMousse.classList.add('buttonMousse');
    const sectionWorks = document.createElement('section');
    sectionWorks.classList.add('sectionWorks');
    const tittle = document.createElement('h3');
    tittle.textContent = 'Works';
    const line = document.createElement('img');
    line.src = './Line-options.png';
    const text = document.createElement('p');
    text.classList.add ('textS');
    text.textContent = 'Pero las FUNCIONES no dicen NADA sin EJEMPLOS..';
    const ulCards = document.createElement('ul');
    ulCards.classList.add('ulCards');
    const divCs = document.createElement('div');
    divCs.classList.add('divCards');
  
    worksSection.setAttribute('id','Works');

    Works.forEach((link, index) => {
      const li = document.createElement('li');
      const divC = document.createElement('div');
      divC.classList.add('divC');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      const img = document.createElement('img')
      const divRed =document.createElement('div');
      divRed.classList.add('divRed');
      const aGit = document.createElement('a');
      const aNet = document.createElement('a');
      const buttonG = document.createElement('button');
      buttonG.classList.add('btnGit');
      const buttonN = document.createElement('button'); 
      buttonN.classList.add('btnNet');
      const div =document.createElement('div');  
      const figure = document.createElement('figure'); 

      img.src=link.preview.src;
      h2.textContent = link.title;
      p.textContent = link.description;
      aGit.href=link.urlGit;
      aNet.href=link.urlNet;
      buttonN.textContent = 'Netlify';
      buttonG.textContent = 'Github';
      figure.append(img);
      aGit.append(buttonG);
      aNet.append(buttonN);

      divRed.append(aGit, aNet);
      div.append(h2, p);
      divC.append(div, figure);
      li.append(divC, divRed);
      ulCards.append(li);
    });
  
    divCs.append(ulCards);  
    sectionWorks.append(tittle, line, text);
    worksSection.append(imgButtonMousse, sectionWorks, divCs);
  
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