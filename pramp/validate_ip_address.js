function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/

	// your code goes here
  let arr = ip.split('.');
  if (arr.length > 4) return false;
  
  // loop
  // check if values are numbers IsNaN(Number('a')) return false
  // check if numbers are bounds
  
  for (const val of arr) {
    if (val === '') return false;
    const num = Number(val);
    
    //if (isNaN(num)) return false;
  
    if (Number(val).toString() != val) return false;
    
    if (num < 0 || num > 255) return false;
  }
  
  return true;
}
// 
// "1.2.3. 0x1 "
 
// "1..23.4"

// 0 <= num <= 255


// split on .
// 4 numbers
// 
function fitsOneByte(chunk) {
  // Does this string chunk represent a number from 0 to 255?
  
  // If it's an empty string, return false.
  if (chunk.length === 0) {
      return false;
  }

  // If any character in the string isn't a digit, return false.
  for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] < '0' || chunk[i] > '9') {
          return false;
      }
  }

  // If the string has a leading zero and isn't zero, return false.
  if (chunk.length >= 2 && chunk[0] === '0') {
      return false;
  }

  // Return true if and only if parsing the chunk as an integer is between 0 and 255.
  return 0 <= parseInt(chunk, 10) && parseInt(chunk, 10) <= 255;
}

function validate(address) {
  // If the number of periods is not 3, then it can't be an IP address.
  const chunks = address.split('.');
  if (chunks.length !== 4) {
      return false;
  }

  // Check that each chunk delimited by periods represents a number from 0-255.
  for (let chunk of chunks) {
      if (!fitsOneByte(chunk)) {
          return false;
      }
  }

  return true;
}