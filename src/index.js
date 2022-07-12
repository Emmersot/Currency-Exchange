import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import Exchange from './js/exchange.js';

function clearFields() {
  $('#setBaseCurrency').val("");
  $('#setCurrencyToExchange').val("");
  $('#showExchange').text("");
  $('#showError').text("");
}

function getElements(response) {
  // if (response.conversion_rates["AUD"]) {
  if (response.conversion_rates[`${currency}`]) {
    $('${currency}').text(` ${response.conversion_rates['${amount}'].description}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeAPICall(currency) {
  const response = await 
}