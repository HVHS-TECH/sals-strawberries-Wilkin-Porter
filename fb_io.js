/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/

//var loginLogoutButton = document.getElementById("loginLogout");

var fb_GLOBAL_user;
var authenticationListener;

function fb_authenticate() {
    authenticationListener = firebase.auth().onAuthStateChanged(fb_checkLoginState)
}

function fb_checkLoginState(_userInformation) {
    if (_userInformation) {
        console.log(_userInformation);
        firebase.database().ref('/salsStrawberries').update({
            userData: {
                [_userInformation['l']]: {
                    userName: _userInformation['displayName'],
                    email: _userInformation['email'],
                    //profileURL: user['photoURL']
                }
            }
        });
    } else {
        fb_loginPopup();
    }
}

function fb_loginPopup() {
	let provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then((result) => {
		fb_GLOBAL_user = result.user;
	});
}

function fb_logout() {
    authenticationListener(); // Next steps: understand what this is even doing
    firebase.auth().signOut();
    console.log('testing')
}

function fb_error(){
    // Don't forget your error handling!
}