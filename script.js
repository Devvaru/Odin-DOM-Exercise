/*a <p> with red text that says “Hey I’m red!”

an <h3> with blue text that says “I’m a blue h3!”

a <div> with a black border and pink background color with the following elements inside of it:
        
    another <h1> that says “I’m in a div”
    
    a <p> that says “ME TOO!”
    
    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. */

const p = document.createElement('p');
const p_text = document.createTextNode('Hey I\'m red!');
p.style.color = 'red';
p.appendChild(p_text);
document.body.appendChild(p);
