const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById("btn")
btn.addEventListener('click', changeColor);


var count = 0;
function changeColor(e) {
   var hexcolors = "#";
   for(let i = 1; i <= 6; ++i) {
       let index = getrandoNo();
       hexcolors += hex[index];
   }
   var color = document.querySelector('.color');
   color.textContent = hexcolors;
   document.body.style.backgroundColor = hexcolors;

}

function getrandoNo() {
    return Math.floor((Math.random() * hex.length) + 0);
}

