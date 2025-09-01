// --- Seleção de elementos ---
const visorImg = document.querySelector("#imagem-principal");
const legenda = document.querySelector("#legenda");
const thumbsWrap = document.querySelector("#thumbs");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");

// --- Array de imagens ---
const imagens = [
  { src: "https://wallpaperswide.com/download/paris_eiffel_tower_night-wallpaper-3840x2160.jpghttps://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", alt: "Paris Torre Eiffel" },
  { src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2YXN8ZW58MHx8MHx8fDA%3D", alt: "Maldivas" },
  { src: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/d0/17.jpg", alt: "Cristo Redentor " },
  { src: "https://s2.static.brasilescola.uol.com.br/be/2022/08/cordilheira-dos-andes.jpg", alt: "Cordilheira dos Andes" },
  { src: "https://www.jacadatravel.com/_next/image/?url=https%3A%2F%2Fcdn.jacadatravel.com%2Fwp-content%2Fuploads%2Fbis-images%2F492318%2Fmachu-picchu-AdobeStock_312433849-1600x900-f50_50.jpg&w=3840&q=100", alt: "Machu Picchu" }
];

let atual = 0; // índice da imagem atual

function atualizarVisor() {
  visorImg.src = imagens[atual].src;
  visorImg.alt = imagens[atual].alt;
  legenda.textContent = imagens[atual].alt;

  Array.from(thumbsWrap.children).forEach((thumb, i) => {
    thumb.classList.toggle("active", i === atual);
  });
}

function mudarPara(index) {
  atual = (index + imagens.length) % imagens.length; 
  atualizarVisor();
}

imagens.forEach((img, i) => {
  const thumb = document.createElement("button");
  thumb.className = "thumb";
  thumb.type = "button";
  thumb.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
  thumb.addEventListener("click", () => mudarPara(i));
  thumbsWrap.appendChild(thumb);
});

btnPrev.addEventListener("click", () => mudarPara(atual - 1));
btnNext.addEventListener("click", () => mudarPara(atual + 1));

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight") mudarPara(atual + 1);
  if(e.key === "ArrowLeft") mudarPara(atual - 1);
});

document.addEventListener("DOMContentLoaded", atualizarVisor);
