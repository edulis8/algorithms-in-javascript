/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
    
   
   Wordle Game Implementation
	You are tasked with implementing the Wordle game, where you need to create a method that takes a guess and the correct answer as input and returns the result of the guess based on the following rules:
	• Use '1' to indicate that a letter appears in the correct position.
	• Use '0' to indicate that a letter exists in the answer but is in a different position.
	• Use '.' to indicate that the letter does not appear in the answer.
	Here's an example of the method's behavior:
	• If the correct answer is "apple":    
		• For the guess        "table," the result should be ".0.11" (the 't' and 'b' does not even exist,  'a'  is in the wrong positions, and 'l' and 'e' is not in the answer).
		• For the guess "cloth," the result should be ".0..." ( 'l' in in the wrong positions, and 'c' ,'o', 't', and 'h' are not in the answer).
	Your task is to implement the wordle_guess function 
	
	string wordle_guess(string answer, string guess){
	    return code
	}
	
	a    p    p    l    e (answer)
	t    a    b    l    e (guess)
	.    0    .    1    1 (output) "." means does not exist, "0" means exists but in wrong position, "1" means that correct position
	
    
    
	a p   p   l     e
	c    l    o    t    h
	.    0    .   .     .
    
    
    apple
    apptl
    111.0
    
    111
    // is t in apple? (either create set with apple or iterate thru)
    // l/t... no, use .
    // e/l... is l in apple? (lookup in a set based on apple)

 
apple - answer
table - guess
.0.11 - output

aapplep - answer
ppppppe - guess
0.11..0  - could be confusing, could think 3 other ps exist in answer

// keep track of if a 'p' has been 'used' already, giving priority to '1'
// 2 matches used 2 ps, only 1 p remains to be used, we have one 0 for the output
// after 3 ps are "used", remaining Ps would be considered non-existent in answer (".")

0011000

*/

// same num chars
// compare ans to guess
// find chars that are common to both

// comparing char to char in same position
// if same -> 1
// if diff
    // look in answer, find char, if exists -> 0
    // else -> .


// "table" ->  ".0.11"
// "cloth" ->  ".0..."
// APPLE TABLE


// is it case sensitive? no.

// 

function wordleGuess(answer, guess){
  if (answer.length != guess.length) {
      throw new Error();
  }
  answer = answer.toLowerCase();
  guess = guess.toLowerCase();
  
  const map = answer.split('').reduce((map, char)=> {
      map[char] = map[char] || 0;
      map[char]++;
      return map;
  }, {})
  
  console.log({map})
  
//    aapplep - answer
//    ppppppe - guess
//    0.11..0  - could be confusing, could think 3 other ps exist in answer
  
  // output [0,.,1,1,.,0]
  
  // keep track of if a 'p' has been 'used' already, giving priority to '1'
// 2 matches used 2 ps, only 1 p remains to be used, we have one 0 for the output
// after 3 ps are "used", remaining Ps would be considered non-existent in answer (".")

  
  let output = [];
  
 // if equal to 1, 
  
 // { map: { a: 2, p: 0, l: 1, e: 0 } }

  // goal: simplify
  for (let i = 0; i < answer.length; i++) {
      const answerChar = answer[i];
      if (answerChar === guess[i]) {
          output[i] = '1';
          map[answerChar] = Number(map[answerChar]) - 1;
      }
  }
  
  for (let i = 0; i < answer.length; i++) {
      const answerChar = answer[i];
      if (answerChar !== guess[i]) {
          // case exists
          if (map[guess[i]]) { // > 0
              console.log('exists', guess[i], map)
              output[i] = '0';
              map[guess[i]] = Number(map[guess[i]]) - 1;  
          } else {
               
               console.log('exists', guess[i], map)
              // case does not exist
              output[i] = '.'
          }
      }
  }
              
  return output.join('');              
}


const res = wordleGuess('aapplep', 'ppppppe');
          
console.log({res});

// FEEDBACK
// UPFRONT: think thru the behavior, ask a lot of questions, there will be ambiguity, assumptions, error handling
// uppercase, number of counts
// implementation clean, approach clean
// second problem could be done fast.


/*
function wordleGuess(answer, guess){
  answer = answer.toLowerCase();
  guess = guess.toLowerCase();
  
  const map = answer.split('').reduce((map, char)=> {
      map[char] = map[char] || 0;
      map[char]++;
      return map;
  }, {})
  
  
  const set = new Set(answer.split(''));
  let output = '';
  
  for (let i = 0; i < answer.length; i++) {
      const answerChar = answer[i];
      if (answerChar === guess[i]) {
          output += '1'
      } else {
          // case exists
          if (set.has(guess[i])) {
              output += '0';
           } else {
              // case does not exist
              output += '.'
           }

      }
  }
              
  return output;              
}
*/



function _wordleGuess(answer, guess) {
  if (answer.length !== guess.length) {
      throw new Error("The lengths of the answer and guess must be the same.");
  }

  const output = [];
  const charCount = {};

  // Initialize character count for each character in the answer
  for (const char of answer.toLowerCase()) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Compare each character of answer and guess
  for (let i = 0; i < answer.length; i++) {
      const answerChar = answer[i].toLowerCase();
      const guessChar = guess[i].toLowerCase();

      if (answerChar === guessChar) {
          output.push('1');
      } else if (charCount[guessChar] && charCount[guessChar] > 0) {
          output.push('0');
          charCount[guessChar]--;
      } else {
          output.push('.');
      }
  }

  return output.join('');
}



const _res = _wordleGuess('aapplep', 'ppppppe');
console.log({_res}); // Output: "0.11..0"