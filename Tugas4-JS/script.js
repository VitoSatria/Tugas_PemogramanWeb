let namaPengguna = "";
let jumlahPilihan = 0;
let arrayPilihan = [];
let pilihanTerpilih = "";

const btnAwal = document.getElementById("btn-ok-1");
const wadahDinamis = document.getElementById("wadah-dinamis");

btnAwal.addEventListener("click", function buatInputPilihan() {
  const inputNama = document.getElementById("nama").value.trim();
  const inputJumlah = parseInt(document.getElementById("jumlah").value);

  if (inputNama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  if (isNaN(inputJumlah) || inputJumlah <= 0) {
    alert("Masukkan jumlah pilihan yang valid (angka bulat lebih dari 0)!");
    return;
  }

  namaPengguna = inputNama;
  jumlahPilihan = inputJumlah;

  document.getElementById("nama").disabled = true;
  document.getElementById("jumlah").disabled = true;
  btnAwal.disabled = true;

  let html = `<div class="step-card">`;
  for (let i = 1; i <= jumlahPilihan; i++) {
    html += `
            <label for="pilihan-${i}">Pilihan ${i} :</label><br>
            <input type="text" id="pilihan-${i}" class="input-teks-pilihan" placeholder="Teks Pilihan ${i}"><br><br>
        `;
  }
  html += `<button type="button" id="btn-simpan-pilihan">OK</button></div>`;

  wadahDinamis.innerHTML = html;
  document
    .getElementById("btn-simpan-pilihan")
    .addEventListener("click", buatPilihan);
});

function buatPilihan(){
    arrayPilihan = [];
    const inputs = document.querySelectorAll(".input-teks-pilihan");

    for (let i=0; i<inputs.length; i++){
        const val = inputs[i].value.trim();
        if (val === ""){
            alert('Pilihan ${i+1} jangan dikosongkan!')
            return;
        }
        arrayPilihan.push(val);
    }

    let html = `
        <div class="step-card">
            <p><strong>Pilihan :</strong></p>
            <div class="radio-group">
    `;

    arrayPilihan.forEach((teks, index) => {
        html += `
            <div class="radio-item">
                <input type="radio" id="radio-${index}" name="opsiPilihan" value="${teks}">
                <label for="radio-${index}">${teks}</label>
            </div>
        `;
    });

    html += `
            </div>
            <button type="button" id="btn-pilih-opsi">OK</button>
        </div>
    `;

    wadahDinamis.insertAdjacentHTML("beforeend", html);
    document.getElementById("btn-pilih-opsi").addEventListener("click", tampilkanFormEmail);
}

function tampilkanFormEmail() {
    const diPilih = document.querySelector('input[name="opsiPilihan"]:checked');

    if (!diPilih) {
        alert("Silakan pilih salah satu opsi terlebih dahulu!");
        return;
    }

    pilihanTerpilih = diPilih.value;
    document.querySelectorAll('input[name="opsiPilihan"]').forEach(el => el.disabled = true);
    document.getElementById("btn-pilih-opsi").disabled = true;
    const html = `
        <div class="step-card">
            <label for="email">Email :</label><br>
            <input type="text" id="email" placeholder="teks Email@domain.com"><br><br>
            <button type="button" id="btn-kirim-email">OK</button>
        </div>
    `;
    wadahDinamis.insertAdjacentHTML("beforeend", html);
    document.getElementById("btn-kirim-email").addEventListener("click", tampilkanHasilAkhir);
}

function tampilkanHasilAkhir() {
    const emailInput = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        alert("Format email tidak valid! Harap masukkan kembali dengan format: email@domain.com");
        return;
    }

    document.getElementById("email").disabled = true;
    document.getElementById("btn-kirim-email").disabled = true;
    const daftarPilihanTeks = arrayPilihan.join(", ");
    const kalimat = `Hallo, nama saya ${namaPengguna}, email ${emailInput} saya mempunyai sejumlah ${jumlahPilihan} pilihan yaitu ${daftarPilihanTeks}, dan saya memilih ${pilihanTerpilih}`;

    const html = `
        <div class="step-card">
            <div class="output-box">
                ${kalimat}
            </div>
        </div>
    `;

    wadahDinamis.insertAdjacentHTML("beforeend", html);
}