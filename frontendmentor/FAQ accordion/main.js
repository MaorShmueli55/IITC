const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")
const p = document.querySelectorAll("p")

plus.forEach(function(ev , i){
    ev.addEventListener("click" , function(){
        ev.classList.add("hidden");
        minus[i].classList.remove("hidden")
        p[i].classList.remove("hidden")
    })
})

minus.forEach(function(ev , i){
    ev.addEventListener("click" , function(){
        ev.classList.add("hidden");
        plus[i].classList.remove("hidden")
        p[i].classList.add("hidden")
    })
})