/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/

let authenticationListener;
let loggingOut = false;

function fb_authenticate() {
    authenticationListener = firebase.auth().onAuthStateChanged(fb_checkLoginState)
}

function fb_checkLoginState(_userInformation) {
    if (loggingOut = true) {
        // do nothing man
        return;
    }

    if (_userInformation) {
        // User is logged in, replace login with logout button
    } else {
        loggedOut = false;
        fb_loginPopup();
    }

    firebase.database().ref('/salsStrawberries').update({
        userData: {
            [_userInformation['l']]: {
                userName: _userInformation['displayName'],
                email: _userInformation['email'],
                //profileURL: user['photoURL']
            }
        }
    });
}

function fb_loginPopup() {
	let provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then((result) => {
		fb_GLOBAL_user = result.user;
	});
}

function fb_error(){
    // Don't forget your error handling!
}