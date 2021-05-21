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
const nameInput = document.querySelector("#name-field");

let formIsValid;

form.addEventListener('input', event => {

})

form.addEventListener('submit', event => {
    event.preventDefault()
    validateNameInput ();
    if (formIsValid) {
        document.querySelector("#name-field").classList.add('input-invalid')
        document.querySelector('#name-field').appendChild(error).innerHTML = 'This field is required.'
} else {
    formIsValid = true
}
})