let body = document.querySelector('body');

let h1 = body.querySelector('h1');
h1.innerHTML='Lab7 Assignment';
h1.style.color = 'blue';

let hr1 = document.createElement('hr');
body.appendChild(hr1);

let h2_1 = document.createElement('h2');
h2_1.innerHTML = 'Task';
h2_1.style.color = 'red';
body.appendChild(h2_1);

let p1 = document.createElement('p');
p1.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
body.appendChild(p1);

let ul1 = document.createElement('ul');
for (let i=0; i<6; i++) {
    let li = document.createElement('li');
    if (i%2==0) {
        li.style.color = 'green';
        li.classList.add('odd');
    } else {
        li.style.color = 'purple';
        li.classList.add('even');
    }
    ul1.appendChild(li);
}
body.appendChild(ul1);

let li_arr1 = ul1.querySelectorAll('li');
li_arr1[0].innerHTML = 'find elements in the DOM (<b>5 points</b>);';
li_arr1[1].innerHTML = 'create/add/remove elements (<b>5 points</b>);';
li_arr1[2].innerHTML = 'change content of the elements (<b>5 points</b>);';
li_arr1[3].innerHTML = 'change styles of the elements (<b>5 points</b>);';
li_arr1[4].innerHTML = 'change attributes of the elements (<b>5 points</b>);';
li_arr1[5].innerHTML = 'change classes of the elements (<b>5 points</b>).';

let hr2 = document.createElement('hr');
body.appendChild(hr2);

let h2_2 = document.createElement('h2');
h2_2.innerHTML = 'Submission';
h2_2.style.color = 'red';
body.appendChild(h2_2);

let p2 = document.createElement('p');
p2.innerHTML = 'To submit your work, follow these instructions:';
body.appendChild(p2);

let ul2 = document.createElement('ul');
for (let i=0; i<7; i++) {
    let li = document.createElement('li');
    if (i%2==0) {
        li.style.color = 'green';
        li.classList.add('odd');
    } else {
        li.style.color = 'purple';
        li.classList.add('even');
    }
    ul2.appendChild(li);
}
body.appendChild(ul2);

let li_arr2 = ul2.querySelectorAll('li');
li_arr2[0].innerHTML = 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).';
li_arr2[1].innerHTML = 'Clone this repository to your local machine and work inside it.';
li_arr2[2].innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';
li_arr2[3].innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';
li_arr2[4].innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';
li_arr2[5].innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).';
li_arr2[6].innerHTML = 'After you finish your work, submit it to the Github (<b>2 points</b>).';

let hr3 = document.createElement('hr');
body.appendChild(hr3);