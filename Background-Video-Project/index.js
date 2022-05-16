const btn = document.querySelector(".btn")
const video = document.querySelector(".codingvid")
const fas = document.querySelector(".fas")
const preloader = document.querySelector(".preloader")

btn.addEventListener("click", () => {
    if (btn.classList.contains("pause")) {
        btn.classList.remove("pause");
        video.play();
        fas.classList.add("fa-pause");
        fas.classList.remove("fa-play");
    }
    else {
        btn.classList.add("pause");
        video.pause();
        fas.classList.remove("fa-pause");
        fas.classList.add("fa-play");
    }
});

window.addEventListener("load", () => {
    preloader.style.zIndex = "-2";
})
