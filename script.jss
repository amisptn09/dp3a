/**
 * Logika untuk mengaktifkan/menonaktifkan menu mobile (Hamburger Menu).
 * Menggunakan class 'hidden' dari Tailwind CSS untuk menyembunyikan/menampilkan.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan elemen tombol menu dan menu mobile
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Pastikan kedua elemen ditemukan
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            // Toggle class 'hidden' untuk menampilkan atau menyembunyikan menu
            mobileMenu.classList.toggle('hidden');

            // Opsional: Perbarui ikon tombol (misalnya, menjadi tanda X)
            const icon = menuButton.querySelector('svg path');
            if (mobileMenu.classList.contains('hidden')) {
                // Menu tersembunyi, tampilkan ikon hamburger
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            } else {
                // Menu ditampilkan, tampilkan ikon tutup (X)
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
        });
    }

    // Log sederhana di konsol
    console.log("Website DP3A berhasil dimuat. Skrip dan Menu Mobile siap.");
});
