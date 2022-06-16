

let text = document.getElementById("pricehere");
 
window.addEventListener("load", function() {
    let allnumbers = localStorage.getItem("tlongp");
    if(allnumbers !== null){
        allnumbers = allnumbers.split(",");

        //allnumbers = "1768,700"
        //allnumbers = ["1768", "700"]

        sum(allnumbers)
    }else{
        localStorage.setItem("tlongp", "1768,700")
        let allnumbers = localStorage.getItem("tlongp").split(",");

        sum(allnumbers)
    }
});

function sum(allnumbers){
    let sum = 0;
    for (let i =0 ;i<allnumbers.length; i++) {
    sum += parseInt(allnumbers[i]);
    }

    text.innerHTML = sum + " kr.";
}


