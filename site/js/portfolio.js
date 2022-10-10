const avatar = document.querySelector(".avatar")
avatar.addEventListener("click", function () {
    avatar.src="./image/avatar.svg"
});


const pink = document.querySelector("#creabutton");
const button = document.createElement("button")
button.innerText = "modify text and color"
button.classList.add("button-des");
pink.appendChild(button)
button.addEventListener ('click', function(){
    const span = document.querySelector('#name');
    const name = prompt("ton nom")
    span.innerHTML = name
    span.style.color = "white";
    const background = document.querySelectorAll(".pink-bg");
    const textPink = document.querySelectorAll(".pink-text");
    const color = prompt("switch color");
    background.forEach(elements => elements.style.backgroundColor = color),
    textPink.forEach(elements => elements.style.color = color)

    

    });

    


