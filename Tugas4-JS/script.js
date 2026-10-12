const btnOkAwal = document.getElementById("btnOK");

btnOkAwal.addEventListener("click", function () {
    const nama = document.getElementById("nama").value.trim();
    const jumlah = parseInt(document.getElementById("jumlah").value);

    if (nama === "") {
        alert("Nama jangan dikosongkan!");
        return;
    }

    if (isNaN(jumlah) || jumlah <= 0) {
        alert("Masukkan jumlah lebih dari 0!");
        return;
    }

    const wadahPilih = document.getElementById("wadah-pilih");
    wadahPilih.innerHTML = "";
    let kontenHTML = "<br>";

    for (let i = 1; i <= jumlah; i++) {
        kontenHTML += `
            <label for="pilihan-${i}">Pilihan ${i} :</label><br>
            <input type="text" id="pilihan-${i}" class="input-pilihan" placeholder="Teks Pilihan ${i}"><br><br>
        `;
    }

    kontenHTML += `<button type="button" id="btn-ok-pilihan">OK</button>`;
    wadahPilih.innerHTML = kontenHTML;

    const daftarPilihan = [];
    
});