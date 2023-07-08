const message = document.getElementById('message')
const image = document.getElementById('image')
const board = document.getElementById('board')
const letterBank = document.getElementById('letter-bank')
let word
let wordArr
let underscoresArr = []

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
lettersArr.forEach(letter => {
  let createdDiv = createLetterDiv(letter)
  makeClickable(createdDiv, compareLetters)
})

function createLetterDiv (letter) {
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


// Create blank gameboard
function chooseWord() {
  word = wordsArr[Math.floor(Math.random() * wordsArr.length)]
  console.log('word: ', word)
}

function renderBoard() {
  wordArr = [...word]
  wordArr.forEach(letter => {
    underscoresArr.push('_')
  })
  board.innerHTML = underscoresArr.join(' ')
}

// Game play
function compareLetters(evt) {
  let letter = evt.target.id
  if (wordArr.includes(letter)) {
    let index = wordArr.indexOf(letter)
    underscoresArr[index] = letter
    board.innerHTML = underscoresArr.join(' ')
  } else {
    console.log(`${letter} is not in the word`)
  }
}


// Start game play
function init () {
  chooseWord()
  renderBoard()
}

init()