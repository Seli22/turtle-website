//-----------------------tickets.html------------------------------------//

// [1.] Save - Date Input
const dateInput = document.getElementById("date");
dateInput.addEventListener("change", function () {
  const selectedDate = dateInput.value;
  localStorage.setItem("date", selectedDate);
});

// [2.] Save - Time Duration Input
const timeDurationInput = document.getElementById("timeDuration");
timeDurationInput.addEventListener("change", function () {
  const selectedTimeDuration = timeDurationInput.value;
  localStorage.setItem("time-slot", selectedTimeDuration);
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  localStorage.setItem(input.id, value);
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 0) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    localStorage.setItem(input.id, value);
  }
}

function calculateTotal() {
  var date = document.getElementById("date").value;
  var time = document.getElementById("timeDuration").value;

  var foreignAdult = parseInt(document.getElementById("inputField1").value);
  var foreignChild = parseInt(document.getElementById("inputField2").value);
  var slAdult = parseInt(document.getElementById("inputField3").value);
  var slChild = parseInt(document.getElementById("inputField4").value);
  var infant = parseInt(document.getElementById("inputField5").value);

  var foreignAdultpeak = parseInt(document.getElementById("inputField1").value);
  var foreignChildpeak = parseInt(document.getElementById("inputField2").value);
  var slAdultpeak = parseInt(document.getElementById("inputField3").value);
  var slChildpeak = parseInt(document.getElementById("inputField4").value);

  var totalPayable = foreignAdult * 10;
  var totalPayable = foreignChild * 05;
  var totalPayable = slAdult * 04;
  var totalPayable = slChild * 02;
  var totalPayable = infant * 00;

  var totalPayable = foreignAdultpeak * 13;
  var totalPayable = foreignChildpeak * 08;
  var totalPayable = slAdultpeak * 06;
  var totalPayable = slChildpeak * 03;

  var tbody = document.getElementById("tbody_update");
  tbody.innerHTML = "";
  var newRow = document.createElement("tr");
  newRow.innerHTML = `
        <th>Date</th>
        <td>${date}</td>
      `;
  tbody.appendChild(newRow);

  newRow = document.createElement("tr");
  newRow.innerHTML = `
        <th>Time</th>
        <td>${time}</td>
      `;
  tbody.appendChild(newRow);

  // Add rows for other details (Duration, Tickets, Charges)

  newRow = document.createElement("tr");
  newRow.innerHTML = `
        <th>Total Payable</th>
        <td>$${totalPayable}</td>
      `;
  tbody.appendChild(newRow);

  document.getElementById("totalPayable").textContent = `$${totalPayable}`;
}

//----------------------------details.html------------------------------//

const form = document.getElementById("booking-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = form.elements["full-name"].value;
  const mobileNumber = form.elements["mobile-number"].value;
  const email = form.elements["email"].value;
  const confirmEmail = form.elements["confirm-email"].value;
  const gender = form.elements["gender"].value;

  const formData = {
    fullName: fullName,
    mobileNumber: mobileNumber,
    email: email,
    confirmEmail: confirmEmail,
    gender: gender,
  };

  if (!fullName || !mobileNumber || !email || !confirmEmail || !gender) {
    alert("Please fill in all fields");
    if (email !== confirmEmail) {
      alert("Email and Confirm Email do not match!");
    }
  } else {
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem("booking-form", formDataJSON);
    alert("Form submitted successfully!");
  }
});

//----------------------------payment.html------------------------------//

const form = document.getElementById("paying-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const cardName = form.elements["card-name"].value;
  const cardNumber = form.elements["card-number"].value;
  const expiryDate = form.elements["expiry-date"].value; // Corrected field name to lowercase "expiry-date"
  const cvc = form.elements["cvc"].value;

  if (!cardName || !cardNumber || !expiryDate || !cvc) {
    alert("Please fill in all fields");
  } else {
    const formData = {
      cardName: cardName,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvc: cvc,
    };

    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem("paying-form", formDataJSON);
    alert("Form submitted successfully!");
  }
});

//---------------------------confirmation.html------------------------------------//
