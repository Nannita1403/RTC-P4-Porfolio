export const divApp = document.querySelector("#app");
export const aside = document.createElement("aside");

import "./aside.css";

// Creacion de elementos del Header
aside.innerHTML += `
<aside>
<ul>
<li id="default">
<img src="./public/1.Default.png" alt="">
</li>
<li id="About me">
<img src="./public/2.About me.png" alt="">
</li>
<li id="Skills">
<img src="./public/3.Skills.png" alt="">
</li>
<li id="Works">
<img src="./public/4.Works.png" alt="">
</li>
<li id="Contact">
<img src="./public/5.Contact.png" alt="">
</li>
</ul>
</aside>
`;