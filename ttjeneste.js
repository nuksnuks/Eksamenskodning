//Amanda//
//modalerne der åbner popups//
let ttprofil = document.getElementById("ttprofil");
let tilfoej = document.getElementById("tilfoej");
let tkonto = document.getElementById("tkonto");
//modalerne der lukker popups//
let luk = document.getElementById("luk");
let ttjeneste = document.getElementById("ttjeneste");

tilfoej.onclick = function () {
  ttprofil.style.display = "flex";
}
luk.onclick = function() {
  ttprofil.style.display = "none";
}
ttjeneste.onclick = function() {

  let inputs = ["inname", "inprice", "intag"];
  if(document.getElementById(inputs[0]).value !== "" && document.getElementById(inputs[1]).value !== "" && document.getElementById(inputs[2]).value !== ""){
    ttprofil.style.display = "none";
    let tjeninfo = [];
    for(let i = 0; i < inputs.length; i++){
      let added = document.getElementById(inputs[i]).value
      tjeninfo.push(added);
    }
    localStorage.setItem("tname", tjeninfo[0]);
    localStorage.setItem("tprice", tjeninfo[1]);
    localStorage.setItem("ttag", tjeninfo[2]);
    addbox();
  }else{
    alert("inputs needed")
  }

}
