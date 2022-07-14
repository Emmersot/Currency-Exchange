import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import exchange from './js/exchange.js';

function clearFields() {
  $('#conversion').val("");
  $('#target_code').text("");
}

function getElements(response) {
  // if (response.conversion_rates["AUD"]) {
  if (response.result === "success") {
    console.log(response);
    $('#showConversion').text(` ${response.conversion_rate}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(target_code) {
  const response = await exchange.getCurrency(target_code);
  console.log();
  getElements(response);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    event.preventDefault();
    let target_code = $('#target_code').val();
    makeApiCall(target_code);
    clearFields();
  });
});