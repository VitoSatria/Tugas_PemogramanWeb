let namaPengguna = "";
let jumlahPilihan = 0;
let arrayPilihan = [];
let pilihanTerpilih = "";

const btnOk1 = document.getElementById("btn-ok-1");
const wadahDinamis = document.getElementById("wadah-dinamis");

btnOk1.addEventListener("click", function () {
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
    btnOk1.disabled = true;

    
    tampilkanTahap2();
});