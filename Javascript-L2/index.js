let container = document.querySelector('#container');
// a <p> with red text that says “Hey I’m red!”
let p = document.createElement('p')
p.style.color = 'red';
p.textContent = "Hey I'm red!";
container.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”
let h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!"
container.appendChild(h3);

// a <div> with a black border and pink background color
// with the following elements inside of it:
//      another <h1> that says “I’m in a div”
//      a <p> that says “ME TOO!”
let element = document.createElement('div');
element.style.border = 'solid';
element.style.borderWidth = '2px';
element.borderColor = 'black';
element.style.backgroundColor = 'pink';

let h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
element.appendChild(h1);

let newP = document.createElement('p');
newP.textContent = "ME TOO!";
element.appendChild(newP);

container.appendChild(element);