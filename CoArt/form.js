
  function Formulario(){
    let name = document.getElementById("name").value;
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if(name.length == 0){
        alert("el campo nombre no puede quedar vacio.");
    }

    if(user.length == 0){
        alert("el campo usuario no puede quedar vacio.");
    }

   else if(user.length <= 3){
        alert("el nombre de usuario debe tener minimo 4 caracteres.");
        document.getElementById("user").value = "";
    }

    if(password.length == 0){
        alert("el campo contraseña no puede quedar vacio.");
    }
    

    else if(password.length <= 6){
        alert("la contraseña debe tener minimo 6 caracteres.")
        document.getElementById("password").value = "";
    }

}

