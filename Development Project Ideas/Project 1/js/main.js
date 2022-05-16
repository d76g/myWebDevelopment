window.addEventListener("DOMContentLoaded", event => {
    let topButton = document.getElementById('topButton')

    window.onscroll = () => {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        {
            topButton.style.display = "block";
        } 
        else {
            topButton.style.display= "none";
        }
    }
});