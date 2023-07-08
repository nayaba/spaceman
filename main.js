const message = document.getElementById('message')
const image = document.getElementById('image')
const board = document.getElementById('board')
const letterBank = document.getElementById('letter-bank')
const playAgain = document.getElementById('play-again')
let underscoresArr = []
let btn
let counter
let word
let wordArr

const lettersArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

const wordsArr = [
  'GOT',
  'ABILITY',
  'SHOP',
  'RECALL',
  'FRUIT',
  'EASY',
  'DIRTY',
  'GIANT',
  'SHAKING',
  'GROUND',
  'WEATHER',
  'LESSON',
  'ALMOST',
  'SQUARE',
  'FORWARD',
  'BEND',
  'COLD',
  'BROKEN',
  'DISTANT',
  'ADJECTIVE'
]

// Create a clickable letter bank
lettersArr.forEach((letter) => {
  let createdDiv = createLetterDiv(letter)
  makeClickable(createdDiv, compareLetters)
})

function createLetterDiv(letter) {
  let letterDiv = document.createElement('div')
  letterDiv.id = letter
  letterDiv.innerHTML = letter
  letterDiv.className = 'letters'
  letterBank.appendChild(letterDiv)
  return letterDiv
}

function makeClickable(element, func) {
  element.addEventListener('click', func)
}

// Render functions
function renderBoard() {
  wordArr = [...word]
  wordArr.forEach((letter) => {
    underscoresArr.push('_')
  })
  updateBoard()
}

function updateBoard() {
  board.innerHTML = underscoresArr.join(' ')
}

function updateMessage(text) {
  message.innerHTML = text
}

// function createButton(text) {
//   btn = document.createElement('button')
//   btn.innerText = text
//   button.appendChild(btn)
//   makeClickable(btn, restart)
// }

// Game play
function chooseWord() {
  word = wordsArr[Math.floor(Math.random() * wordsArr.length)]
  console.log('word: ', word)
}

function compareLetters(evt) {
  let letter = evt.target.id
  if (wordArr.includes(letter)) {
    let index = wordArr.indexOf(letter)
    underscoresArr[index] = letter
    updateBoard()
    updateMessage(`Good guess!  ${counter} attempts remaining`)
  } else {
    counter--
    updateMessage(`Try again! ${counter} attempts remaining`)
  }
  checkGameOver()
}

function checkGameOver() {
  if (!underscoresArr.includes('_')) {
    updateMessage('YOU WIN!')
    playAgain.style.visibility = "visible"
  } else if (counter > 0) {
    return
  } else {
    updateMessage('GAME OVER!')
    playAgain.style.visibility = "visible"
  }
}

// Start game play
function init() {
  counter = 7
  makeClickable(playAgain, restart)
  updateMessage(`${counter} attempts remaining`)
  chooseWord()
  renderBoard()
}

function restart() {
  underscoresArr = []
  playAgain.style.visibility = "hidden"
  init()
}

init()
