// Ambil elemen input
const judulInput = document.getElementById("judul");
const penulisInput = document.getElementById("penulis");
const sinopsisInput = document.getElementById("sinopsis");
const alasanInput = document.getElementById("alasan");
const ratingInput = document.getElementById("rating");

// Ambil elemen preview
const previewJudul = document.getElementById("preview-judul");
const previewPenulis = document.getElementById("preview-penulis");
const previewSinopsis = document.getElementById("preview-sinopsis");
const previewAlasan = document.getElementById("preview-alasan");
const previewRating = document.getElementById("preview-rating");

// Fungsi untuk memperbarui pratinjau secara real-time
function updatePreview() {
  previewJudul.textContent = judulInput.value || "Judul Buku";
  previewPenulis.textContent = penulisInput.value || "Penulis Buku";
  previewSinopsis.textContent =
    sinopsisInput.value || "Sinopsis akan muncul di sini.";
  previewAlasan.textContent =
    alasanInput.value || "Alasan rekomendasi akan muncul di sini.";
  previewRating.textContent = ratingInput.value
    ? `Rating: ${ratingInput.value}`
    : "Rating: -";
}

// Pasang event listener untuk setiap input
[judulInput, penulisInput, sinopsisInput, alasanInput, ratingInput].forEach(
  (input) => input.addEventListener("input", updatePreview)
);
console.log("selesai");
