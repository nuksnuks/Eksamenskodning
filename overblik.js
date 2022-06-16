//lynge
var elems = document.getElementsByClassName("box");
for(let i = 0; i < elems.length; i++)
{
  fixtag(elems[i]);
}

function fixtag(elem){
    cl = elem.classList;
    tagbox = elem.getElementsByTagName("div")[2];
    tagbox.innerHTML = "";
    for(let i = 1; i < cl.length; i++){
        tagbox.innerHTML += "<div class='tag smalltext'>" + cl[i] + "</div>";
    }
}

function exfixtag(elem){
    box = elem.parentElement.getElementsByTagName("div")[0];
    boxtags = box.classList;
    elem.className = "expandbox";
    for(let i = 1; i < boxtags.length; i++){
        elem.classList.add(boxtags[i]);
    }

    let textname = box.getElementsByClassName("name")[0].innerHTML;
    elem.getElementsByClassName("namebox")[0].innerHTML = "<h3>" + textname + "<h3>";
    let textprice = box.getElementsByClassName("price")[0].innerHTML;
    elem.getElementsByClassName("price")[0].innerHTML = textprice;

    cl = elem.classList;
    tagbox = elem.getElementsByTagName("div")[5];
    tagbox.innerHTML = "";
    for(let i = 1; i < cl.length; i++){
        tagbox.innerHTML += "<div class='tag smalltext'>" + cl[i] + "</div>";
    }
}

function filter(){
    let filval = document.getElementById("filter").value;
    let boxes = document.getElementsByClassName("box");
    if(filval !== ""){
        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.display = "none";
        }
        let toshow = document.getElementsByClassName(filval);
        for(let i = 0; i < toshow.length; i++){
            toshow[i].style.display = "grid";
        }
    }else{
        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.display = "grid";
        }
    }
    let ebs = document.getElementsByClassName("expandbox");
    for(let i = 0; i < ebs.length; i++){
        ebs[i].style.display = "none";
    }
}

let alltags = [];
function updatetags(){
    let boxes = document.getElementsByClassName("box");

    for(let i = 0; i < boxes.length; i++){
        let tags = boxes[i].classList;
        for(let i = 1; i < tags.length; i++){
            if(!alltags.includes(tags[i])){
                alltags.push(tags[i]);
            }
        }
    }
    let options = document.getElementById("tags");
    options.innerHTML = "";
    for(let i = 0; i < alltags.length; i++){
        options.innerHTML += "<option value='" + alltags[i] + "'>";
    }
}

function expand(elem) {
    if(elem.classList[0] == "box"){
        let eb = elem.parentElement.getElementsByClassName("expandbox")[0];
        exfixtag(eb);
        elem.style.display = "none";
        eb.style.display = "grid";
    }else{
        let eb = elem.parentElement.parentElement;
        let box = eb.parentElement.getElementsByClassName("box")[0];
        eb.style.display = "none";
        box.style.display = "grid";
    }
}

function addbox(){
    let all = document.getElementById("allbox");
    let hid = document.getElementById("hidden");

    let name = localStorage.getItem("tname");
    let price = localStorage.getItem("tprice");
    let tag = localStorage.getItem("ttag");

    if(localStorage.getItem("tlongn") !== null){
        var longn = localStorage.getItem("tlongn") + "," + name;
        var longp = localStorage.getItem("tlongp") + "," + price;
        var longt = localStorage.getItem("tlongt") + "," + tag;
    }
    else{
        var longn = name;
        var longp = localStorage.getItem("tlongp") + "," + price;
        var longt = tag;
    }

    localStorage.setItem("tlongn", longn);
    localStorage.setItem("tlongp", longp);
    localStorage.setItem("tlongt", longt);

    hid.getElementsByClassName("name")[0].innerHTML = name;
    hid.getElementsByClassName("price")[0].innerHTML = price + " kr.";
    hid.getElementsByClassName("box")[0].classList = "box";
    hid.getElementsByClassName("box")[0].classList.add(tag);
    let toadd = hid.innerHTML;
    all.innerHTML += toadd;

    let elems = document.getElementsByClassName("box");
    for(let i = 0; i < elems.length; i++)
    {
        fixtag(elems[i]);
    }
    updatetags();
}

if(localStorage.getItem("tlongn") !== null && localStorage.getItem("tlongt") !== null){
    names = localStorage.getItem("tlongn").split(",");
    prices = localStorage.getItem("tlongp").split(",");
    tags = localStorage.getItem("tlongt").split(",");
    for(let i = 2; i < names.length; i++){
        j = i-1
        loadbox(names[i], prices[i], tags[j]);
        
    }
}

function loadbox(n, p, t){
    let all = document.getElementById("allbox");
    let hid = document.getElementById("hidden");
    hid.getElementsByClassName("name")[0].innerHTML = n;
    hid.getElementsByClassName("price")[0].innerHTML = p + " kr.";
    hid.getElementsByClassName("box")[0].classList = "box";
    hid.getElementsByClassName("box")[0].classList.add(t);
    let toadd = hid.innerHTML;
    all.innerHTML += toadd;

    let elems = document.getElementsByClassName("box");
    for(let i = 0; i < elems.length; i++)
    {
        fixtag(elems[i]);
    }
    updatetags();
}

document.getElementById("filter").addEventListener("blur", filter, false);
updatetags();
