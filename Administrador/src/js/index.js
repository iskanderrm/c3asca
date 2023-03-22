function login () {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;


    if (user.length != 0 && password.length > 0) {
        if(user == 'donetrm' && password == 'Qwerty') {
        window.location.assign ("home.html")
        }

        else {
            alert('Usuario o contraseña incorrectas');
        }
    }

    else {

    alert('Llene los campos');
    }
}