const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'gray';
judul.innerHTML = 'Vito Satria';

const p = document.getElementsByTagName('p');
for (let i = 0; i < 3; i++) {
    p[i].style.backgroundColor = 'lightgray'
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Nama saya Vito Satria, umur 20 tahun.'
