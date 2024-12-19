// Ini Javascript
console.log('Javascript berhasil tersambung');

// Fungsi untuk memvalidasi form
function validateForm(event) {
    event.preventDefault(); // Mencegah form dikirimkan

    // Ambil nilai dari inputan form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;

    // Validasi Name: Tidak boleh kosong
    if (name === '') {
        alert('Nama Anda tidak boleh kosong');
        return;
    }

    // Validasi Email: Memastikan email sesuai format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Alamat email tidak valid');
        return;
    }

    // Validasi Interest: Harus memilih salah satu
    if (interest === '') {
        alert('Pilih paket yang Anda minati');
        return;
    }

    // Jika semua validasi berhasil
    // Update username di header
    document.getElementById('username-display').textContent = `Welcome, ${name}!`;

    console.log('Form valid dan siap dikirim');
}

let indexSlide = 0;
nextSlide();
function nextSlide() {
    showBanner(indexSlide += 1);
}
function showBanner(n) {
    const imageList = document.getElementsByClassName('banner-img');
    console.log(imageList);
    console.log(imageList.length);
    console.log(n);
    if (n > imageList.length - 1) indexSlide = 0;
    // Hide semua banner
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }
    // Show 1 Banner sesuai Posisi yang diinginkan
    imageList[indexSlide].style.display = "block";
}
// Automate banned slide
setInterval(nextSlide, 3000);