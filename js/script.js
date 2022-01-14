
const nombre = document.getElementById('name')
const correo = document.getElementById('email')
const pass = document.getElementById('password')
const form = document.getElementById('form')
const parrafo = document.getElementById('warnings')
const juego = document.getElementById('form__game')
const PASSWORD = '1234'

form.addEventListener('submit', e=>{
    e.preventDefault()
    let warnings = ''
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false
    parrafo.innerHTML = ''
    if(nombre.value.length <3){
        warnings += 'El nombre debe ser mayor a 3 caracteres <br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
        }
    if (pass.value != PASSWORD ){
        warnings += 'la contraseña no es correcta <br>'
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        setTimeout(() => {
            form.style.display = 'none';
            juego.style.display = 'block';
        }, 1000);
    }
})


///explain
