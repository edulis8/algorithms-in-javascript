/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];

  path = path.split('/'); // removes / chars

  path.forEach(el => {
      if (el !== '' && el !== '.' && el !== '..') {
          stack.push(el);
      } else if (el === '..') {
          // go back one level
          stack.pop();
      }
  })
  
  return '/' + stack.join('/')
};
// time linear On
// space linear On

// stack [] LIFO

// /home/

// /home//foo

// home/foo/

// split on /

// push values into stack
// ignore ' ' and '.'

// // home/foo/..  -> /home
// if we get to a '..'
// pop off stack