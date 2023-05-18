// Abrir e fechar menu mobile trocando icone (bi bi-list do bootstrap)
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");
menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nav-active");
});

//Para recolher aside ao fazer uma seleção
const navItem = document.querySelectorAll(".nav-item");
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});

const item = document.querySelectorAll("[animacao]");
const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;
  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};
animeScroll();
window.addEventListener("scroll", ()=>{
  animeScroll();
})

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')
btnEnviar.addEventListener("click", ()=>{
  btnEnviarLoader.style.display = "block";
  btnEnviar.style.display = "none"
})
setTimeout(() => {
  document.querySelector('#alerta').style.display = 'none';
}, 5000)