

var feet = document.getElementById('feet');

var inch = document.getElementById('inch');


feet.addEventListener('input', function(){

    let f= this.value;
    let i= f*12;

    inch.value=i;
});

inch.addEventListener('input', function(){

    let a= this.value;
    let b= a/12;

    if(!Number.isInteger(b)){
        b=b.toFixed(2);
    }
    feet.value=b;

});