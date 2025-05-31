const buttons = document.querySelectorAll(".button");
//console.log(buttons);
let body = document.querySelector("body");
buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        let target_id= event.target.id;
        console.log(target_id);
        switch (target_id){
            case "white":
                body.style.backgroundColor=target_id;
                break;
            case "grey":
                body.style.backgroundColor=target_id;
                break;
            case "blue":
                body.style.backgroundColor=target_id;
                break;
            case "yellow":
                body.style.backgroundColor=target_id;
        }

    })
});