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

let formIsValid; 

let error = document.createElement("div")

form.addEventListener('input', event => {

})
function validateNameInput() {
    if (nameInput.value === undefined) {
        console.log("input invalid")
        formIsValid = false
        document.querySelector("#name-field").classList.add('input-invalid')
        document.querySelector('#name-field').appendChild(error).innerHTML = 'This field is required.'
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()
    validateNameInput()
//     if (formIsValid === false) {
    
// } else {
//     formIsValid = true
// }
})

let carInput = document.querySelector("#car-field")

form.addEventListener('input', event => {

})
function validateCarInput() {
    if (carInput === undefined) {
        console.log("input invalid")
        formIsValid = false
        document.querySelector("#car-field").classList.add('input-invalid')
        document.querySelector("#car-field").appendChild(error).innerHTML = 'This field is required.'
    }
}
form.addEventListener('submit', event => {
    event.preventDefault()
    validateCarInput
})