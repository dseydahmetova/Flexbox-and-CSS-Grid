const blueBox = document.createElement('div')
blueBox.classList.add('blue')

const blackBox = document.createElement('div')
blackBox.classList.add('black')

// for(let i =0; i < 4; i++) {
//   blackBox.appenChild(blueBox)
// }


const container1 = document.querySelector('#flexBox')
container1.appendChild(blackBox)


console.log(container1)