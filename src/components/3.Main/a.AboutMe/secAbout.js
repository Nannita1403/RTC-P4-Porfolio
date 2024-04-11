import "./aboutMe.css";

export const divSections = document.querySelector("#sections");

export const AboutMe = document.createElement('div');

AboutMe.innerHTML += `
    <div id="AboutMe">
        <img class="buttonMousse" src='./mousseLine.png'>
        <section id="sectAbout">
            <articule class="artText" >
            <img class="tittle" src='./btnAboutMe.png'>
            <div class="text">
                <img class="imgP" src='./ p .png'>
                <h3>Hola!!!</h3>
                <p class="textInfo">Mi nombre es Natalia y me especializo en desarrollo web que utiliza HTML, CSS, JS y REACT, etc. Soy una persona muy motivada y eternamente optimista dedicada a escribir codigo claro, conciso y solido que funcione. Esforzandonos por nunca dejar de aprender y mejorar. Cuando no estoy codeando, leo o realizo algun nuevo proyecto artistico practico, como pintar. Me gusta que mi perspectiva y mis sistemas de creencias sean desafiados para poder ver el mundo con nuevos ojos.</p>
                <img class="imgP" src='./ p .png'>
            </div>
            </articule>
            <img class="imgArt" src='./imgArticule.png'>
        </section>
    </div>
`;
/* const textInfo = document.getElementsByClassName("p");

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

divSections.append();
*/
