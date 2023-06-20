
  function Formulario(){
    /*var nombre = document.formDatosPersonales.user;
    var nombre_len = nombre.value.length;
    if (nombre_len == 0 || nombre_len < 6){
        alert("el nombre de usuario debe tener minimo 6 caracteres.");
    }
    var contraseña = document.formDatosPersonales.password;
    var contraseña_len = contraseña.value.length;
    if (contraseña_len == 0 || contraseña_len < 6){
        alert("la contraseña debe tener minimo 6 caracteres.");
    }

}
function validar_contraseña(){
    var contraseña1 = document.formDatosPersonales.password.value;
    var contraseña2 = document.formDatosPersonales.password2.value; 
    if(contraseña1 == contraseña2){
        alert("contraseña confirmada.");
    }
    else{
        alert("las contraseñas no coinciden.");
    }*/

    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if(user.length <= 3){
        alert("el nombre de usuario debe tener minimo 4 caracteres.");
        document.getElementById("user").value = "";
    }

    if(password.length <= 6){
        alert("la contraseña debe tener minimo 6 caracteres.")
        document.getElementById("password").value = "";
    }

}

