
export const header = document.createElement("header");

import "./header.css";

// Creacion de elementos del Header
header.innerHTML += `
    <div class="header-home">
        <img class="logo" src="/_.png" alt="Logo C">
        <h3 class='nombre'>NataliaMagi</h3>
    </div>
    <div class="header-links">
        <img src="/Instagram.png" alt="Instagram">
        <a href=${`https://www.instagram.com/nannitamagi/?hl=es>Instagram</a>`}
        <img src="/Discord.png" alt="Discord">
        <a href=${`https://discord.com/users/Nataliamagi#8153>Discord</a>`}
        <img src="/Github.png" alt="GitHub">
        <a href=${`https://github.com/Nannita1403>Github</a>`}
    </div>
`;