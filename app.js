const colors = ['red', 'green', 'rgba(133, 122, 200)', '#f15025', '#f1f518']

const btn = document.getElementById("btn")
btn.addEventListener('click', changeColor);

var count = 0;
function changeColor(e) {

    count = Math.floor((Math.random() * colors.length) + 0);
    var color = document.querySelector(".color");
    var initalcolor = color.textContent;
    color.textContent = colors[count];
    document.body.style.backgroundColor = colors[count];
    

    
}

