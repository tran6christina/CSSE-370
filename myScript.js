function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
  
function changeText(text) {
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = text;
}
  
function changeback(text) {
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = text;
}

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f7a39c86c2a943f0fedd73d12f0ae2ff')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = Math.round((tempValue - 273.15) * (9/5) + 32) + '°F';
        desc.innerHTML = descValue;
    })

    .catch(err => alert("City Not Found"))
})
