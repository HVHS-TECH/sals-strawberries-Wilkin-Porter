


const LOGIN_INFORMATION = document.getElementById("loginInformation");

const NAME_ERROR = document.getElementById("nameError");
const FRUIT_ERROR = document.getElementById("fruitError");
const QUANTITY_ERROR = document.getElementById("quantityError");


console.log("Running Sal's Strawberries");

function writeForm() {
    // Get the form data
    const FORM_INPUT_NAME = document.getElementById("name").value;
    const FORM_INPUT_FRUIT = document.getElementById("favoriteFruit").value;
    const FORM_INPUT_QUANTITY = document.getElementById("fruitQuantity").value;
    
    if (Number(FORM_INPUT_NAME) == !NaN) {
        NAME_ERROR.textContent = "Please Input Text";
    }

    if (Number(FORM_INPUT_FRUIT) == !NaN) {
        FRUIT_ERROR = "Please Input Text";
    }

    if (Number(FORM_INPUT_QUANTITY) == NaN) {
        FRUIT_ERROR = "Please Input A Number";
    }
}

function displayLoginInformation() {
    if (fb_userInformation == null) {
        console.log('An error occured during sign in.');
        LOGIN_INFORMATION.style.color = 'red';
		LOGIN_INFORMATION.textContent = 'An error occured during sign in. Please try again later, or contact the site administrator if you believe this is a mistake.';
    } else {
        console.log('Logged in as user: ' + fb_userInformation['displayName'] + '. Full user details:');
        console.log(fb_userInformation);
        LOGIN_INFORMATION.style.color = '#145043';
        LOGIN_INFORMATION.textContent = 'Logged in as user: ' + fb_userInformation['displayName'];
    }
}

function removeLoginInformation() {
    console.log('User Logged Out');
    LOGIN_INFORMATION.innerHTML = 'Not Logged In';
}