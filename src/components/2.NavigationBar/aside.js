import { navLinks } from '../../.data/navLinks';
import "./aside.css";

export const divApp = document.querySelector("#app");
//export const aside = document.createElement("aside");

// Creacion de elementos del Header
/*aside.innerHTML += `
<aside>
<ul>
<li id="default">
<img src="./public/1.Default.png" href="" alt="">
</li>
<li id="About me">
<img src="./public/2.About me.png" href=""alt="">
</li>
<li id="Skills">
<img src="./public/3.Skills.png" href=""alt="">
</li>
<li id="Works">
<img src="./public/4.Works.png" href=""alt="">
</li>
<li id="Contact">
<img src="./public/5.Contact.png" href=""alt="">
</li>
</ul>
</aside>
`;*/
 export const aside = () => {
    const $body = document.querySelector('body');
    const $aside = document.createElement('aside');
    $aside.classList.add('flex-container');
    const ul = document.createElement('ul');
    navLinks.forEach((link, index) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const img = document.createElement('img')
      a.textContent = link.name;
      a.href = link.url;
      img.src=link.img;
      li.append(a);
      ul.append(li);
      li.addEventListener('click', link.page);
    });
    $aside.append(ul);
    $body.prepend($aside);    
}
