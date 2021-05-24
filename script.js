// console.log('Add validation!');
// function totalcost() {
//     let total = 0;
//     for (i=1; i<total_items; i++) {
//         itemID = document.getElementById("#days"=i);
//         if (typeof itemID === 'undefined' || itemID === null) {
//         } else {
//             total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
//         }
//     }
//     document.getElementById("#totalcost").innerHTML = "$" + total;
// }

// grab the number of days value with document.querySelector
//start the index at 1 and loop through the end (30). take the amounf of days (innerHTML/innerText?) and times them by 5.
//output the total into the totalcost div

const form = document.querySelector("#parking-form");
// console.log("form", form)
const nameInput = document.querySelector("#name-field");
// console.log("nameInput", nameInput)
let carInput = document.querySelector(".input-group");
console.log("yearInput", carInput)

let formIsValid; 


form.addEventListener('input', event => {

})
function validateNameInput() { 
    let error = document.createElement("div");
    console.log(nameInput.value)
    if (nameInput.value === undefined) {
        console.log("input invalid")
        formIsValid = false
        document.querySelector("#name-field").classList.add('input-invalid')
        document.querySelector('#name-field').appendChild(error).innerHTML = 'This field is required.'
    } else { formIsValid = true; console.log(formIsValid)}
}
//script.js:32 Uncaught ReferenceError: undefine is not defined
// idateNameInput (script.js:32)at val
// debugged above error
form.addEventListener('submit', event => {
    event.preventDefault()
    validateNameInput()
    validateCarInput()

    //Uncaught ReferenceError: validateNameInput is not defined
    // debugged above error
//     if (formIsValid === false) {
    
// } else {
//     formIsValid = true
// }
})

function validateCarInput() {
    let error = document.createElement("div");
    let carYear = document.getElementById("car-year")
    let carField = document.getElementById("input-group")
    let carMake = document.getElementById("car-make")
    if (carYear.value < 1900) {
        console.log("input invalid")
        error.innerHTML = "Year must be greater than 1900"
        // carYear.carField.insertBefore(error, carYear.carMake)
        carYear.after(error);
    } 

    // existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling)

    // Uncaught ReferenceError: error is not defined
    // at validateCarInput (script.js:62)
    //debugged

    //Uncaught TypeError: carInput.insertAfter is not a function
    // at validateCarInput (script.js:63)
    // at HTMLFormElement.<anonymous> (script.js:47)
    // debugged

    // new error: Uncaught TypeError: Cannot read property 'insertBefore' of undefined
    // DEBUGGED!! however, error is showing to the side rather than below, but i'll take it!

    // if (carInput === undefined) {
    //     console.log("input invalid")
    //     formIsValid = false
    //     document.querySelector("#input-group").classList.add('input-invalid')
    //     document.querySelector("#input-group").appendChild(error).innerHTML = 'This field is required.'
    // }
}
// form.addEventListener('submit', event => {
//     event.preventDefault()
//     validateCarInput
// })

// // function () {
//     if () {

//     } else {

//     }
// }