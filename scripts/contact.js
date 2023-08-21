const modal = new bootstrap.Modal(document.getElementById('modalContact'))
const form = document.getElementById('form')
const myInput = document.querySelectorAll('.text-input')
const textModal = document.querySelectorAll('.form-control')

//#region Event form is invalid
document.addEventListener('invalid', (() => {
    return function (event) {
        event.preventDefault();
        checkFormRequire()
    };
})(), true);
//#endregion

//#region Event after submitted form
form.addEventListener('submit', (event) => {
    event.preventDefault()
    checkFormRequire()

    myInput.forEach((inputSubmit) => {
        let inputData = inputSubmit.value
        let inputName = inputSubmit.name
        showFormData(inputData, inputName)
    })
})
//#endregion

//#region function check input tag (required Attribute)
function checkFormRequire() {
    myInput.forEach((input) => {
        if (input.attributes.required) {
            if (input.value == '') {
                input.classList.add('required')
                input.placeholder = `Invalid input. Please enter ${input.name}.`
            } else {
                input.classList.remove('required')
                input.removeAttribute('placeholder')
            } 
        }
    })
}
//#endregion

//#region function display data after the contact is submitted to Modal
// let myContact = new Object;
// let contactData = [];

function showFormData(valueSubmit, nameSubmit) {
    textModal.forEach((Modal) => {
        let modalName = Modal.name.substring(6)
        if (modalName == nameSubmit) {
            Modal.value = valueSubmit
            // myContact[modalName] = valueSubmit
        }
    })
    modal.show()
}
//#endregion

//#region function display successfully status when form submitted
async function modalSubmit() {
    await Swal.fire({
        allowOutsideClick: false,      // disable outside click
        position: 'center',
        icon: 'success',
        title: 'Your information has been sent successfully.',
        showConfirmButton: false,
        timer: 1500,                   // time (ms)
        timerProgressBar: true
    })
    // saveData(myContact)
    modal.hide()
    location.reload()
}

// function saveData(objData) {
//     contactData.push(objData)
// }
//#endregion