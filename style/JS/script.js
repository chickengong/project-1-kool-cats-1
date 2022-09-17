// initialize carousel
bulmaCarousel.attach("#carousel-demo", {
  slidesToScroll: 1,
  slidesToShow: 3,
  loop: true,
});

// this function to save in local story
function populateRegisterInfo() {
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var equipment = document.getElementById("equipment");

  var registerInfo = {
    name: name.value.trim(),
    phone: phone.value.trim(),
    email: email.value.trim(),
    equipment: equipment.value.trim(),
  };
  localStorage.setItem("registerInfo", JSON.stringify(registerInfo));
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("equipment").value = "";
}
// set to local story and display as object with Json and convert it as string/JS
function displayInfo() {
  var registerInfo = JSON.parse(localStorage.getItem("registerInfo"));
  // to put those infor after the submit btn is click
  if (registerInfo !== null) {
    document.getElementById("saved-name").innerHTML = registerInfo.name;
    document.getElementById("saved-phone").innerHTML = registerInfo.phone;
    document.getElementById("saved-email").innerHTML = registerInfo.email;
    document.getElementById("saved-equipment").innerHTML =
      registerInfo.equipment;
  } else {
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll("#submit-btn") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      populateRegisterInfo();
      displayInfo();

      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
      resetForm();
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
      resetForm();
    }
  });
});

var api_token = ""

$.ajax({
  async: true,
  crossDomain: true,
  url: "https://sagenda.net/api/v3/token",
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
  data: {
    grant_type: "api_token",
    api_token: "a075eba83d7c4f47ab0fffa234dc9505",
  },
})
  .then(function (response) {
    console.log(response);
    return (api_token = response.access_token);
  })
  .then(function (response) {
    $.ajax({
      async: true,
      crossDomain: true,
      url: "https://sagenda.net/api/v3/bookableItems",
      method: "GET",
      headers: {
        Authorization: "Bearer " + response,
      },
    }).done(function (response) {
      console.log(response);
    });
  });
