// Define the content
let sortSystem = document.getElementById("sorting");
let addBtns = document.querySelectorAll(".addGrocery");
let listItems = document.querySelectorAll(".inputHere");
// Define inputs and ul
let hygene = document.getElementById("hygene");
let clean = document.getElementById("clean");
let addHygene = document.getElementById("addHygene");

let greens = document.getElementById("greens");
let fruit = document.getElementById("fruit");
let addGreens = document.getElementById("addGreens");

let meat = document.getElementById("meat");
let blood = document.getElementById("blood");
let addMeat = document.getElementById("addMeat");

let bread = document.getElementById("bread");
let loaf = document.getElementById("loaf");
let addBread = document.getElementById("addBread");

let dry = document.getElementById("dry");
let pasta = document.getElementById("pasta");
let addDry = document.getElementById("addDry");

let dairy = document.getElementById("dairy");
let milk = document.getElementById("milk");
let addDairy = document.getElementById("addDairy");

let pop = document.getElementById("pop");
let soda = document.getElementById("soda");
let addPop = document.getElementById("addPop");

let crisps = document.getElementById("crisps");
let chips = document.getElementById("chips");
let addCrisps = document.getElementById("addCrisps");

let frozen = document.getElementById("frozen");
let cold = document.getElementById("cold");
let addFrozen = document.getElementById("addFrozen");

let sweets = document.getElementById("sweets");
let candy = document.getElementById("candy");
let addSweets = document.getElementById("addSweets");



//* Hygene
addHygene.addEventListener("click", function () {
    // The validation call
    let food = addHygene.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = hygene.value;
    clean.appendChild(groceries);
    console.log("clean", clean);

    hygene.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        clean.removeChild(groceries);

    })
})

//* Greens
addGreens.addEventListener("click", function () {
    // The validation call
    let food = addGreens.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = document.getElementById("greens").value;
    fruit.appendChild(groceries);
    console.log("fruit", fruit);

    greens.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        fruit.removeChild(groceries);

    })
})

//* Meat
addMeat.addEventListener("click", function () {
    // The validation call
    let food = addMeat.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = meat.value;
    blood.appendChild(groceries);
    console.log("blood", blood);

    meat.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        blood.removeChild(groceries);

    })
})

//* Bread
addBread.addEventListener("click", function () {
    // The validation call
    let food = addBread.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = bread.value;
    loaf.appendChild(groceries);
    console.log("loaf", loaf);

    bread.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        loaf.removeChild(groceries);

    })
})

//* Dry goods
addDry.addEventListener("click", function () {
    // The validation call
    let food = addDry.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = dry.value;
    pasta.appendChild(groceries);
    console.log("pasta", pasta);

    dry.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        pasta.removeChild(groceries);

    })
})

//* Dairy
addDairy.addEventListener("click", function () {
    // The validation call
    let food = addDairy.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = dairy.value;
    milk.appendChild(groceries);
    console.log("milk", milk);

    dairy.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        milk.removeChild(groceries);

    })
})

//* Drinks
addPop.addEventListener("click", function () {
    // The validation call
    let food = addPop.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = pop.value;
    soda.appendChild(groceries);
    console.log("soda", soda);

    pop.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        soda.removeChild(groceries);

    })
})

//* Snacks
addCrisps.addEventListener("click", function () {
    // The validation call
    let food = addCrisps.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = crisps.value;
    chips.appendChild(groceries);
    console.log("chips", chips);

    crisps.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        chips.removeChild(groceries);

    })
})

//* Frozen
addFrozen.addEventListener("click", function () {
    // The validation call
    let food = addFrozen.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = frozen.value;
    cold.appendChild(groceries);
    console.log("cold", cold);

    frozen.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        cold.removeChild(groceries);

    })
})

//* Sweets
addSweets.addEventListener("click", function () {
    // The validation call
    let food = addSweets.previousElementSibling.value;
    if (!check(food)) {
        return
    }

    let groceries = document.createElement('li');
    groceries.classList.add('pStyle')

    groceries.innerText = sweets.value;
    candy.appendChild(groceries);
    console.log("candy", candy);

    sweets.value = "";

    // line through by click
    groceries.addEventListener('click', function (event) {
        if (event.target.className === "pStyle" || event.target.className === "pStyle highlight") {
            event.target.classList.toggle("highlight")

        }
    })

    // remove by double click
    groceries.addEventListener('dblclick', function () {
        candy.removeChild(groceries);

    })
})


// The validation
function check(food) {
    if (food.length > 1) {
        console.log("japp");
        return true
    } else {
        console.log("nope");
        return false
    }
}





//!Implement Move for just your store
// document.getElementById("sorting").addEventListener("click", function (event) {
//     if (event.target.className === 'upp') {
//         flytta('upp', event.target.parentElement)
//     }
//     else if (event.target.className === 'ner') {
//         flytta('ner', event.target.parentElement)
//     }
//     else {
//         // ingenting
//     }
// })

// function flytta(riktning, elementAttFlytta) {
//     let allaListItems = document.getElementsByClassName("element")
//     let vilkenPlats

//     for (let i = 0; i < allaListItems.length; i++) {

//         if (elementAttFlytta === allaListItems[i]) {
//             if (riktning === 'upp') {
//                 vilkenPlats = i - 1
//             }
//             else {
//                 vilkenPlats = i + 2
//             }
//         }
//         else {
//             // ingenting
//         }
//     }

//     document.getElementById("sorting").insertBefore(elementAttFlytta, allaListItems[vilkenPlats])
// }



// Want to imply this function at some point
//! add on enter (not working)
// if (event.keycode === 13) {
//     event.preventDefault();
//     document.getElementById("myBtn").click();
// }