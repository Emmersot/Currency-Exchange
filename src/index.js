import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import Exchange from './js/exchange.js';

function clearFields() {
  $('#base_code').text("");
  $('#target_code').text("");
  $('#showError').text("");
}

function getElements(response) {
  // if (response.conversion_rates["AUD"]) {
  if (response.conversion_rates[`${target_code}`]) {
    $('${target_code}').text(` ${response.conversion_rates['${amount}'].description}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(currency) {
  const response = await Exchange.getCurrency(currency);
  getElements(response);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    let base_code = $('#base_code').val();
    clearFields();
    makeApiCall(park);
  });
});