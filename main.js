const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
  constructor (field) {
    this._field = field
  }

  playGame ()  {
    let i = 0;
    let j = 0;
    let gamePlay = true
  

    while (gamePlay) {
      this.print(this._field)
      let userInput = prompt("What's your next move?")
      if (userInput.toUpperCase() === 'N') {
        if (i === 0) {
          console.log("You cannot move in that direction")
        }else if (this._field[i-1][j] === hole){
          console.log("You lose")
          gamePlay = false
        } else if(this._field[i-1][j] === hat){
          console.log("You win")
          gamePlay = false
        }else {
          i -= 1
          this._field[i][j] = pathcharacter
        }
      }else if (userInput.toUpperCase() === "S") {
        if (i > this._field.length) {
          console.log("You cannot move further in that direction")
        } else if (this._field[i+1][j] === hole) {
          console.log("You lose")
          gamePlay = false;
        }else if(this._field[i+1][j] === hat){
          console.log("You win")
          gamePlay = false
        } else {
          i+=1
          this._field[i][j] = pathCharacter
        }
      } else if (userInput.toUpperCase() === "W"){
        if(j = 0){
          console.log("You can't move further in this direction")
        }else if (this._field[i][j-1] === hole){
          console.log("You lose")
          gamePlay = false;
        }else if(this._field[i][j-1] === hat){
          console.log("You win")
          gamePlay = false
        } else {
          j+= 1
          this._field[i][j] = pathCharacter
        }
      } else if (userInput.toUpperCase() === "E") {
        if (j > this._field[j].length){
          console.log("You can't move further in that direction")
        } else if (this._field[i][j+1] === hole){
          console.log("You lose")
          gamePlay = false
        } else if (this._field[i][j+1] === hat){
          console.log("You win")
          gamePlay = false
        } else {
          j+=1
          this._field[i][j] = pathCharacter
        }
      } else {
        console.log("Invalid input. Enter N,S,W or E")
      }
    }
  }

  static generateField(rol, col) {

  }



  print() {
    this._field.forEach(row =>{
      console.log(row.join(''))
    })
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
])
myField.playGame()

