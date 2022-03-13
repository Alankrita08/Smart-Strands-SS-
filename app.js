var username1 = document.getElementById('username1');
var password1 = document.getElementById('password1');

// storing input from register-form
function store() {
    localStorage.setItem('username1', username1.value);
    localStorage.setItem('password1', password1.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedusername1 = localStorage.getItem('username1');
    var storedpassword1 = localStorage.getItem('password1');

    // entered data from the login-form
    var userName = document.getElementById('loginusername').value;
    var userPw = document.getElementById('loginpassword').value;

    // check if stored data from register-form is equal to data from login form

    if(userName.value == storedusername1 && userPw.value == storedpassword1) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}