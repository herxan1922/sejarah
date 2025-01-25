document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('.table tr');
    
    // Menambahkan delay untuk setiap baris
    rows.forEach((row, index) => {
        row.style.animationDelay = `${index * 0.3}s`;  // Setiap baris muncul dengan delay 0.3 detik lebih lama
    });
});
