const toggleBtn = document.getElementById("toggle-mode");
const icon = document.getElementById("mode-icon");

// Jalankan saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkModeStatus = localStorage.getItem("darkMode");

    // Terapkan mode gelap sesuai status localStorage
    if (darkModeStatus === "enabled") {
        body.classList.add("dark-mode");

        // Jika ada icon mode, ubah icon jadi matahari
        if (icon) {
            icon.classList.remove("bi-moon-stars-fill");
            icon.classList.add("bi-sun-fill");
        }
    } else {
        if (icon) {
            icon.classList.remove("bi-sun-fill");
            icon.classList.add("bi-moon-stars-fill");
        }
    }

    // Event toggle mode hanya jika tombol tersedia (misalnya di halaman utama)
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                if (icon) {
                    icon.classList.remove("bi-moon-stars-fill");
                    icon.classList.add("bi-sun-fill");
                }
            } else {
                localStorage.setItem("darkMode", "disabled");
                if (icon) {
                    icon.classList.remove("bi-sun-fill");
                    icon.classList.add("bi-moon-stars-fill");
                }
            }
        });
    }
});

// Fungsi preview sertifikat
function showPreview(src) {
    document.getElementById('previewImage').src = src;
}
