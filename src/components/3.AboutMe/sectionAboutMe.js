
import { navLinks } from '../../.data/navLinks';
import "./aboutMe.css";

export const divSections = document.querySelector("#sections");
export const aboutMeSection = document.createElement('div');

export const createAboutMe = () => {
  const imgButtonMousse = document.createElement('img');
  const sectionAbout = document.createElement('section');
  const articuleText = document.createElement('articule');
  const title = document.createElement('img');
  const divText =document.createElement('div');
  const pImgInicio = document.createElement('img');
  const textHola = document.createElement('h3');
  const textInfo = document.createElement('p');
  const pImgFinal = document.createElement('img');
  const imgArticule = document.createElement('img');

  imgButtonMousse.src = './mousseLine.png';
  title.src = './btnAboutMe.png';
  pImgInicio.src = './_p_.png';
  textHola.textContent = 'Hola!!!'
  textInfo.textContent = 'Mi nombre es Natalia y me especializo en desarrollo web que utiliza HTML, CSS, JS y REACT, etc. Soy una persona muy motivada y eternamente optimista dedicada a escribir codigo claro, conciso y solido que funcione. Esforzandonos por nunca dejar de aprender y mejorar. Cuando no estoy codeando, leo o realizo algun nuevo proyecto artistico practico, como pintar. Me gusta que mi perspectiva y mis sistemas de creencias sean desafiados para poder ver el mundo con nuevos ojos.';
  pImgFinal.src = './_p_.png';
  imgArticule.src = './imgArticule.png';

  aboutMeSection.classList.add('#AboutMe');
  imgButtonMousse.classList.add('buttonMousse');
  title.classList.add('title');
  divText.classList.add('text')
  articuleText.classList.add('artText');
  sectionAbout.classList.add('sectAbout');
  pImgInicio.classList.add('imgP');
  pImgFinal.classList.add('imgP');
  imgArticule.classList.add('imgArt');
  textInfo.classList.add('textInfo');

  divText.append(pImgInicio);
  divText.append(textHola);
  divText.append(textInfo);
  divText.append(pImgFinal);
  articuleText.append(title);
  articuleText.append(divText);
  sectionAbout.append(articuleText);
  sectionAbout.append(imgArticule);

  aboutMeSection.append(imgButtonMousse, sectionAbout);

  document.addEventListener("DOMContentLoaded", function() {
    if (!textInfo) {
        console.error("El elemento textInfo no se encontró en el DOM.");
        return;
    }
    const wordsToColor = ["Natalia", "HTML", "CSS", "JS", "REACT", "codeando", "Esforzandonos", "desafiados"];

    let words;
    if (typeof textInfo.textContent === "string") {
        words = textInfo.textContent.match(/\b\w+\b/g);
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

    textInfo.innerHTML = coloredText;
})
}

divSections.append(aboutMeSection);


