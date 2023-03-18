


function kiloweightConvert(value){

    document.getElementById("pounds").innerHTML = value * 2.2046;
    document.getElementById("ounces").innerHTML = value * 35.274;
    document.getElementById("grams").innerHTML  = value * 1000;
    document.getElementById("stones").innerHTML = value * 0.1574;

}



// var kilogram = document.getElementById('kilograms');

// kilogram.addEventListener('input', function(){

//     // console.log("success");
//     document.getElementById("pounds").innerHTML = this.value * 2.2046;
//     document.getElementById("ounces").innerHTML = this.value * 35.274;
//     document.getElementById("grams").innerHTML  = this.value * 1000;
//     document.getElementById("stones").innerHTML = this.value * 0.1574;

// });