const hex = "0123456789ABCDEF";


let randColorGenerator = function(){
    let colorHex ="#";
    for(let i = 0; i<6;i++){
        colorHex += hex[Math.floor(Math.random()*16)]
    }
    return colorHex;
}

let myInterval;
const changeC=function(){
    function bgColor(){
        let hexC = randColorGenerator();
        console.log(hexC);
        
        document.body.style.backgroundColor = hexC;

    };
    if (!myInterval){
        myInterval = setInterval(bgColor,1000);
    }
    
    
}
document.querySelector("#start").addEventListener("click",changeC);
let stopChange = function(){
    clearInterval(myInterval);
    myInterval = null;
};
document.querySelector("#stop").addEventListener("click",stopChange);