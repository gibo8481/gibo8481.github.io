const button = document.querySelector("#msg");
const heading = document.querySelector("#hding");

const btnClick = document.addEventListener('click', displayMessage)
// console.log(button);
// console.log(heading);

function displayMessage(){
    const print = prompt("Write anything you want to display on the screen!");
    heading.textContent = `${print}`;
}

const button2 = document.querySelector('#circle');
const btnClick2 = document.addEventListener('mouseover', switchColor);


function switchColor(){
    button2.style.backgroundColor = 'orange';
}