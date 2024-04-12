import "./aboutMe.css";

export const divSections = document.querySelector("#sections");
export const aboutMeSection = document.createElement('section');

export const createAboutMe = () => {
  const imgButtonMousse = document.createElement('img');
  imgButtonMousse.src = './mousseLine.png';
  imgButtonMousse.classList.add('buttonMousse');
  const sectionAbout = document.createElement('section');
  const articuleText = document.createElement('articule');
  const title = document.createElement('img');
  title.src = './btnAboutMe.png';
  title.classList.add('title');
  const divText =document.createElement('div');
  const pImgInicio = document.createElement('img');
  pImgInicio.src = './_p_.png';
  const textHola = document.createElement('h3');
  textHola.textContent = 'Hola!!!'
  const textInfo = document.createElement('p');
  textInfo.textContent = 'Mi nombre es Natalia y me especializo en desarrollo web que utiliza HTML, CSS, JS y REACT, etc. Soy una persona muy motivada y eternamente optimista dedicada a escribir codigo claro, conciso y solido que funcione. Esforzandonos por nunca dejar de aprender y mejorar. Cuando no estoy codeando, leo o realizo algun nuevo proyecto artistico practico, como pintar. Me gusta que mi perspectiva y mis sistemas de creencias sean desafiados para poder ver el mundo con nuevos ojos.';
  const pImgFinal = document.createElement('img');
  pImgFinal.src = './_p_.png';
  const imgArticule = document.createElement('img');
  imgArticule.src = './imgArticule.png';
  imgArticule.classList.add('imgArt');
  aboutMeSection.setAttribute('id','AboutMe');
 
  divText.append(pImgInicio, textHola, textInfo, pImgFinal);
  articuleText.append(title, divText);
  sectionAbout.append(articuleText, imgArticule);

  aboutMeSection.append( imgButtonMousse, sectionAbout);

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


