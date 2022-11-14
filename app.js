//  form the registeration form
const formE1 = document.getElementById('form');
const firstNameE1 = document.getElementById('First_Name');
const lastNameE1 = document.getElementById('Last_name');
const phoneNumberE1 = document.getElementById('phone_number');
const emailE1 = document.getElementById('email');
const passwordE1 = document.getElementById('password');
const registerE1 = document.getElementById('registerd');


// for the loggin form
const login = document.querySelector('.login');
const formSecond = document.getElementById('form_second');
const logEmailE1 = document.getElementById('log_email');
const logPasswordE1 = document.getElementById('log_password');


// welcome page
const welcome = document.querySelector('.welcome');


// for password generator
const upperLetters = 'ABCDEFGHIJKMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijkmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';



// registeration event listener
formE1.addEventListener('submit', (e) => {
    e.preventDefault();
    
    inputs()
    alert('YOU HVAE BEEN SUCCEFULLY REGISTERED')
    // adding the login page 
    login.classList.add('visible');
})


// input values of the registeration container
function inputs (){  
        const firstName = firstNameE1.value;
        const lastName = lastNameE1.value;
        const phoneNumber = phoneNumberE1.value;
        const email = emailE1.value;
        const password = passwordE1.value;
}


function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
};

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]

}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]

}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]

}

function generatePassword() {
    const len = 10;

    let password = " ";

    for(let i = password.length; i <= len; i++){
        const x = generateX();
        password += x;
    }

    passwordE1.value = password;
}

function generateX() {
    const xs = [];
        xs.push(getUpperCase())

        xs.push(getLowerCase())

        xs.push(getNumber())

        xs.push(getSymbol())

    return xs[Math.floor(Math.random() * xs.length)];
}

passwordE1.addEventListener('click', generatePassword);


// checking the logins if corresponding with the registeration form
function LoginChecker () {
    if ( emailE1.value  === document.getElementById('log_email').value && passwordE1.value === document.getElementById('log_password').value) {
        alert('YOU HAVE BEEN SUCCESSFULLY LOGGED')
        welcome.classList.add('visible');
    }else{
          alert('INVALID USERNAME OR PASSWORD')
     }
}