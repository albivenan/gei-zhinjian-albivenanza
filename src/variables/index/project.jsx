import makanan from "../../assets/makanan.jpg";
import makanan_m from "../../assets/makanan1.jpg";
import bussiness from "../../assets/bussiness.jpg";
import educational from "../../assets/educational.jpg";
import government from "../../assets/government.jpg";
import booking from "../../assets/booking.jpg";
import portofolio from "../../assets/portofolio.jpg";

const project_item = [
  {
    project_image: makanan,
    name: "Makanan Penutup",
    jenis_website: "E-Commerce",
    description:
      "Struktur pada fitur di website ini cukup mampu untuk tempat makan atau restaurant yang membutuhkan jangkauan komunikasi yang besar. Menarik dan sederhana.",
    beli: "tidak", // Tambahkan nilai default
    harga: "Rp26.004.000",
  },
  {
    project_image: bussiness,
    name: "Pejuang Rupiah",
    jenis_website: "Bussiness",
    description:
      "Struktur pada fitur ini cocok untuk menampung penyimpanan berskala besar sekaligus memiliki sistem keamanan yang kuat. Cocok untuk perusahaan menengah.",
    beli: "ya",
    harga: "Rp76.883.000",
  },
  {
    project_image: portofolio,
    name: "Halo, Guys!",
    jenis_website: "Portofolio",
    description:
      "Memiliki komponen yang ringan sekaligus enak dipandang dikarenakan menggunakan teknik seni dalam melakukan design sehingga diharapkan mampu menarik perhatian orang-orang atau bos besar.",
    beli: "tidak", // Tambahkan nilai default
    harga: "Rp500.000.000",
  },
  {
    project_image: booking,
    name: "Hotel Mahal",
    jenis_website: "Booking",
    description:
      "Menggunakan teknologi versi terbaru dalam pengerjaannya. Sehingga memungkinkan mudah diakses di mana saja dan kapan saja.",
    beli: "ya",
    harga: "Rp.50.000.000",
  },
  {
    project_image: makanan_m,
    name: "Makan Gratis",
    jenis_website: "E-Commerce",
    description:
      "Sudah mendukung sistem transfer antar bank dan juga siap untuk bekerja sama dengan ojek online sebagai sarana penghubung makanan ke konsumen",
    beli: "ya",
    harga: "Rp125.080.600",
  },
  {
    project_image: educational,
    name: "Kuliah dan Makan",
    jenis_website: "Educational",
    description:
      "Dirancang dengan tampilan yang sederhana sehingga memudahkan pengguna untuk melakukan operasi terhadap website.",
    beli: "tidak", // Tambahkan nilai default
    harga: "Rp23.889.000",
  },
];

export { project_item };