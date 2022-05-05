async function play() {
  const body = document.body || document.getElementsByTagName("body")[0];

  if (body !== null) {
    const video = document.createElement("video") as HTMLVideoElement;
    const target = body.querySelector("#sc-active-cart,#bag-content");
    if (target !== null) {
      const blob = await fetch(chrome.runtime.getURL('video.mp4')).then((r) => r.blob());
      function createObjectURL(obj: Blob | MediaSource) {
        return window.URL
          ? window.URL.createObjectURL(obj)
          : window.webkitURL.createObjectURL(obj);
      }
      const url = createObjectURL(blob);
      video.src = url
      video.autoplay = true;
      video.controls = true;
      video.style.maxWidth = '100%';
      target.appendChild(video);
      setTimeout(() => {
        video.play()
      }, 500);
    }
  }
}

play()
