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
