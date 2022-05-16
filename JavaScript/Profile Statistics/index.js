const counter = document.querySelectorAll(".counter")

counter.forEach((counter)=>{
    counter.innerText = '0';
    increamentCounter();

    function increamentCounter(){
        let currentNum = +counter.innerText
        const dataCeil = counter.getAttribute("data-ceil")
        console.log(dataCeil);

        const increament = dataCeil / 15
        currentNum = Math.ceil(currentNum + increament) 
        counter.innerText = currentNum

        if(currentNum < dataCeil)
        {
            setTimeout(increamentCounter,50)
        }
        else {
            counter.innerText = dataCeil
        }

    }
})