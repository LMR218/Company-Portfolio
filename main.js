
document.getElementById("submitForm").addEventListener("click", function() {



const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("messegeInputField").value;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
const nameRegex = /^[a-zA-Z ]{2,}$/;


 // #VALIDATION  

let isValid = true;

// ##validate name

if (!nameRegex.test(name)) {
    document.getElementById("nameError").textContent = "Name is not Valid!";
    isValid = false;
} else {
    document.getElementById("nameError").textContent = "";
};



//  ##validate email

if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Email is not Valid!";
    isValid = false;
} else {
    document.getElementById("emailError").textContent = "";
};


// ##validate message

if (message.trim() === '') {
    document.getElementById("messegeError").textContent = "Message cannot be empty!";
    isValid = false;
} else {
    document.getElementById("messegeError").textContent = "";
    console.log("valid messege");
}

if (isValid) {
    alert("Form submitted successfully!");
}

});