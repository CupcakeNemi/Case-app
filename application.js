//? Where to begin?


//? Add a new chore
// function newChore() {
//     let chore = doc
//     let li = document.createElement("li");

//     if(/* Nothing is added  */) {

//     } else {
//         /* add chore */
//     }
// }

let addButton = document.getElementById('add');
let listItems = document.getElementById('listItems');
let chore = document.getElementById('chore');

addButton.addEventListener('click', function () {
    // Add the chores
    let paraglider = document.createElement('li');
    paraglider.classList.add('pStyle');
    paraglider.innerText = chore.value;
    listItems.appendChild(paraglider);

    // make the text go away after adding
    chore.value = "";

    //! add on enter (not working)
    // if (event.keycode === 13) {
    //     event.preventDefault();
    //     document.getElementById("myBtn").click();
    // }

    // line through by click
    paraglider.addEventListener('click', function () {
        paraglider.style.textDecoration = "line-through";
    })

    // remove by double click
    paraglider.addEventListener('dblclick', function() {
        listItems.removeChild(paraglider);
    })


})

//? Checkbox to remove