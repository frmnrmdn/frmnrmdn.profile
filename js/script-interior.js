// Inisialisasi Lenis untuk Smooth Scrolling
const lenis = new Lenis({
  autoRaf: true,
});

// Gunakan event Lenis agar navbar scroll detection tetap bekerja
lenis.on('scroll', function ({ scroll }) {
  const navbar = document.querySelector(".navbar");
  if (scroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
