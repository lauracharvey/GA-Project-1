const grid = document.querySelector('.grid-container')
const width = 9
const gridSquares = []
const start = document.querySelector('.start')
const reset = document.querySelector('.reset')
const laser = document.querySelector('.laser')

let player = 77
let alien = 11
let alienDirection = 'right'

reset.addEventListener('click', () => {
  location.reload()
})

for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  gridSquares.push(div)
  div.innerHTML = i
}

gridSquares[player].classList.remove('player')
player -= 1
gridSquares[player].classList.add('player')

gridSquares[alien].classList.remove('alien')
alien -= 1
gridSquares[alien].classList.add('alien')

document.addEventListener('keydown', (event) => {
  const key = event.key
  if (key === 'ArrowUp') {
    fireLaser()
  } else if (key === 'ArrowLeft' && !(player % width === 0)) {
    gridSquares[player].classList.remove('player')
    player -= 1
    gridSquares[player].classList.add('player')
  } else if (key === 'ArrowRight' && !(player % width === width - 1)) {
    gridSquares[player].classList.remove('player')
    player += 1
    gridSquares[player].classList.add('player')
  }
})

function fireLaser (){
  let laserStart = player

  const laserInterval = setInterval(() => {
    
    if ((laserStart < width)) {
      clearInterval(fireLaser)
      gridSquares[laserStart].classList.remove('laser')
    } else {
      gridSquares[laserStart].classList.remove('laser')
      gridSquares[laserStart -= width].classList.add('laser')
    }
  }, 500)
}

start.addEventListener('click', () => {
  const interval = setInterval(() => {

    if (alienDirection === 'right'){
      if(alien % width === width - 1){
        gridSquares[alien].classList.remove('alien')
        gridSquares[alien += width - 1].classList.add('alien')
        alienDirection = 'left'
      } else {
        gridSquares[alien].classList.remove('alien')
        gridSquares[alien += 1].classList.add('alien')
      }
    } else if (alienDirection === 'left' && alien < 79) {
      if((alien % width === 0)){
        gridSquares[alien].classList.remove('alien')
        gridSquares[(alien += (1 + width))].classList.add('alien')
        alienDirection = 'right'
      } else {
        gridSquares[alien].classList.remove('alien')
        gridSquares[alien -= 1].classList.add('alien')
      }
    } else if (alien === 79){
      clearInterval(interval)
      alert("GAME OVER")
    }
  }, 1000)
})