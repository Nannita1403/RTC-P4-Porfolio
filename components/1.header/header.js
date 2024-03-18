export const divApp = document.querySelector("#app");
export const header = document.createElement("header");

import "./header.css";

// Creacion de elementos del Header
header.innerHTML += `
    <div class="header-home">
        <img class="logo" src="./public/_.png" alt="Logo C">
        <h3 class='nombre'>NataliaMagi</h3>
    </div>
    <h2 id="home" >Home</h2>
    <div class="header-links">
        <img src="./public/Instagram.png" alt="Instagram">
        <p>Instagram</p> 
        <img src="./public/Discord.png" alt="Discord">
        <p>Discord</p> 
        <img src="./public/Github.png" alt="GitHub">
        <p>GitHub</p> 
    </div>
`;