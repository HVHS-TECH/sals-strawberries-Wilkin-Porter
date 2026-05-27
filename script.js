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
    
    console.log(Number(FORM_INPUT_NAME))
    if (Number(FORM_INPUT_NAME) == NaN) {
        NAME_ERROR.textContent = "";
    } else {
        NAME_ERROR.textContent = "Please Input Text";
        return;
    } //************************************************************************************************ working here */

    if (Number(FORM_INPUT_FRUIT) != NaN) {
        FRUIT_ERROR.textContent = "Please Input Text";
        return;
    } else {
        FRUIT_ERROR.textContent = "";
    }

    if (Number(FORM_INPUT_QUANTITY) == NaN) {
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

    if (fb_userInformation) {
        firebase.database().ref('/salsStrawberries/userData').update({
            [fb_userInformation['uid']]: {
                preferredName: FORM_INPUT_NAME,
                favouriteFruit: FORM_INPUT_FRUIT,
                fruitQuantity: FORM_INPUT_QUANTITY,
            }
        });
    } else {
        LOGIN_ERROR.textContent = "You are not logged in, cannot save info to database.";
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