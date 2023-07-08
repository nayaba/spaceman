const message = document.getElementById('message')
const image = document.getElementById('image')
const board = document.getElementById('board')
const letterBank = document.getElementById('letter-bank')

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

const words = [
  'got',
  'ability',
  'shop',
  'recall',
  'fruit',
  'easy',
  'dirty',
  'giant',
  'shaking',
  'ground',
  'weather',
  'lesson',
  'almost',
  'square',
  'forward',
  'bend',
  'cold',
  'broken',
  'distant',
  'adjective.'
]

lettersArr.forEach(letter => {
  let createdDiv = createLetterDiv(letter)
  makeClickable(createdDiv, test)
})

function createLetterDiv (letter) {
  let letterDiv = document.createElement('div')
  letterDiv.id = letter
  letterDiv.className = 'letters'
  letterDiv.innerHTML = letter
  letterBank.appendChild(letterDiv)
  return letterDiv
}

function makeClickable(element, func) {
 element.addEventListener('click', func)
}

function test(event) {
  console.log('event: ', event.target)
}