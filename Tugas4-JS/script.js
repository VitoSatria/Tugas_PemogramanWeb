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
    .addEventListener("click", buatRadioPilihan);
});