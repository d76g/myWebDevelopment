const btnE = document.querySelector(".btn");

btnE.addEventListener("mouseover", (event)=>{
    const x = event.pageX - btnE.offsetLeft;
    const y = event.pageY - btnE.offsetTop;

    btnE.style.setProperty("--xPos", x +"px");
    btnE.style.setProperty("--yPos", y +"px");
})