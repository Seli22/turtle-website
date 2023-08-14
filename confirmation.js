const ticketInformation = JSON.parse(localStorage.getItem("Ticket"));
const personalDetails = JSON.parse(localStorage.getItem("Personal Details"));
const paymentDetails = JSON.parse(localStorage.getItem("Payment Details"));

var fullNameField = document.getElementById("paymentSummary_fullName");
fullNameField.innerHTML = personalDetails.fullName;

var countryField = document.getElementById("paymentSummary_country");
countryField.innerHTML = personalDetails.country;

var mobileNumberField = document.getElementById("paymentSummary_mobileNumber");
mobileNumberField.innerHTML = personalDetails.mobileNumber;

var emailField = document.getElementById("paymentSummary_email");
emailField.innerHTML = personalDetails.email;

var genderField = document.getElementById("paymentSummary_gender");
genderField.innerHTML = personalDetails.gender;

var dateField = document.getElementById("paymentSummary_date");
dateField.innerHTML = ticketInformation.date;

var timeField = document.getElementById("paymentSummary_time");
timeField.innerHTML = ticketInformation.time;

var normalHoursField = document.getElementById("normalHours");
normalHoursField.innerText = ticketInformation.normalHours;

var peakHoursField = document.getElementById("peakHours");
peakHoursField.innerText = ticketInformation.peakHours;

var totalHoursField = document.getElementById("totalHours");
totalHoursField.innerText = ticketInformation.totalHours;

var paymentSummary_sriLankanAdult_amount = document.getElementById(
  "paymentSummary_sriLankanAdult_amount"
);
paymentSummary_sriLankanAdult_amount.innerText =
  ticketInformation.amount.sriLankanAdult;

var paymentSummary_sriLankanChild_amount = document.getElementById(
  "paymentSummary_sriLankanChild_amount"
);
paymentSummary_sriLankanChild_amount.innerText =
  ticketInformation.amount.sriLankanChild;

var paymentSummary_foreignAdult_amount = document.getElementById(
  "paymentSummary_foreignAdult_amount"
);
paymentSummary_foreignAdult_amount.innerText =
  ticketInformation.amount.foreignAdult;

var paymentSummary_foreignChild_amount = document.getElementById(
  "paymentSummary_foreignChild_amount"
);
paymentSummary_foreignChild_amount.innerText =
  ticketInformation.amount.foreignChild;

var paymentSummary_foreignChild_amount = document.getElementById(
  "paymentSummary_foreignChild_amount"
);
paymentSummary_foreignChild_amount.innerText =
  ticketInformation.amount.foreignChild;

var paymentSummary_infant_totalAmount = document.getElementById(
  "paymentSummary_infant_totalAmount"
);
paymentSummary_infant_totalAmount.innerText = ticketInformation.totalAmount;

var sriLankanAdult_quantity = document.getElementById(
  "paymentSummary_sriLankanAdult"
);
sriLankanAdult_quantity.innerText = ticketInformation.sriLankanAdult;

var sriLankanChild_quantity = document.getElementById(
  "paymentSummary_sriLankanChild"
);
sriLankanChild_quantity.innerText = ticketInformation.sriLankanChild;

var paymentSummary_foreignerAdult_quantity = document.getElementById(
  "paymentSummary_foreignAdult"
);
paymentSummary_foreignerAdult_quantity.innerText =
  ticketInformation.foreignAdult;

var paymentSummary_foreignerChild_quantity = document.getElementById(
  "paymentSummary_foreignChild"
);
paymentSummary_foreignerChild_quantity.innerText =
  ticketInformation.foreignChild;

var paymentSummary_infant_quantity = document.getElementById(
  "paymentSummary_infant"
);
paymentSummary_infant_quantity.innerText = ticketInformation.infant;
