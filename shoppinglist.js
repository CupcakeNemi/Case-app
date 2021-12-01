// Define the content
let sortSystem = document.getElementById("sorting");
let addBtns = document.querySelectorAll(".addGrocery");
let listItems = document.querySelectorAll(".inputHere");
// Define inputs and ul
let hygene = document.getElementById("hygene");
let clean = document.getElementById("clean");

let greens = document.getElementById("greens");
let fruit = document.getElementById("fruit");

let meat = document.getElementById("meat");
let blood = document.getElementById("blood");

let bread = document.getElementById("bread");
let loaf = document.getElementById("loaf");

let dry = document.getElementById("dry");
let pasta = document.getElementById("pasta");

let dairy = document.getElementById("dairy");
let milk = document.getElementById("milk");

let pop = document.getElementById("pop");
let soda = document.getElementById("soda");

let crisps = document.getElementById("crisps");
let chips = document.getElementById("chips");

let frozen = document.getElementById("frozen");
let cold = document.getElementById("cold");

let sweets = document.getElementById("sweets");
let candy = document.getElementById("candy");


addBtns.forEach(addButton => {
    addButton.addEventListener("click", function () {
        // console.log("event", event, event.parentElement);
        console.log("knapp", this, this.parentElement, this.parentElement.firstElementChild, this.parentElement.firstElementChild.value);

        let groceries = document.createElement('li');
        console.log("groceries", groceries);
        groceries.classList.add('pStyle')

        //*HYGENE
        groceries.innerText = document.getElementById("clean").value;
        
        
        //* GREENS
        groceries.innerText = document.getElementById("greens").value;
        console.log("frukt", fruit);
        console.log("1,2- 1,2- check", groceries);
        fruit.appendChild(groceries);

        greens.value = "";

        // line through by click
        groceries.addEventListener("click", function () {
            groceries.style.textDecoration = "line-through";
        })

        // remove by double click
        groceries.addEventListener("dblclick", function () {
            fruit.removeChild(groceries);
        })
    })
})

// console.log("plupp",addBtns );
// addBtns.forEach(addButton => {
//     addButton.addEventListener ("click", function(event) {
//         console.log("event", event, event.parentElement);
//     })
// })

// create the list
// addBtns.addEventListener('click', function () {
//     let groceries = document.createElement('li');
//     groceries.classList.add('pStyle');
//     groceries.innerText = listItems.value;
//     listItems.appendChild(groceries);
// })



// for (let i = 0; i < listItems.length; i++) {
//     addBtn[i].addEventListener('click', function () {
//         addBtn.addEventListener('click', function () {
//             let groceries = document.createElement('li');
//             groceries.classList.add('pStyle');
//             groceries.innerText = listItems.value;
//             listItems.appendChild(groceries);
//         })
//     })

// }