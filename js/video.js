document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".about-video-wrapper");
  const video = document.querySelector(".about-video");
  const playButton = document.querySelector(".video-play-button");

  if (!wrapper || !video || !playButton) {
    console.log("Elemento do vídeo não encontrado.");
    return;
  }

  let previewTime = 57; // Mostrar a partir de 57 segundos
  let previewApplied = false; // Para garantir que o preview só seja aplicado uma vez
  let isFirstPlay = true; // Marca se é o primeiro play após carregar

  function mostrarPlay() {
    wrapper.classList.remove("playing");
    wrapper.classList.add("paused");
  }

  function esconderPlay() {
    wrapper.classList.remove("paused");
    wrapper.classList.add("playing");
  }

  function pausarVideo() {
    video.pause();
    mostrarPlay();
  }

  function tocarDoInicio() {
    video.currentTime = 0; // Começa do início na primeira vez
    video.play()
      .then(() => {
        esconderPlay();
      })
      .catch((erro) => {
        console.log("Erro ao reproduzir o vídeo:", erro);
      });
  }

  video.addEventListener("loadedmetadata", function () {
    // Aplica o preview (57s) quando o vídeo é carregado
    if (!previewApplied) {
      video.currentTime = previewTime;
      video.pause(); // Pausa logo após definir o preview
      previewApplied = true;
    }
  });

  playButton.addEventListener("click", function (e) {
    e.stopPropagation();
    // Se o vídeo estiver pausado e for o primeiro play, começa do início
    if (video.paused) {
      if (isFirstPlay) {
        tocarDoInicio(); // Inicia do início apenas na primeira vez
        isFirstPlay = false; // Marca que não é mais o primeiro play
      } else {
        video.play(); // Retoma de onde parou
        esconderPlay();
      }
    } else {
      pausarVideo();
    }
  });

  video.addEventListener("click", function () {
    if (video.paused) {
      if (isFirstPlay) {
        tocarDoInicio(); // Inicia do início apenas na primeira vez
        isFirstPlay = false; // Marca que não é mais o primeiro play
      } else {
        video.play(); // Retoma de onde parou
        esconderPlay();
      }
    } else {
      pausarVideo();
    }
  });

  video.addEventListener("pause", mostrarPlay);
  video.addEventListener("play", esconderPlay);

  mostrarPlay(); // Inicializa o botão como 'play'
});