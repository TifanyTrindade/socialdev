// Quando o vídeo carregar, diminui a velocidade
document.getElementById("bg-video").playbackRate = 0.6; // 0.5 = metade da velocidade

//Ação de clique
// Remove o amarelo ao voltar para a página
window.addEventListener("pageshow", () => {
  document.querySelectorAll(".button").forEach(btn => {
    btn.classList.remove("clicked");
  });
});

// Mantém o botão amarelo até o link carregar
document.querySelectorAll(".button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    btn.classList.add("clicked");

    const link = btn.getAttribute("href");
    const target = btn.getAttribute("target");

    setTimeout(() => {
      if (target === "_blank") {
        window.open(link, "_blank");
      } else {
        window.location.href = link;
      }
    }, 300);

    e.preventDefault();
  });
});


