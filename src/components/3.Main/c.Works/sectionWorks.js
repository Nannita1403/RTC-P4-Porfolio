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
    const divC = document.createElement('div');
 
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
    divC.classList.add('divCards');
    ulCards.classList.add('ulCards');
    buttonG.classList.add('btnGit');
    buttonN.classList.add('btnNet');
   
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
      img.src=link.preview;
      h2.textContent = link.title;
      p.textContent = link.description;
      aGit.src=link.github;
      aNet.src=link.netlify;
      aGit.append(buttonG);
      aNet.append(buttonN);
      buttonG.append(divRed);
      buttonN.append(divRed);
      figure.append(img);
      li.append(a);
      ulIconsF.append(li);
    });
  
    <li class="card" id="card-1">
       <div class="card-content">
         <div>
           <h2>Card One</h2>
           <p>This is the content of card one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
         <figure>
           <img src="https://assets.codepen.io/210284/flower-9.jpg" alt="card-one">
         </figure>
       </div>
     </li>
  
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
  
 // Creacion de elementos del Header
 worksSection.innerHTML += `
 <body>
 <header>
   <div>
     <h1>Stacking Cards Animation</h1>
     <p>Scroll down to stack the cards. Scroll back up to unstack them.</p>
   </div>
 </header>
 <main>
   <ul id="cards">
     <li class="card" id="card-1">
       <div class="card-content">
         <div>
           <h2>Card One</h2>
           <p>This is the content of card one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
         <figure>
           <img src="https://assets.codepen.io/210284/flower-9.jpg" alt="card-one">
         </figure>
       </div>
     </li>

     <li class="card" id="card-2">
       <div class="card-content">
         <div>
           <h2>Card Two</h2>
           <p>This is the content of card two. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
         <figure>
           <img src="https://assets.codepen.io/210284/flower-8.jpg" alt="card two">
         </figure>
       </div>
     </li>

     <li class="card" id="card-3">
       <div class="card-content">
         <div>
           <h2>Card Three</h2>
           <p>This is the content of card three. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
         <figure>
           <img src="https://assets.codepen.io/210284/flower-7.jpg" alt="card three">
         </figure>
       </div>
     </li>

     <li class="card" id="card-4">
       <div class="card-content">
         <div>
           <h2>Card Four</h2>
           <p>This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         </div>
         <figure>
           <img src="https://assets.codepen.io/210284/flower-6.jpg" alt="card four">
         </figure>
       </div>
     </li>
   </ul>
 </main>
</body>
 `;

 divSections.append(worksSection);