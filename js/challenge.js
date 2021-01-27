const documentTime = document.getElementById('counter')
const pause = document.getElementById('pause')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let currentTime = 0;
let timeOn = true;

function timeChange() {
  currentTime += 1
  documentTime.innerText = currentTime
  if(timeOn === true) {timerLoop()}
}

function timerLoop() {
  setTimeout(timeChange, 1000)
}
timerLoop()

pause.addEventListener('click', function(){
  if(timeOn === true) {
    timeOn = false
  }else{
    timeOn = true
    timerLoop()
  }
})

minus.addEventListener('click', function(){
  currentTime -= 1
  documentTime.innerText = currentTime
})
plus.addEventListener('click', function(){
  currentTime += 1
  documentTime.innerText = currentTime
})

console.log(pause)

