


const LOGIN_INFORMATION = document.getElementById("loginInformation");

console.log("Running Sal's Strawberries");

/*
function writeForm() {
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    
}
*/

function displayLoginInformation() {
    if (fb_userInformation == null) {
        LOGIN_INFORMATION.style.color = 'red';
		LOGIN_INFORMATION.innerHTML = 'An error occured during sign in. Please try again later, or contact the site administrator if you believe this is a mistake.';
    } else {
        console.log('Logged in as user: ' + fb_userInformation['displayName'] + '. Full user details:');
        console.log(fb_userInformation);
        LOGIN_INFORMATION.style.color = '#145043';
        LOGIN_INFORMATION.textContent = 'Logged in as user: ' + fb_userInformation['displayName'];
    }
    
}