//object creation
var circleAndSphere = {
  radius: 1,
  calcCircumference: function() {
    return Math.PI * radius * 2;
  },
  calcArea: function() {
    return Math.PI * radius * radius;
  },
  calcVolume: function() {
    return (4 / 3) * Math.PI * radius * radius * radius;
  }
};


//
document.GetElementById("circle").addEventListener("blur", checkCircle, false);
document.GetElementById("submit").addEventListener("click", checkCircle, false);

function checkCircle() {
  var userRadius = document.getElementById("circle").value;
}

if (isNaN(userRadius)) {
  document.getElementById("results").innerHTML = "<p>Sorry, you did not enter a value</p>";
} else if (userRadius <= 0) {
  document.getElementById("results").innerHTML = "<p>Sorry, you did not enter a value</p>";
} else{
  document.getElementById("results").innerHTML = "The results for a radius of" + "are" + calcCircumference + <br> + calcArea + <br> + calcVolume;
}
