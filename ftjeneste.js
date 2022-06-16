//Amanda//
//modalerne der åbner popups//
let fjernm = document.getElementById("fjernm");
let fjern = document.getElementsByClassName("fjern")[0];

//modalerne der lukker popups//
let nej = document.getElementById("nej");
let fjern2 = document.getElementById("fjern2");
let ja = document.getElementById("ja");
let ok2 = document.getElementById("ok2");

fjern.onclick = function() {
  fjernm.style.display = "block";
}

nej.onclick = function() {
  fjernm.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == fjernm) {
    fjernm.style.display = "none";
  }
}

//2nd modal//
ja.onclick = function() {
  fjern2.style.display = "block";
}

ok2.onclick = function() {
  fjern2.style.display = "none"
  fjernm.style.display = "none";
}
