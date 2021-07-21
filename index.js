const counterDisplay = document.querySelector("h3");
let counter = 0;
// Fonction pour le création et le déplacement d'une bulle
const bubbleMaker = () => {
  // Créer un span dans le document
  const bubble = document.createElement("span");
  // Ajouter une class au span
  bubble.classList.add("bubble");
  // Injecter le span dans le body
  document.body.appendChild(bubble);

  // Créer un nombre aléatoire entre 100 et 300
  const size = Math.random() * 200 + 100 + "px";
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
  });

  // Détruire la bulle quand elle est en haut
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

// Créer plusieurs bulles a interval différent
setInterval(bubbleMaker, Math.random() * 1000 + 100);
