knap = document.getElementById("logud");

function logOut(){
 localStorage.clear();
 sessionStorage.clear();
}

knap.addEventListener("click", logOut)
