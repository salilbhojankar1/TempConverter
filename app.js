//scripts


const celsiusField = document.querySelector("#celsius");
const degreeS = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");


//window loading reset

window.addEventListener("load",() =>{
    degreeS.value = "";
    celsiusField.innerHTML = "";
   
})





//convert button click event
convertBtn.addEventListener("click",(e) =>{
    e.preventDefault();
   convertToCelsius();

   //add loading feature
    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>Converting..</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "Convert";
    }, 1000);

})

function convertToCelsius(){
    let inputValue = degreeS.value;
    setTimeout(() => {
            if(tempType.value === "fahrenheit"){
        const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;
    }
    else if(tempType.value === "kelvin"){
        const kelvinToCelsius = inputValue - 273.15;
        celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;c`;
    }
    }, 1100);
}