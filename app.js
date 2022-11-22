const registerationForm = document.getElementById('form_registeration');
const registerationFirstname = document.getElementById('first_name');
const registerationLastname = document.getElementById('last_name');
const registerationNumber = document.getElementById('phone_number');
const registerationEmail = document.getElementById('email');
const registerationPassword = document.getElementById('password');
const registerationButton = document.getElementById('registeration_btn');

const loginSection = document.querySelector('.login');
const loginForm = document.getElementById('login_form');
const loginEmail = document.getElementById('log_email');
const loginPassword = document.getElementById('log_password');
const loginButton = document.getElementById('login_btn')

const welcomeSection = document.querySelector('.welcome');



const randomCharacters = 'ABC!@#$%^&*()_+=DEFGHIJKMabcdefghij0123456789kmnopqrstuvwxyzNOPQRSTUVWXYZ';


registerationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    registerationCharacter
    alert('YOU HVAE BEEN SUCCEFULLY REGISTERED')
    // adding the login page 
    loginSection.classList.add('visible');
})



const registerationCharacter = {
    firstName: registerationFirstname.value,
    lastName: registerationLastname.value,
    number: registerationNumber.value,
    email: registerationEmail.value,
    passWord: registerationPassword.value
}

localStorage.setItem("registerationCharacter", JSON.stringify(registerationCharacter));
    
JSON.parse(localStorage.getItem("registerationCharacter"));




const getRandomLowerCase = () => {
    console.log(randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length)));
};

const generatePassword = () => {
    const lengthOfPassword = 10;

    let password = "";

    for(let i = 1; i <= lengthOfPassword; i++){
        const randomString = getRandomLowerCase();
        password += randomString;
    }

    registerationPassword.value = password;

}



registerationPassword.addEventListener('click', generatePassword);


loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if ( registerationEmail.value  === loginEmail.value && registerationPassword.value === loginPassword.value) {
        alert('YOU HAVE BEEN SUCCESSFULLY LOGGED')
        welcomeSection.classList.add('visible');
    }else{
          alert('INVALID USERNAME OR PASSWORD')
     }

})


