/**
 * Create a function that takes every string and turns it into a title,
 * with the first letter in upper case.
 */

 const title = function(array) {

 }

 const testItems = [
     'hi there',
     'what is up',
     'how are you doing?',
     'what a ?nice day we are having'
 ]

 const expect = [
     'Hi There',
     'What Is Up',
     'How Are You Doing?',
     'What A ?nice Day We Are Having'
 ]
// Constant is an invariable variable.
// "Results" will map testItems to const title
const results = testItems.map(title)
//
 for (let i = 0; i < 4; i++) {
    if (results[i] !== expect[i]) {
        console.log('fail')
    } else {
        console.log('pass!')
    }
 }

 /**
  * Need:
  * -loop over each object in the array (only need to check first letter of each word, actually)
  *     -check first character && first character after a space in each string
  *     -Make alphabetical characters uppercase
  *
  */
