"use strict";
const selectors = [
    /* Amazon */ "#sc-active-cart",
    /* Apple */ "#bag-content",
];
let video = null;
let player = null;
function initialize() {
    const body = document.body || document.getElementsByTagName("body")[0];
    if (body !== null) {
        player = document.createElement("video");
        const target = body.querySelector(selectors.join(","));
        if (target !== null) {
            player.autoplay = true;
            player.controls = true;
            player.style.maxWidth = "100%";
            target.appendChild(player);
        }
    }
}
async function loadVideo() {
    const runtimeUrl = browser.runtime.getURL("video.webm");
    const blob = await fetch(runtimeUrl).then((r) => r.blob());
    function createObjectURL(obj) {
        return window.URL
            ? window.URL.createObjectURL(obj)
            : window.webkitURL.createObjectURL(obj);
    }
    const objectUrl = createObjectURL(blob);
    video = {
        blob,
        runtimeUrl,
        objectUrl
    };
}
function playVideo() {
    setTimeout(() => {
        if (player !== null && video !== null) {
            player.src = video.objectUrl;
            player.play();
        }
    }, 500);
}
Promise.all([
    initialize(),
    loadVideo(),
    playVideo(),
]);
