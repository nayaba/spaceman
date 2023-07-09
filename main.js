const message = document.getElementById('message')
const image = document.getElementById('image')
const board = document.getElementById('board')
const letterBank = document.getElementById('letter-bank')
const playAgain = document.getElementById('play-again')
const createdDivsArr = []
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
  'SHOP',
  'FRUIT',
  'EASY',
  'DIRTY',
  'GIANT',
  'SHAKING',
  'GROUND',
  'ALMOST',
  'SQUARE',
  'BEND',
  'COLD',
  'BROKEN',
]

// Create a clickable letter bank
lettersArr.forEach((letter) => {
  let createdDiv = createLetterDiv(letter)
  createdDivsArr.push(createdDiv)
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

function drawSpacemn(attempt) {
  image.innerHTML = `<img src="images/${attempt}.png" />`
}


// Game play
function chooseWord() {
  word = wordsArr[Math.floor(Math.random() * wordsArr.length)]
  console.log('word: ', word)
}

function makeUnclickable(arr) {
  arr.forEach(element => {
    element.removeEventListener('click', compareLetters)
  })
}

function compareLetters(evt) {
  let letter = evt.target.id
  if (wordArr.includes(letter)) {
    let index = wordArr.indexOf(letter)
    underscoresArr[index] = letter
    updateBoard()
  } else {
    counter--
    drawSpacemn(counter)
  }
  updateMessage(`${counter} attempts remaining`)
  checkGameOver(evt.target)
}

function findMissingLetters() {
  wordArr.forEach(letter => {
   let found = underscoresArr.includes(letter)
   if (!found) {
    console.log('letter: ', letter)
    let index = wordArr.indexOf(letter)
    underscoresArr[index] = letter
    updateBoard()
   }
  })
}


function checkGameOver(letter) {
  if (!underscoresArr.includes('_')) {
    updateMessage('YOU WIN!')
    playAgain.style.visibility = "visible"
    makeUnclickable(createdDivsArr)
  } else if (counter > 0) {
    letter.removeEventListener('click', compareLetters)
    letter.style.opacity = "0.5"
    return
  } else {
    console.log(underscoresArr)
    updateMessage(`GAME OVER! The word was ${word}`)
    playAgain.style.visibility = "visible"
    makeUnclickable(createdDivsArr)
    findMissingLetters()
  }
}

// Start game play
function init() {
  counter = 6
  drawSpacemn(counter)
  makeClickable(playAgain, restart)
  updateMessage(`${counter} attempts remaining`)
  chooseWord()
  renderBoard()
}

function restart() {
  underscoresArr = []
  playAgain.style.visibility = "hidden"
  createdDivsArr.forEach(div => {
    makeClickable(div, compareLetters)
    div.style.opacity = "1"
  })
  init()
}

init()

