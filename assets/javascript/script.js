// therapies page - tabs

function openServices(serviceName) {
  var i;
  var x = document.getElementsByClassName("service");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(serviceName).style.display = "block";  
}