const clock = document.getElementById('clock');
setInterval(function(){
    clock.textContent= new Date().toLocaleTimeString();
},1000)