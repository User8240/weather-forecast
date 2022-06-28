import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js';
import { kevToFahr } from './weather.js';

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
  $('.showFahr').text("");
  $('.showClouds').text("");
  $('.showTempMax').text("");
  $('.showTempMin').text("");
  $('.showSpeed').text("");
  $('.showSunrise').text("");
  $('.showSunset').text("");
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    clearFields();
    let promise = WeatherService.getWeather(city);
    promise.then(function(response) {
      const body = JSON.parse(response);
      let temp = (body.main.temp);
      let showFahr = kevToFahr(temp);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
      $('.showErrors').text("");
      //My code is added below
      $('.showFahr').text(`The temperature in Fahrenheit is ` + showFahr + ` degrees.`);
      $('.showClouds').text(`The Clouds in ${city} is ${body.clouds.all}% coverage.`)
      $('.showTempMax').text(`The max temperature in Kelvins is ${body.main.temp_max} degrees.`);
      $('.showTempMin').text(`The min temperature in Kelvins is ${body.main.temp_min} degrees.`);
      $('.showSpeed').text(`The wind speed is ${body.wind.speed} mph.`);
      $('.showSunrise').text(`The sunrise will be at ${body.sys.sunrise}.`);
      $('.showSunset').text(`The sunset will be at ${body.sys.sunset}.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});

  //  function getElements(response) {
      // let temp = (response.main.temp);
      // let showFahr = kevToFahr(temp);

  //     $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
  //     $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      // $('.showFahr').text(`The temperature in Fahrenheit is ` + showFahr + ` degrees.`);
      // $('.showClouds').text(`The Clouds in ${city} is ${response.clouds.all}% coverage.`)
      // $('.showTempMax').text(`The max temperature in Kelvins is ${response.main.temp_max} degrees.`);
      // $('.showTempMin').text(`The min temperature in Kelvins is ${response.main.temp_min} degrees.`);
      // $('.showSpeed').text(`The wind speed is ${response.wind.speed} mph.`);
      // $('.showSunrise').text(`The sunrise will be at ${response.sys.sunrise}.`);
      // $('.showSunset').text(`The sunset will be at ${response.sys.sunset}.`);
  //   }
//   });
// });