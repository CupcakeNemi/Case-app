// Define the content
let sortSystem = document.getElementById("sorting");
let addBtns = document.querySelectorAll(".addGrocery");
let listItems = document.getElementsByClassName("inputHere");

console.log("plupp",addBtns );
addBtns.forEach(addButton => {
    addButton.addEventListener ("click", function(event) {
        console.log("event", event, event.parentElement);
    })
})
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