```javascript
const planta = document.getElementById("planta");
const resultado = document.getElementById("resultado");

function muito(){

    planta.src = "https://cdn-icons-png.flaticon.com/512/2909/2909767.png";

    resultado.innerHTML =
    "☠️ Muito agrotóxico prejudicou a planta e contaminou o solo.";
}

function correto(){

    planta.src = "https://cdn-icons-png.flaticon.com/512/628/628324.png";

    resultado.innerHTML =
    "🌱 Uso correto! A planta cresceu saudável e forte.";
}

function pouco(){

    planta.src = "https://cdn-icons-png.flaticon.com/512/765/765613.png";

    resultado.innerHTML =
    "🍃 Pouco agrotóxico ajudou parcialmente a planta.";
}
```
