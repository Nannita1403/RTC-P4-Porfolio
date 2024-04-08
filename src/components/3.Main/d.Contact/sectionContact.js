import { divSections } from "../a.AboutMe/sectionAboutMe";
import "./contact.css";

 export const contactSection = document.createElement('div');

 export const createContact = () => {
   const imgButtonMousse = document.createElement('img');
   const sectionContact = document.createElement('section');
   const tittle = document.createElement('h3');
   const line = document.createElement('img')
   const text = document.createElement('p');
   const button = document.createElement('button');
   const a = document.createElement('a');
   
   imgButtonMousse.src = './mousseLine.png';
   line.src = './Line-options.png';
   tittle.textContent = 'Contacto';
   text.textContent = 'Seguimos en CONTACTO? Estoy DISPONIBLE para tu PROPUESTA'
   button.textContent = 'Contactame';
   button.href='https://www.linkedin.com/in/natalia-andrea-magi-8b36b663/';
 
   contactSection.setAttribute('id','Contact');
   imgButtonMousse.classList.add('buttonMousse');
   tittle.classList.add('titleContact');
   text.classList.add('textC')
   sectionContact.classList.add('sectionContact');
   line.classList.add('line');
   button.classList.add('contact');
 
   a.append(button);
   sectionContact.append(tittle, line, text);
   contactSection.append(imgButtonMousse, sectionContact, button);
 
   document.addEventListener("DOMContentLoaded", function() {
     if (!text) {
         console.error("El elemento textInfo no se encontró en el DOM.");
         return;
     }
     const wordsToColor = ["CONTACTO", "DISPONIBLE", "PROPUESTA"];
 
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
 
 
 divSections.append(contactSection);