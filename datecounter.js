knap = document.getElementById("knap");
idag = document.getElementById("idag");

function calc(){
  let bar = document.getElementById("progress-bar");
  let text = document.getElementById("datop");

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let month = document.getElementById("month").value;
  let dato = document.getElementById("dato1").value;
  let year = document.getElementById("year").value;
  let i = month - 1;

  let dateFull = months[i] + " " + dato + " " + year; // omdanner til dato f.eks. Jan 1 2022
  let betalDato = new Date(dateFull).getTime() - 1639872000000; // 1639872000000 er 52 år i millisekunder siden 1. jan 1970: 52 år * 365 dage * 24 timer * 60 minutter * 60 sekunder * 1000 millisekunder;
  let nu = new Date().getTime() - 1639872000000;

  let difference = nu / betalDato * 100;
  localStorage.setItem("betalDato", dateFull);

  if (difference >= 100){
    bar.style.width = 100 + "%";
    bar.innerHTML = "Overskredet d. " + dato + ". "+ months[i] + ". " + year;
    text.innerHTML = "Betales d. " + dato + ". "+ months[i] + ". " + year;
    localStorage.setItem("betalDato", dateFull);
  }
  else{
    localStorage.clear();
    bar.style.width = parseInt(difference) + "%";
    bar.innerHTML =  "Betalings dato: <br>" + dato + ". "+ months[i] + ". " + year + "<br>" + parseInt(difference)+ "%";
    text.innerHTML = "Betales d. " + dato + ". "+ months[i] + ". " + year;
    localStorage.setItem("betalDato", dateFull);
    };
};

knap.addEventListener("click", calc);

function iDag(){
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let iD = new Date();
  let dagsDato = iD.getDate();
  let maaned = iD.getMonth();
  let i = maaned;
  let aar = iD.getYear() + 1900;
  document.getElementById("dato1").value = dagsDato;
  document.getElementById("month").value = maaned + 1;
  document.getElementById("year").value = aar;
  let dateFull = months[i] + " " + dagsDato + " " + aar;
  localStorage.setItem("betalDato", dateFull);
};
idag.addEventListener("click", iDag);
idag.addEventListener("click", calc);
