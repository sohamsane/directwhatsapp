function length(){
  var countrySelected = ((document.getElementById('country-id').value).length) * 11 + "px"
  document.getElementById('country-id').style.width = countrySelected;
}

window.setInterval(function(){
  length();
}, 1)

function removePlaceHolder() {
  document.getElementById('number-input').placeholder = "";
}

function addPlaceHolder() {
  document.getElementById('number-input').placeholder = "Phone Number";
}

function submission() {
  var code = document.getElementById('country-id').value;
  var number = document.getElementById('number-input').value;
  code = code.replace(/\D/g, '');
  var link = "https://wa.me/" +code+number;
  window.location.href = link;
  console.log(link);
}
