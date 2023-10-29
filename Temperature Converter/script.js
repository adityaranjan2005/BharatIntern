function convertTemperature() {
    var celsiusInput = document.getElementById("celsius").value;
    var celsius = parseFloat(celsiusInput);
  
    if (!isNaN(celsius)) {
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("result").innerText = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit.";
    } else {
      document.getElementById("result").innerText = "Please enter a valid temperature.";
    }
  }
  
