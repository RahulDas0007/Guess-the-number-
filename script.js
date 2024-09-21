(() => { 
const form = document.querySelector('form')
const input = document.querySelector("#input");
const submitButton = document.querySelector(".submit-btn");
const startButton = document.querySelector(".start-game-btn");
const result = document.querySelector(".result");
const numGuesses = document.querySelector(".guesses");
const exactNum = document.querySelector(".exact-num")


let randomNumber = Math.floor(Math.random() * 100);
let guesses = [];

form.addEventListener('submit', (e) => {

    e.preventDefault()
    if (parseInt(input.value) === randomNumber) {
        exactNum.innerText = `The number is : ${randomNumber}`
        result.innerText = "You got it ! Congrats !!!!"
        submitButton.disabled = true
        startButton.disabled = false
    }
    else if (parseInt(input.value) > randomNumber) {
        result.innerText = "Too High !!"
    }
    else if (parseInt(input.value) < randomNumber) {
        result.innerText = "Too Low !!"
    }
    guesses.push(parseInt(input.value))
    numGuesses.innerText = "Your guesses :" + guesses.join(', ')
    form.reset()
})

startButton.addEventListener('click',() => { 
    result.innerText = ""
    numGuesses.innerText = ""
    startButton.disabled = true
    submitButton.disabled = false
    randomNumber = Math.floor(Math.random() * 100);
    guesses = []
 })

 })()

