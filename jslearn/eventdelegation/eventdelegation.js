const list = document.getElementById("list");
list.addEventListener("click",(e)=>{
    if(e.target.matches('li')){

        if (e.target.innerText === "জাভাস্ক্রিপ্ট") {
            e.target.style.backgroundColor = "yellow";
        }else if(e.target.innerText === "জাভা"){
            e.target.style.backgroundColor = "green";
        } else {
            e.target.style.backgroundColor = "blue";
        }
    }
   
})

function addElement(){
    const newElement = document.createElement("li");
    newElement.textContent = "ডট নেট";
    list.appendChild(newElement);
}