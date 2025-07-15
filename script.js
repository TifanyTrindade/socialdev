// Quando o vídeo carregar, diminui a velocidade
document.getElementById("bg-video").playbackRate = 0.7; // 0.5 = metade da velocidade

//Ação de clique
document.querySelectorAll(".button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault(); // evita que o link abra imediatamente

    btn.classList.add("clicked");

    setTimeout(() => {
      btn.classList.remove("clicked");

      // Agora sim abre o link
      const link = btn.getAttribute("href");
      const target = btn.getAttribute("target");

      if (target === "_blank") {
        window.open(link, "_blank");
      } else {
        window.location.href = link;
      }
    }, 150); // tempo do efeito antes do link abrir
  });
});
