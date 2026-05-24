/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/

const LOGIN_TEXT = document.getElementById("loginInformation");
var logout;
var fb_userInformation;
var authenticationListener;

function fb_authenticate() {
    authenticationListener = firebase.auth().onAuthStateChanged(fb_checkLoginState)
}

function fb_checkLoginState(_userInformation) {
    if (logout == true) {
        return;
    }
    if (_userInformation) {
        firebase.database().ref('/salsStrawberries/userData').update({
            [_userInformation['uid']]: {
                userName: _userInformation['displayName'],
                email: _userInformation['email'],
                //profileURL: user['photoURL']
            }
        });
        fb_userInformation = _userInformation;
        displayLoginInformation();
    } else {
        fb_loginPopup();
    }
    
}

function fb_loginPopup() {
	let provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider);
}

function fb_logout() {
    logout = true;
    firebase.auth().signOut();
    removeLoginInformation();
}

function fb_error(){
    // Don't forget your error handling!
}