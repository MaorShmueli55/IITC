document.getElementById("content").style.backgroundColor = "lightBlue";
const items = document.querySelectorAll(".text");
for(let i = 0; i<items.length; i++){
    items[i].style.color = "red"
}
const list = document.querySelectorAll("li")
for(let i = 0; i < list.length; i++){
    console.log(list[i].textContent);
}

const button = document.querySelector(".Highlight")
function highlights(){
   for(let i = 0; i < list.length; i++){
    list[i].style.backgroundColor = "yellow"
   }
};
button.addEventListener("click" , highlights);
const listItem = document.querySelector(".listsItem");
function createLi(){
let newLi = document.createElement("li");
newLi.textContent = "New Item";
listItem.appendChild(newLi)
newLi.addEventListener("click" , function(){
    const items = listItem.querySelectorAll("li");
    for(let i = 0; i < items.length; i++){
        console.log("click");
        
        items[i].classList.remove("selected");
    }
    newLi.classList.add("selected")
})
}

const addButton = document.querySelector(".Add");

addButton.addEventListener("click" , createLi);





