import { navLinks } from '../../.data/navLinks';
import "./aside.css";

export const divApp = document.querySelector("#app");

// Creacion de elementos del Header
 export const aside = () => {
    const $body = document.querySelector('body');
    const $aside = document.createElement('aside');
    $aside.classList.add('flex-container');
    const ul = document.createElement('ul');
    navLinks.forEach((link, index) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const img = document.createElement('img')
      //a.textContent = link.name;
      a.href = link.url;
      img.src=link.img.src;
      a.append(img);
      li.append(a);
      ul.append(li);
      li.addEventListener('click', link.page);
    });
    $aside.append(ul);
    $body.prepend($aside);    
}
