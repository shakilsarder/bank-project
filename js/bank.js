document.getElementById('login-submit').addEventListener('click', function () {

    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //console.log('userEmail');

    //get user email
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //console.log('userPassword');

    //Email & passwor validation
    if (userEmail == 'shakil@gmail.com' && userPassword == '123456') {
        //console.log('Login Succesfull');
        window.location.href = 'banking.html';
    }
    else {
        console.log('Wrong user & password');
    }


});