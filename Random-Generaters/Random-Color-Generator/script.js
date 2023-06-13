
const getColor = ()=>{

    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#"+randomNumber.toString(16); 

    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;

    navigator.clipboard.writeText(randomCode);   //it copy color code in clipboard
}


// event call 

document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// initial call - when page reload

getColor();
