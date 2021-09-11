//variables
let CurrentInput = document.querySelector('.CurrentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

//calculater display 
let realTimeScreenValue = []

// To clear 

clearbtn.addEventListener("click" , () => {
    realTimeScreenValue= [''];
    answerScreen.innerHTML = 0;
    CurrentInput.className = 'CurrentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.95)"
})

//Get value and display on the screen
 buttons.forEach((btn) => {

    btn.addEventListener("click", () => {
        //when clicked button is not erased button
        if(!btn.id.match('erase')){
            //to display value on pressing button
            realTimeScreenValue.push(btn.value);
            CurrentInput.innerHTML = realTimeScreenValue.join('');
            //to evaluate answer in real time 
            if(btn.classlist.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }
        // when erase button is clicked 
        if(btn.id.match('erase')){
            realTimeScreenValue.pop();
            CurrentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        //when clicked button is evaluate button
        if(btn.id.match('evaluate')){
            CurrentInput.className = 'answerScreen';
            answerScreen.className = 'CurrentInput';
            answerScreen.style.color = "white";
        }
        //to prevent undefined erroe in screen
        if(typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answerScreen.innerHTML =0;
        }
    })
 })
