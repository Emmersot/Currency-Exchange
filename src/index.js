import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import exchange from './js/exchange.js';

function clearFields() {
  $('#conversion').val("");
  $('#target_code').text("");
  $('#showConversion').text("");
  $('.showErrors').text("");
  $('#base_code').text("");
}

function getElements(response) {
  if (response.result === "success") {
    $('#showConversion').text(`Your 1 ${response.base_code} is worth ${response.conversion_rate} ${response.target_code}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(target_code, base_code) {
  const response = await exchange.getCurrency(target_code, base_code);
  getElements(response, target_code, base_code);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    event.preventDefault();
    let target_code = $('#target_code').val();
    let base_code = $('#base_code').val();
    clearFields();
    makeApiCall(target_code, base_code);
    $('#showConversion').show();
    $('.showErrors').show();

  });
});