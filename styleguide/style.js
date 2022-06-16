//Lynge
function showhide(elem){
    let el = elem.parentElement.getElementsByTagName("div")[1];
    if(el.style.display == "none"){
        el.style.display = "grid";
    }else{
        el.style.display = "none";
    }
    let arrow = elem.getElementsByTagName("p")[1];
    if(arrow.innerHTML == "▽"){
        arrow.innerHTML = "△";
    }else{
        arrow.innerHTML = "▽";
    }
}