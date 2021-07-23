const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const counterDisplay = document.querySelector("h3");
let counter = 0;
let timer = 0;
let timeOut = 0;

// Fonction pour le création et le déplacement d'une bulle
const bubbleMaker = () => {
  // Créer un span dans le document
  const bubble = document.createElement("span");
  // Ajouter une class au span
  bubble.classList.add("bubble");
  // Injecter le span dans le body
  document.body.appendChild(bubble);

  // Créer un nombre aléatoire entre 100 et 300
  const size = Math.random() * 100 + 100 + "px";
  // La height et la width injectées seront les memes
  bubble.style.height = size;
  bubble.style.width = size;

  // Position de départ
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // Ternaire pour rendre le résultat de la variable --left négative 1 fois sur 2
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  // Récupere la variable créée en CSS, lui injecter un pourcentage aléatoire(Déplacement aléatoire vers la droite ou la gauche)
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
    return;
  });

  // Détruire la bulle quand elle est en haut
  setTimeout(() => {
    bubble.remove();
  }, 10000);
};

// Démarrage de la partie
startBtn.addEventListener("click", () => {
  stopBtn.classList.replace("btnInvisible", "btnVisible");
  startBtn.classList.replace("btnVisible", "btnInvisible");
  timer = setInterval(bubbleMaker, 3000);
  counterDisplay.textContent = 0;
  counter = 0;
});

// Arret (pause) de la partie
stopBtn.addEventListener("click", () => {
  startBtn.classList.replace("btnInvisible", "btnVisible");
  stopBtn.classList.replace("btnVisible", "btnInvisible");

  clearInterval(timer);
});

// Game over

// Créer plusieurs bulles a interval différent
//setInterval(bubbleMaker, 3000);
