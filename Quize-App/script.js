
const questionsArray = [ 
    {
        "que" : "Which one of the following is markup language?",
        "a" : "HTML",
        "b" : "CSS",
        "c" : "JavaScript",
        "d" : "PHP",
        "correct" : "a"
    },

    {
        "que" : "In which year JavaScript was lanuched?",
        "a" : "1996",
        "b" : "1995",
        "c" : "1994",
        "d" : "None of Above",
        "correct" : "b"
    },

    {
        "que" : "What does CSS stands for?",
        "a" : "Hyper Text Markup Language",
        "b" : "Cascading Style Sheet",
        "c" : "Graphical User Interface",
        "d" : "None of Above",
        "correct" : "b"
    }
] 


let index=0;
let total = questionsArray.length;
let right = 0, wrong = 0;

const quebox= document.getElementById("quebox");    // ques copy <h2></h2>
const optionInput = document.querySelectorAll(".options")


const loadQuestion = () => {

    if(index==total){
        return endQuiz();
    }
    reset();

    const data = questionsArray[index];
    quebox.innerText=`${index+1} ) ${data.que}`;   // display only ques from array of obect as index 0

    optionInput[0].nextElementSibling.innerText=data.a;   // if two class with same name can access,   class[0], class[1]
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}

const submitQuiz = () =>{
    const data = questionsArray[index];
    const ans = getAnswer();

    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;  //empty return
}

const getAnswer = () =>{
    let answer;
    optionInput.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInput.forEach(
        (input) =>{
            input.checked=false;
        }
    )
}

const endQuiz =()=>{
    document.getElementById("box").innerHTML=`
    
        <div style="text-align: center">
            <h3>Thank You For Playing Quiz...!!</h3>
            <h2>Your Score : ${right} / ${total} are correct. </h2>
        </div>
    `
}

//initial call

loadQuestion();
