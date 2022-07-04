let slideAtivo = 0;

function proximo() {
  let imagens = document.querySelectorAll(".slide");
  imagens[slideAtivo].classList.remove("ativa");
  if (slideAtivo < 2){
    slideAtivo = slideAtivo + 1;
  } else {
    slideAtivo = 0;
  }
  imagens[slideAtivo].classList.add("ativa");
}

function anterior() {
  let imagens = document.querySelectorAll(".slide");
  imagens[slideAtivo].classList.remove("ativa");
  if (slideAtivo){
    slideAtivo = slideAtivo - 1;
  } else {
    slideAtivo = 2;
  }
  imagens[slideAtivo].classList.add("ativa");
}

function slideAtual(barraAtiva){
  let imagens = document.querySelectorAll(".slide");
  imagens[slideAtivo].classList.remove("ativa");
  if (barraAtiva == 0) {
    slideAtivo = 0;
  } if (barraAtiva == 1) {
    slideAtivo = 1;
  } if (barraAtiva == 2) {
    slideAtivo = 2;
  }
  imagens[slideAtivo].classList.add("ativa");
}



