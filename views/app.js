
function saveUsername(){
    const username= document.getElementById('username').value;
    sessionStorage.setItem('username',username);
    alert('Nombre de usuario guardado en SessionStorage');
}

function loadUsername(){
    const storedUsername = sessionStorage.getItem('username');
    const usernameDisolay = document.getElementById('username-display');

    if(storedUsername){
        usernameDisolay.textContent = `Nombre de usuario almacenado: ${storedUsername}`;

    }else{
        usernameDisolay.textContent = 'No hay nombre de usuario almacenado';
    }
}