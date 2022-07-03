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

const h3 = document.createElement('h3');
const h3_text = document.createTextNode('I\'m a blue h3!'
);
h3.style.color = 'blue';
h3.appendChild(h3_text);
document.body.appendChild(h3);

//div container
const div = document.createElement('div');
div.style.borderWidth = '5px';
div.style.borderColor = 'black';
div.style.borderStyle = 'solid';
div.style.background = 'pink';

    const h1 = document.createElement('h1');
    const h1_text = document.createTextNode('I\'m in a div'
    );
    h1.appendChild(h1_text);
    document.body.appendChild(h3);
    div.appendChild(h1);
    
    const p2 = document.createElement('p');
    const p_text2 = document.createTextNode('ME TOO!');
    p2.appendChild(p_text2);
    document.body.appendChild(p2);
    div.appendChild(p2);

document.body.appendChild(div);