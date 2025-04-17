// NAMA AWAL

function replaceName() {
  let name = prompt("Halo, siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

// document.getElementById("gantiname").addEventListener("click", function () {
//   replaceName();
// });

// SLIDER

const slider = document.getElementById("slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let index = 0;
const totalSlides = slider.children.length;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});

// Auto slide (opsional)
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlider();
}, 5000);

// MESSAGE US SECTION
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tglLahir = document.getElementById("tglLahir").value;
  const pesan = document.getElementById("pesan").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const waktuSekarang = new Date().toString();

  document.getElementById("waktu").innerText = waktuSekarang;
  document.getElementById("outNama").innerText = nama;
  document.getElementById("outTglLahir").innerText = tglLahir;
  document.getElementById("outGender").innerText = gender;
  document.getElementById("outPesan").innerText = pesan;
});

// HAMBURGER
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
}
