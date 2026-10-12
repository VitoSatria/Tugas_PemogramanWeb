const p4 = document.querySelector('#b p');
p4.style.color = 'gray';
p4.style.fontSize = '30px';
p4.innerHTML = 'Tentang Saya'

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'gray';
li2.style.color = 'white';

const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightgray'
}
