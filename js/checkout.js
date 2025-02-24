// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fLastN = document.getElementById("fLastN");
  var fEmail = document.getElementById("fEmail");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");
  var fAddress = document.getElementById("fAddress");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorLastN = document.getElementById("errorLastN");
  var errorEmail = document.getElementById("errorEmail");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");
  var errorAddress = document.getElementById("errorAddress");

  // Validate fields entered by the user: name, phone, password, and email
  if (fName.value.length < 3) {
    error++;
    fName.classList.add("is-invalid");
    errorName.style.display = "block";
  } else {
    fName.classList.remove("is-invalid");
    errorName.style.display = "none";
  }

  if (fLastN.value.length < 3) {
    error++;
    fLastN.classList.add("is-invalid");
    errorLastN.style.display = "block";
  } else {
    fLastN.classList.remove("is-invalid");
    errorLastN.style.display = "none";
  }

  if (fEmail.value.length < 3 || !fEmail.value.includes("@")) {
    error++;
    fEmail.classList.add("is-invalid");
    errorEmail.style.display = "block";
  } else {
    fEmail.classList.remove("is-invalid");
    errorEmail.style.display = "none";
  }

  if (fPassword.value.length < 4 || fPassword.value.length > 8) {
    error++;
    fPassword.classList.add("is-invalid");
    errorPassword.style.display = "block";
  } else {
    fPassword.classList.remove("is-invalid");
    errorPassword.style.display = "none";
  }

  if (fPhone.value.length !== 9 || isNaN(fPhone.value)) {
    error++;
    fPhone.classList.add("is-invalid");
    errorPhone.style.display = "block";
  } else {
    fPhone.classList.remove("is-invalid");
    errorPhone.style.display = "none";
  }

  if (fAddress.value.length < 3) {
    error++;
    fAddress.classList.add("is-invalid");
    errorAddress.style.display = "block";
  } else {
    fAddress.classList.remove("is-invalid");
    errorAddress.style.display = "none";
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
