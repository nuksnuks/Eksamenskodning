function clear(){
  localStorage.clear();
  window.location.reload(); 
}

document.getElementById("clear").addEventListener("click", clear);
