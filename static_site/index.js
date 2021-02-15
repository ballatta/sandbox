/**
 * Takeaways:
 * 
 * 1. Anything you can do explicitly with html/css you can do dynamically
 * with javascript.
 * 2. The benefit to doing this is that you can respond to many, many different
 * conditions.
 */
const SETTING = false


const pTag = document.getElementById('par')
pTag.style = 'color: red'

// select container
const container = document.getElementById('container')
// create new element, unattached to anything
const newEl = document.createElement('h2')
// add the new element to the container
const el = container.appendChild(newEl)
// set text on the new element
if (SETTING) {
    el.innerText = 'hi also'
} else {
    el.innerText = 'you stink!'
}
console.log(el)