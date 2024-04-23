'use strict';
const user = {
  name: 'pepita',
  email: 'pepita@bit.institute',
  password: 'pepa123',
};

'use strict';
/* IMPORTS */
/* VARIABLES */
const d = document;

const $signUp = d.getElementById('signUp');

const credentials = {
  name: null,
  nameValid: null,
  email: null,
  emailValid: null,
  password: null,
  passwordValid: null,
  passwordConfirm: null,
  passwordConfirmValid: null,
};

let allowSubmit = false;

/* EVENTS */
d.addEventListener('DOMContentLoaded', () => {
  eventListeners();
});

/* FUNCTIONS */


/* Escucha los eventos  y selecciona el elemento NAME */
function eventListeners() {
  $signUp.name.addEventListener('input', () => {
    checkInput('name');
  });
  $signUp.name.addEventListener('blur', () => {
    checkInput('name');
  });

  $signUp.email.addEventListener('input', () => {
    checkInput('email');
  });
  $signUp.email.addEventListener('blur', () => {
    checkInput('email');
  });

  $signUp.password.addEventListener('input', () => {
    checkInput('password');
  });
  $signUp.password.addEventListener('blur', () => {
    checkInput('password');
  });



  $signUp.addEventListener('submit', handleSubmit);

  $signUp.inputState.addEventListener('input', () => {
    checkInput('inputState');
  });
}

function checkInput(inputName) {
  if (inputName === 'name') {
    const $nameWarning = d.getElementById('nameWarning');
    credentials.name = $signUp.name.value.trim();
    credentials.nameValid = false;
    if (credentials.name == '') {
      $nameWarning.textContent = 'Please, enter your name';
    } else {
      $nameWarning.textContent = '';
      if(credentials.name === 'pepita'){
        credentials.nameValid = true;
      }else{
        $nameWarning.textContent = 'nombre incorrecto';
      }
    }

  }
  if (inputName === 'email') {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const $emailWarning = d.getElementById('emailWarning');
    credentials.email = $signUp.email.value.trim();
    credentials.emailValid = false;
    if (credentials.email == '') {
      $emailWarning.textContent = 'ingrese un correo valido';
    } else if (!regExp.test(credentials.email)) {
      $emailWarning.textContent = 'ingrese un correo valido';
    } else {
      $emailWarning.textContent = '';
      if(credentials.email === 'pepita@bit.institute'){
        credentials.emailValid = true;
      }else{
        $emailWarning.textContent = 'correo incorrecto';
      }
  
    }
  }
  if (inputName === 'password') {
    const $passwordWarning = d.getElementById('passwordWarning');
    credentials.password = $signUp.password.value.trim();
    credentials.passwordValid = false;
    if (credentials.password == '') {
      $passwordWarning.textContent = 'Ingrese su contraseña por favor';
    } else {
      $passwordWarning.textContent = '';
      if(credentials.password === 'pepa123'){
        credentials.passwordValid = true;
      }else{
        $passwordWarning.textContent = 'contraseña incorrecta';
      }
      
    }
  }


  setAllowSubmit();
}

function setAllowSubmit() {
  allowSubmit =
    credentials.nameValid &&
    credentials.emailValid &&
    credentials.passwordValid 
  if (allowSubmit) {
    $signUp.submitButton.removeAttribute('disabled');
  } else {
    $signUp.submitButton.setAttribute('disabled', true);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (allowSubmit) {
    console.log('submit: ', {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    });
    console.log('send data to backend for processing');
    $signUp.reset();
    window.location.href =
      'http://127.0.0.1:5500/docs/ejemplos/vanilla/privado.html';
    /* window.location.replace(
      'http://127.0.0.1:5500/docs/ejemplos/vanilla/private.html'
    ); */
  } else {
    console.log('notify the user and do not allow sending data');
  }
}
/* CODE */
