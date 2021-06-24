console.log("This is index.js file");
function poundToKGConversion(poundValue){
    if(poundValue.value<=0||isNaN(poundValue.value)){
        document.querySelector(".error").classList.add("showError");
        setTimeout(() => {
            document.querySelector(".error").classList.remove("showError");
              poundValue.value=" ";
        }, 2000);
    }else{
        let KGValue = poundValue.value/2.2046;
        document.querySelector("#result").innerHTML = KGValue.toFixed(4);
        poundValue.value = "";
    }

}