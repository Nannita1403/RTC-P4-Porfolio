
export const header = document.createElement("header");

import "./header.css";

// Creacion de elementos del Header
header.innerHTML += `
    <div class="header-home">
        <img class="logo" src="/_.png" alt="Logo C">
        <h3 class='nombre'>NataliaMagi</h3>
    </div>
    <h2 id="home" >Home</h2>
    <div class="header-links">
        <img src="/Instagram.png" alt="Instagram">
        <p>Instagram</p> 
        <img src="/Discord.png" alt="Discord">
        <p>Discord</p> 
        <img src="/Github.png" alt="GitHub">
        <p>GitHub</p> 
    </div>
`;