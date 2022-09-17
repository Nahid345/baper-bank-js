// step:1 add click evenet handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function() {
    //    step:2 get the email address inside the email input filed
    // always remember tto use . value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3 get password
    // 3.a: set id on the html element
    // get the element
    // get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Danger: Do not verify email password on the client side

    // step: 4 verify email and password

    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('invalid user');
    }


})