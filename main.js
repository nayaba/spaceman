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

lettersArr.forEach(letter => {
  let letterDiv = document.createElement('div')
  letterDiv.id = letter
  letterDiv.className = 'letters'
  letterDiv.innerHTML = letter
  letterBank.appendChild(letterDiv)
})