const LOGIN_INFORMATION = document.getElementById("loginInformation");
const LOGIN_BUTTON = document.getElementById("loginButton");
const LOGOUT_BUTTON = document.getElementById("logoutButton");
loginButtonDisplay('show');

const NAME_ERROR = document.getElementById("nameError");
const FRUIT_ERROR = document.getElementById("fruitError");
const QUANTITY_ERROR = document.getElementById("quantityError");
const LOGIN_ERROR = document.getElementById("loginError");


console.log("Running Sal's Strawberries");

function writeForm() {
    // Get the form data
    const FORM_INPUT_NAME = document.getElementById("name").value;
    const FORM_INPUT_FRUIT = document.getElementById("favoriteFruit").value;
    const FORM_INPUT_QUANTITY = document.getElementById("fruitQuantity").value;
    
    if (fb_userInformation == undefined || fb_userInformation == null) {
        LOGIN_ERROR.textContent = "You are not logged in, cannot save info to database.";
        return;
    } else {
        LOGIN_ERROR.textContent = "";
    }

    if (isNumber(FORM_INPUT_NAME)) {
        NAME_ERROR.textContent = "Please Input Text";
        return;
    } else if (FORM_INPUT_NAME.length > 40) {
        NAME_ERROR.textContent = "Please Input Text Shorter than 40 Characters";
        return;
    } else {
        NAME_ERROR.textContent = "";
    }

    if (isNumber(FORM_INPUT_FRUIT)) {
        FRUIT_ERROR.textContent = "Please Input Text";
        return;
    } else if (FORM_INPUT_FRUIT.length > 40) {
        FRUIT_ERROR.textContent = "Please Input Text Shorter than 40 Characters";
        return;
    } else {
        FRUIT_ERROR.textContent = "";
    }

    if (!isNumber(FORM_INPUT_QUANTITY)) {
        QUANTITY_ERROR.textContent = "Please Input A Number";
        return;
    } else {
        QUANTITY_ERROR.textContent = "";
    }

    if (Number(FORM_INPUT_QUANTITY) <= 0) {
        QUANTITY_ERROR.textContent = "Please Input A Number Greater than 0";
        return;
    } else {
        QUANTITY_ERROR.textContent = "";
    }

    if (Number(FORM_INPUT_QUANTITY) > 1000) {
        QUANTITY_ERROR.textContent = "Please Input A Number Less than 1000";
        return;
    } else {
        QUANTITY_ERROR.textContent = "";
    }

    console.log("Form Error Checked, Results:\nPreferred Name: " + FORM_INPUT_NAME + "\nFavourite Fruit: " + FORM_INPUT_FRUIT + "\nServings Per Week: " + FORM_INPUT_QUANTITY);

    firebase.database().ref('/salsStrawberries/userData/' + fb_userInformation['uid']).update({
        preferredName: FORM_INPUT_NAME,
        favouriteFruit: FORM_INPUT_FRUIT,
        fruitQuantity: FORM_INPUT_QUANTITY,
    });
    
}

function displayLoginInformation() {
    if (fb_userInformation == null) {
        console.log('An error occured during sign in.');
        LOGIN_INFORMATION.style.color = 'red';
		LOGIN_INFORMATION.textContent = 'An error occured during sign in. Please try again later, or contact the site administrator if you believe this is a mistake.';
    } else {
        console.log('Logged in as user: ' + fb_userInformation['displayName']);
        LOGIN_ERROR.textContent = "";
        LOGIN_INFORMATION.style.color = '#145043';
        LOGIN_INFORMATION.textContent = 'Logged in as user: ' + fb_userInformation['displayName'];
    }
}

function removeLoginInformation() {
    console.log('User Logged Out');
    LOGIN_INFORMATION.innerHTML = 'Not Logged In';
}

function loginButtonDisplay(mode) {
    if (mode == 'hide') {
        LOGIN_BUTTON.hidden = true;
        LOGOUT_BUTTON.hidden = false;
        return;
    } 

    if (mode == 'show') {
        LOGIN_BUTTON.hidden = false;
        LOGOUT_BUTTON.hidden = true;
        return;
    }

    console.error("loginButtonDisplay() is being called with something other than 'show' or 'hide'");
}

function isNumber(_input) {
    if (isNaN(Number(_input))) {
        return false;
    } else {
        return true;
    }
}