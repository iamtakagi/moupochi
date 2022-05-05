async function play() {
  const body = document.body || document.getElementsByTagName("body")[0];

  if (body !== null) {
    const video = document.createElement("video") as HTMLVideoElement
    const target = body.querySelector("#sc-active-cart,#bag-content");
    if (target !== null) {
        video.src = "https://ytwp.iamtakagi.net/stream?url=https://www.youtube.com/watch?v=X8v20C2X2Ag";
        video.autoplay = true;
        video.controls = true;
        video.style.maxWidth = '100%';
        target.appendChild(video);

        setTimeout(async () => {
          await video.play();
        }, 1000);
    }
  }
}

play();
