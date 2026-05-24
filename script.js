


const LOGIN_INFORMATION = document.getElementById("loginInformation");

console.log("Running Sal's Strawberries");

function writeForm() {
    // Get the form data
    const FORM_INPUT_NAME = document.getElementById("name").value;
    const FORM_INPUT_FRUIT = document.getElementById("favoriteFruit").value;
    const FORM_INPUT_QUANTITY = document.getElementById("fruitQuantity").value;
    
    
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