// Class Car {
// 	numberOfDoors() -> integer
// 	turnWheel(angle: integer) -> no return value
// }
// === PLEASE NOTE ===
// - local process
// - 2 humans on keyboard 
// - readability + simple design (over performance)

const { move } = require("ramda")



// Black, white team. Two cats, two rabbits, one snail.
// friendly means same color
// all white can eat any black. Except snail can't eat.
// game ends when snail eaten

// 2 people programming.
// i provide interface. to update game state.

// DESIGN: movement and capturing
Class Player {
	
}
Class Board {
	// would have 7x7 matrix
	// populated by "creatures"
	// stores numbers of creatures
	
	// numWhiteRabbits
	// numBlackRabbits
	whiteRabbits: [Rabbit, Rabbit]
	blackRabbits: [Rabbit, Rabbit]
}
Class Rabbit {
   //numberOfDoors() -> integer
   num: 2
   currentLocation: [row, col];
   move(newRow, newCol, board) => {
	   	let message = '';
		// diagX4 
		// move 1, move 2
		
		// if valid() // determine if valid (snails, not putting snail in danger rule)
			// update currentLocation
		// else if there's a snail blocking intended moved-to location
			// move up to right before snail
		// else if enemy creature(s) in path
			// eat them
			// update state of number of creature of those types, decrement based on what enemy creatures eaten. Remove Rabbit from state. 
			// if enemy snail eaten, game over
		// else 
			// return error message string "invalid selection"
		
		
		// update currentLocation = [newRow, newCol]
		return message; // 'cat moved', 'cat blocked', 'cat ate rabbit and cat', 'you win'
	}
}

Class Cat {
	currentLocation
	num: 2
	move(row, col, board) => {
		// vertical 3
		// horizontal 3
	}
}

Class Snail {
	num: 1
	move(row, col, board) => {
		// one square up, down, left, right, diagX4
	
	}
}







// Cats and Rabbits is a two-player, turn-based game played on a 7x7 board.

// Cat: Moves up to three squares vertically or horizontally (but not both). Eats enemy pieces it moves through, blocked by friendly pieces.'

// Rabbit: Moves up to two squares diagonally. Movement ends when it eats a piece. Blocked by friendly pieces

// Snail: Moves one square in any direction. Cannot eat pieces. Blocked by friendly pieces

// Danger: You can't end your turn with your snail in danger of being eaten. If there's no way to get out of danger, you lose.

// It can also be illegal to move other pieces, if that puts your snail in danger: