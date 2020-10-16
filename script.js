const body = document.querySelector('body')
const gameOver = document.querySelector('.game-over')
const grid = document.querySelector('.grid-container')
const width = 9
const gridSquares = []
const start = document.querySelector('.start')
const reset = document.querySelector('.reset')
const laser = document.querySelector('.laser')
const counter = document.querySelector('.points-counter')
const livesCounter = document.querySelector('.lives-counter')

let player = 77
let aliens = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25]
let alienDirection = 'right'
let points = 0
let lives = 3

reset.addEventListener('click', () => {
  location.reload()
})

function rulesFunction () {
  const rulesDiv = document.querySelector('.rules-div');
  if (rulesDiv.style.display === "none") {
    rulesDiv.style.display = "flex";
  } else {
    rulesDiv.style.display = "none";
  }
}

for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  gridSquares.push(div)
}

gridSquares[player].classList.remove('player')
player -= 1
gridSquares[player].classList.add('player')

aliens.forEach((alien) => {
  gridSquares[alien].classList.add('alien')
})

function bombMovement() {
  let randomIndex = Math.floor(Math.random() * aliens.length)
  let bombStart = aliens[randomIndex]

  const bombInterval = setInterval(() => {

    if (gridSquares[player].classList.contains('bomb') && lives > 0) {
      gridSquares[bombStart].classList.remove('bomb')
      lives -= 1
      livesCounter.innerHTML = `<h2>${lives}</h2>`
    } else if (lives === 0) {
      alert('GAME OVER - YOU RAN OUT OF LIVES')
    } else if (gridSquares[bombStart].classList.contains('laser')) {
      
      clearInterval(bombInterval)
      gridSquares[bombStart].classList.remove('bomb')

    } else if ((bombStart > (width ** 2) - width - 1)) {
      gridSquares[bombStart].classList.remove('bomb')
      clearInterval(bombInterval)
    } else {
      gridSquares[bombStart].classList.remove('bomb')
      bombStart += width
      gridSquares[bombStart].classList.add('bomb')
    }
  }, 600)
}

function dropBombs() {
  const bombDrop = setInterval(() => {

    bombMovement()

  }, 5000)
}

start.addEventListener('click', () => {

  document.addEventListener('keypress', (event) => {
    const key = event.key
    if (key === 'w') {
      fireLaser()
    } else if (key === 's' && !(player % width === 0)) {
      gridSquares[player].classList.remove('player')
      player -= 1
      gridSquares[player].classList.add('player')
    } else if (key === 'a' && !(player % width === width - 1)) {
      gridSquares[player].classList.remove('player')
      player += 1
      gridSquares[player].classList.add('player')
    }
  })

  dropBombs()

  const interval = setInterval(() => {

    if (alienDirection === 'right') {

      if (aliens.some(alien => alien % 9 === width - 1)) {

        for (let j = aliens.length - 1; j >= 0; j--) {

          const alienPosition = aliens[j]

          gridSquares[alienPosition].classList.remove('alien')
          aliens[j] += width
          gridSquares[alienPosition + width].classList.add('alien')

        }
        alienDirection = 'left'
      } else {

        for (let j = aliens.length - 1; j >= 0; j--) {

          const alienPosition = aliens[j]

          gridSquares[alienPosition].classList.remove('alien')
          aliens[j] += 1
          gridSquares[alienPosition + 1].classList.add('alien')
        }
      }
    } else {

      if (aliens.some(alien => alien % 9 === 0)) {

        for (let j = aliens.length - 1; j >= 0; j--) {

          const alienPosition = aliens[j]

          gridSquares[alienPosition].classList.remove('alien')
          aliens[j] += width
          gridSquares[alienPosition + width].classList.add('alien')
        }
        alienDirection = 'right'

      } else {

        for (let j = 0; j < aliens.length; j++) {

          const alienPosition = aliens[j]

          gridSquares[alienPosition].classList.remove('alien')
          aliens[j] -= 1
          gridSquares[alienPosition - 1].classList.add('alien')
        }
      }

    } if ((aliens.some(alien => alien > (width ** 2) - width - 1))) {

      alert('GAME OVER')
      clearInterval(interval)
      clearInterval(dropBombs)
    } if (points === 2100){
      alert('CONGRATULATIONS! YOU WIN!!!')
      clearInterval(interval)
      clearInterval(dropBombs)
    }
  }, 1500)
})

function fireLaser() {
  let laserStart = player

  const laserInterval = setInterval(() => {

    if ((laserStart < width)) {
      clearInterval(fireLaser)
      gridSquares[laserStart].classList.remove('laser')
    } else if (gridSquares[laserStart].classList.contains('alien')) {
      const alienIndex = aliens.indexOf(laserStart)
      aliens.splice(alienIndex, 1)
      gridSquares[laserStart].classList.remove('laser')
      gridSquares[laserStart].classList.remove('alien')
      clearInterval(laserInterval)
      points += 100
      counter.innerHTML = `<h2>${points}</h2>`
    } else {
      gridSquares[laserStart].classList.remove('laser')
      gridSquares[laserStart -= width].classList.add('laser')
    }
  }, 500)
}
