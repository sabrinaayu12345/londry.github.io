// Efek hero typing (hanya jalan kalau ada elemen typingText)
const typingText = document.getElementById("typingText");
if (typingText) {
  const text = "Kami hadir untuk meringankan aktivitas Anda dengan layanan laundry modern.";
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting && index < text.length) {
      typingText.innerHTML = text.substring(0, index + 1);
      index++;
      setTimeout(typeEffect, 80);
    } 
    else if (isDeleting && index > 0) {
      typingText.innerHTML = text.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, 40);
    } 
    else {
      isDeleting = !isDeleting;
      setTimeout(typeEffect, 1000);
    }
  }

  typeEffect();
}

// 🔹 Fungsi inisialisasi AOS
function initAOS() {
  AOS.init({
    duration: 1200, // durasi animasi scroll (ms)
    once: true      // animasi hanya sekali
  });
}

// 🔹 Cek apakah ada loading screen
const loadingScreen = document.getElementById("loadingScreen");
const loadingText = document.getElementById("loadingText");
const mainContent = document.getElementById("mainContent");

if (loadingScreen && loadingText && mainContent) {
  // 🔹 Ada loading screen
  let dots = 0;
  const loadingInterval = setInterval(() => {
    dots = (dots + 1) % 4;
    loadingText.textContent = "Loading" + ".".repeat(dots);
  }, 500);

  setTimeout(() => {
    loadingScreen.style.display = "none";  // sembunyikan loading
    mainContent.style.display = "block";   // tampilkan konten
    clearInterval(loadingInterval);        // hentikan animasi titik

    initAOS(); // baru jalankan AOS setelah konten muncul
  }, 3000);

} else {
  // 🔹 Tidak ada loading screen → langsung jalanin AOS
  document.addEventListener("DOMContentLoaded", initAOS);
}
