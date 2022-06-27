import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { kevToFahr } from './weather.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

   function getElements(response) {
      let temp = (response.main.temp);
      let showFahr = kevToFahr(temp);

      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      $('.showFahr').text(`The temperature in Fahrenheit is ` + showFahr + ` degrees.`);
      $('.showClouds').text(`The Clouds in ${city} is ${response.clouds.all}% coverage.`)
      $('.showTempMax').text(`The max temperature in Kelvins is ${response.main.temp_max} degrees.`);
      $('.showTempMin').text(`The min temperature in Kelvins is ${response.main.temp_min} degrees.`);
      $('.showSpeed').text(`The wind speed is ${response.wind.speed} mph.`);
      $('.showSunrise').text(`The sunrise will be at ${response.sys.sunrise}.`);
      $('.showSunset').text(`The sunset will be at ${response.sys.sunset}.`);
    }
  });
});