

var red=document.getElementById("first");

var blue=document.getElementById("second");

var green= document.getElementById("third");


// red.addEventListener('click', function(){

//     document.getElementById("backgraound").style.backgroundColor="red";

//     document.getElementById("text").innerHTML="This Is Red Color Background.";
// });

// blue.addEventListener('click', function(){
//     document.getElementById("backgraound").style.backgroundColor="blue";

//     document.getElementById("text").innerHTML="This Is Blue Color Background."
// });

// green.addEventListener("click", function(){
//     document.getElementById("backgraound").style.backgroundColor="green";

//     document.getElementById("text").innerHTML="This Is Green Color Background."
// });





// =====================================
//      by using functions :
// =====================================

function changeRedColor(){

    console.log("Red button clicked..!");

    document.getElementById("backgraound").style.backgroundColor="red";

    document.getElementById("text").innerHTML="This Is Red Color Background.";

}

function changeBlueColor(){

    console.log("Blue button clicked..!");

    document.getElementById("backgraound").style.backgroundColor="blue";

    document.getElementById("text").innerHTML="This Is Blue Color Background.";

}

function changeGreenColor(){

    console.log("Green button clicked..!");

    document.getElementById("backgraound").style.backgroundColor="green";

    document.getElementById("text").innerHTML="This Is Green Color Background.";

}