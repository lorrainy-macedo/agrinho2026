const planta = document.getElementById("planta");
const resultado = document.getElementById("resultado");

function muito() {
    if (!planta || !resultado) return;

    planta.src = "https://cdn-icons-png.flaticon.com/512/2909/2909767.png";
    resultado.textContent =
        "☠️ Muito agrotóxico prejudicou a planta e contaminou o solo.";
}

function correto() {
    if (!planta || !resultado) return;

    planta.src = "https://cdn-icons-png.flaticon.com/512/628/628324.png";
    resultado.textContent =
        "🌱 Uso correto! A planta cresceu saudável e forte.";
}

function pouco() {
    if (!planta || !resultado) return;

    planta.src = "https://cdn-icons-png.flaticon.com/512/765/765613.png";
    resultado.textContent =
        "🍃 Pouco agrotóxico ajudou parcialmente a planta.";
}
