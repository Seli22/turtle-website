// Empty object for saving user inputs
const ticketInformation = {
  date: "",
  time: ["7 AM - 8 AM"],
  foreignAdult: 0,
  foreignChild: 0,
  sriLankanAdult: 0,
  sriLankanChild: 0,
  infant: 0,
  normalHours: 1,
  peakHours: 0,
  totalHours: 1,
};

// Pushed default ticketInformation object to local storage
localStorage.setItem("Ticket", JSON.stringify(ticketInformation));

// Save current date to the ticketInformation object
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, "0");
var day = String(currentDate.getDate()).padStart(2, "0");
var formattedDate = year + "-" + month + "-" + day;
ticketInformation.date = formattedDate;

// Select current date as default in date input
var dateInput = document.getElementById("ticketForm_dateInput");
dateInput.value = ticketInformation.date;

// Show current date to the payment summary field
window.addEventListener("load", () => {
  var dateField = document.getElementById("paymentSummary_date");
  dateField.innerHTML = JSON.parse(localStorage.getItem("Ticket")).date;
});

// Pushed default ticketInformation object to local storage
localStorage.setItem("Ticket", JSON.stringify(ticketInformation));

// Save - Date Input
function getDate() {
  const dateInput = document.getElementById("ticketForm_dateInput");
  ticketInformation.date = dateInput.value;
  localStorage.setItem("Ticket", JSON.stringify(ticketInformation));

  // At the same time we are showing this stored date to payment summary table
  var dateField = document.getElementById("paymentSummary_date");
  dateField.innerHTML = JSON.parse(localStorage.getItem("Ticket")).date;
}

// Save - Time Duration Input
const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");
const btnText = document.querySelector("#paymentSummary_timeInput");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
  calculateHours();
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checkedItems = document.querySelectorAll(".checked");
    let selectedItemsArray = Array.from(checkedItems).map(
      (item) => item.querySelector(".item-text").textContent
    );
    let selectedItemsText = selectedItemsArray.join(" , ");

    if (selectedItemsArray.length > 0) {
      btnText.innerText = selectedItemsText;
    } else {
      btnText.innerText = "Select Time Slots"; // Set the default placeholder text
    }
    calculateHours();

    ticketInformation.time = selectedItemsArray;
    localStorage.setItem("Ticket", JSON.stringify(ticketInformation));

    var timeField = document.getElementById("paymentSummary_time");
    timeField.innerHTML = JSON.parse(localStorage.getItem("Ticket")).time;
  });
  calculateHours();
});

// On page load, set the default placeholder text
window.addEventListener("load", () => {
  let checkedItems = document.querySelectorAll(".checked");
  let selectedItemsArray = Array.from(checkedItems).map(
    (item) => item.querySelector(".item-text").textContent
  );
  let selectedItemsText = selectedItemsArray.join(" , ");

  if (selectedItemsArray.length > 0) {
    btnText.innerText = selectedItemsText;
  } else {
    btnText.innerText = "Select Time Slots"; // Set the default placeholder text
  }
});

function getTime() {
  // At the same time we are showing this stored time to payment summary table
  var timeField = document.getElementById("paymentSummary_timeInput");
  timeField.innerHTML = JSON.parse(localStorage.getItem("Ticket")).time;
}
// Show current time to the payment summary field
var timeField = document.getElementById("paymentSummary_time");
timeField.innerHTML = JSON.parse(localStorage.getItem("Ticket")).time;

// Quantity
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  ticketInformation[input.id] = value;
  localStorage.setItem("Ticket", JSON.stringify(ticketInformation));

  const incrementBtn = document.querySelector(
    ".ticketForm_quantity_input_selector_increment"
  );
  incrementBtn.addEventListener("click", () => {
    calculateHours();
  });

  var sriLankanAdult_quantity = document.getElementById(
    "paymentSummary_sriLankanAdult"
  );
  sriLankanAdult_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).sriLankanAdult;

  var sriLankanChild_quantity = document.getElementById(
    "paymentSummary_sriLankanChild"
  );
  sriLankanChild_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).sriLankanChild;

  var paymentSummary_foreignerAdult_quantity = document.getElementById(
    "paymentSummary_foreignAdult"
  );
  paymentSummary_foreignerAdult_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).foreignAdult;

  var paymentSummary_foreignerChild_quantity = document.getElementById(
    "paymentSummary_foreignChild"
  );
  paymentSummary_foreignerChild_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).foreignChild;

  var paymentSummary_infant_quantity = document.getElementById(
    "paymentSummary_infant"
  );
  paymentSummary_infant_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).infant;
}
function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 0) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    ticketInformation[input.id] = value;
    localStorage.setItem("Ticket", JSON.stringify(ticketInformation));

    var sriLankanAdult_quantity = document.getElementById(
      "paymentSummary_sriLankanAdult"
    );
    sriLankanAdult_quantity.innerText = JSON.parse(
      localStorage.getItem("Ticket")
    ).sriLankanAdult;

    var sriLankanChild_quantity = document.getElementById(
      "paymentSummary_sriLankanChild"
    );
    sriLankanChild_quantity.innerText = JSON.parse(
      localStorage.getItem("Ticket")
    ).sriLankanChild;

    var paymentSummary_foreignerAdult_quantity = document.getElementById(
      "paymentSummary_foreignAdult"
    );
    paymentSummary_foreignerAdult_quantity.innerText = JSON.parse(
      localStorage.getItem("Ticket")
    ).foreignAdult;

    var paymentSummary_foreignerChild_quantity = document.getElementById(
      "paymentSummary_foreignChild"
    );
    paymentSummary_foreignerChild_quantity.innerText = JSON.parse(
      localStorage.getItem("Ticket")
    ).foreignChild;

    var paymentSummary_infant_quantity = document.getElementById(
      "paymentSummary_infant"
    );
    paymentSummary_infant_quantity.innerText = JSON.parse(
      localStorage.getItem("Ticket")
    ).infant;
  }
}
// Calculating Hours
function calculateHours() {
  var selectedHours = JSON.parse(localStorage.getItem("Ticket")).time;
  var normalHours = 0;
  var peakHours = 0;
  selectedHours.forEach((item) => {
    if (
      item == "10 AM - 11 AM" ||
      item == "11 AM - 12 PM" ||
      item == "12 PM - 1 PM" ||
      item == "3 PM - 4 PM" ||
      item == "4 PM - 5 PM" ||
      item == "5 PM - 6 PM"
    ) {
      peakHours++;
    } else {
      normalHours++;
    }
  });
  var normalHoursField = document.getElementById("normalHours");
  normalHoursField.innerText = normalHours;

  var peakHoursField = document.getElementById("peakHours");
  peakHoursField.innerText = peakHours;

  var totalHoursField = document.getElementById("totalHours");
  totalHoursField.innerText = peakHours + normalHours;

  ticketInformation.normalHours = normalHours;
  ticketInformation.peakHours = peakHours;
  ticketInformation.totalHours = peakHours + normalHours;

  localStorage.setItem("Ticket", JSON.stringify(ticketInformation));

  var price = {
    foreignAdultNormal: 10,
    foreignChildNormal: 5,
    sriLankanAdultNormal: 4,
    sriLankanChildNormal: 2,

    foreignAdultPeak: 13,
    foreignChildPeak: 8,
    sriLankanAdultPeak: 6,
    sriLankanChildPeak: 3,

    infantPrice: 0,
  };

  var amount = {
    foreignAdult: 0,
    foreignChild: 0,
    sriLankanAdult: 0,
    sriLankanChild: 0,
    infantPrice: 0,
  };

  amount.foreignAdult +=
    ticketInformation.foreignAdult *
    ticketInformation.normalHours *
    price.foreignAdultNormal;

  amount.foreignAdult +=
    ticketInformation.foreignAdult *
    ticketInformation.peakHours *
    price.foreignAdultPeak;

  amount.foreignChild +=
    ticketInformation.foreignChild *
    ticketInformation.normalHours *
    price.foreignChildNormal;

  amount.foreignChild +=
    ticketInformation.foreignChild *
    ticketInformation.peakHours *
    price.foreignChildPeak;

  amount.sriLankanAdult +=
    ticketInformation.sriLankanAdult *
    ticketInformation.normalHours *
    price.sriLankanAdultNormal;

  amount.sriLankanAdult +=
    ticketInformation.sriLankanAdult *
    ticketInformation.peakHours *
    price.sriLankanAdultPeak;

  amount.sriLankanChild +=
    ticketInformation.sriLankanChild *
    ticketInformation.normalHours *
    price.sriLankanChildNormal;

  amount.sriLankanChild +=
    ticketInformation.sriLankanChild *
    ticketInformation.peakHours *
    price.sriLankanChildPeak;

  let totalAmount = 0;

  for (const key in amount) {
    if (amount.hasOwnProperty(key)) {
      totalAmount += amount[key];
    }
  }

  ticketInformation.amount = amount;
  ticketInformation.totalAmount = totalAmount;

  localStorage.setItem("Ticket", JSON.stringify(ticketInformation));

  var paymentSummary_sriLankanAdult_amount = document.getElementById(
    "paymentSummary_sriLankanAdult_amount"
  );
  paymentSummary_sriLankanAdult_amount.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).amount.sriLankanAdult;

  var paymentSummary_sriLankanChild_amount = document.getElementById(
    "paymentSummary_sriLankanChild_amount"
  );
  paymentSummary_sriLankanChild_amount.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).amount.sriLankanChild;

  var paymentSummary_foreignAdult_amount = document.getElementById(
    "paymentSummary_foreignAdult_amount"
  );
  paymentSummary_foreignAdult_amount.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).amount.foreignAdult;

  var paymentSummary_foreignChild_amount = document.getElementById(
    "paymentSummary_foreignChild_amount"
  );
  paymentSummary_foreignChild_amount.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).amount.foreignChild;

  var paymentSummary_foreignChild_amount = document.getElementById(
    "paymentSummary_foreignChild_amount"
  );
  paymentSummary_foreignChild_amount.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).amount.foreignChild;

  var paymentSummary_infant_totalAmount = document.getElementById(
    "paymentSummary_infant_totalAmount"
  );
  paymentSummary_infant_totalAmount.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).totalAmount;

  var sriLankanAdult_quantity = document.getElementById(
    "paymentSummary_sriLankanAdult"
  );
  sriLankanAdult_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).sriLankanAdult;

  var sriLankanChild_quantity = document.getElementById(
    "paymentSummary_sriLankanChild"
  );
  sriLankanChild_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).sriLankanChild;

  var paymentSummary_foreignerAdult_quantity = document.getElementById(
    "paymentSummary_foreignAdult"
  );
  paymentSummary_foreignerAdult_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).foreignAdult;

  var paymentSummary_foreignerChild_quantity = document.getElementById(
    "paymentSummary_foreignChild"
  );
  paymentSummary_foreignerChild_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).foreignChild;

  var paymentSummary_infant_quantity = document.getElementById(
    "paymentSummary_infant"
  );
  paymentSummary_infant_quantity.innerText = JSON.parse(
    localStorage.getItem("Ticket")
  ).infant;
}
calculateHours();

// var Ticket = localStorage.getItem("Ticket");
