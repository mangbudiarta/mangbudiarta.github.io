// Navbar Scroll
var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 45) {
    nav.classList.add("bg-light", "shadow-sm");
  } else {
    nav.classList.remove("bg-light", "shadow-sm");
  }
});

// Function add alert error form
var error = document.querySelector('.alert-danger');
function addError() {
    error.innerHTML = 'Formulir tidak boleh kosong';
    error.style.display = 'block';
}
var form = document.querySelector('.form');

// Function validasi contact form
function validasi(event) {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var messages = document.getElementById("messages").value;
    event.preventDefault();
    error.style.display = 'none';
    if (nama == "" || email == "" || messages == "" || subject == "") {
        addError();
    } else {
        alert("Terimakasih atas pertanyaan Anda, silahkan cek email untuk informasi dan jawaban");
        window.location.reload();
    }
}
form.addEventListener('submit', validasi);

// Function validasi join form
function validasiForm(event) {
    var namaUser = document.getElementById("namaUser").value;
    var emailUser = document.getElementById("emailUser").value;
    var phone = document.getElementById("phone").value;
    var umkm = document.getElementById("nameUmkm").value;
    var description = document.getElementById("description").value;
    event.preventDefault();
    error.style.display = 'none';
    if (namaUser == "" || emailUser == "" || phone == "" || umkm == "" || description == "") {
        addError();
    } else {
        alert("Terimakasih telah mendaftar, silahkan cek email untuk informasi lebih lanjut");
        window.location.reload();
    }
}
form.addEventListener('submit', validasiForm);