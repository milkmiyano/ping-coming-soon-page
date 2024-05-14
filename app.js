const emailField = document.getElementById("emailfield");
const emailError = document.getElementById("emailerror");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail() {
    if (emailField.value === "") {
        emailError.innerHTML = "";
        emailField.style.borderColor = "";
        return true; 
    } else if (emailField.value.match(emailRegex)) {
        emailError.innerHTML = "";
        emailField.style.borderColor = "";
        return true; 
    } else {
        emailError.style.color = "red";
        emailField.style.borderColor = "red"
        emailError.innerHTML = "<i>Please provide a valid email address</i>";
        return false; 
    }
}

emailField.addEventListener('keyup', validateEmail);

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  if (!validateEmail()) {
    event.preventDefault(); 
  }
});