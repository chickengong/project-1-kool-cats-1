$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var phoneNumber = document.getElementById("phone");
var zipCode = document.getElementById("zip-code");
var submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  var signUp = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    zipCode: zipCode.value,
  };

  localStorage.setItem("signUp", JSON.stringify(signUp));
  signUpSave();
});
function signUpSave() {
  var showText = JSON.parse(localStorage.getItem("signUp"));

  if (showText !== null) {
    document.querySelector(".response").textContent =
      "we will give you a call!";
  }
}




// // const carousels = bulmaCarousel.attach('.carousel', options);
// // Loop on each carousel initialized
// for(var i = 0; i < carousels.length; i++) {
// 	// Add listener to  event
// 	carousels[i].on('before:show', state => {
// 		console.log(state);
// 	});
// }

// // Access to bulmaCarousel instance of an element
// var element = document.querySelector('#my-element');
// if (element && element.bulmaCarousel) {
// 	// bulmaCarousel instance is available as element.bulmaCarousel
// 	element.bulmaCarousel.on('before-show', function(state) {
// 		console.log(state);
// 	});
// }