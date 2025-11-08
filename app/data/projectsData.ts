// GANTI SELURUH BLOK INTERFACE LAMA ANDA DENGAN INI
export interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
  features: string[]; // <-- Properti baru untuk fitur sudah ditambahkan
  techStack: string[];
  liveDemoUrl: string;
  repoUrl: {
    frontend?: string;
    backend?: string;
    main?: string;
  };
  collectionUrl?: string;
  // --- PERHATIKAN TANDA '?' DI BAWAH INI ---
  caseStudy?: {
    story: string;                  // Cerita wajib ada
    videoDemoUrl?: string;          // <-- '?' ditambahkan
    videoTestimoniUrl?: string;   // <-- '?' ditambahkan
    graphImageUrl?: string;         // <-- '?' ditambahkan
    ihtPhotoUrls?: string[];        // <-- '?' ditambahkan
    journalUrl?: string;            // <-- '?' ditambahkan
    announcementImageUrl?: string;  // <-- '?' ditambahkan
    eventPhotoUrls?: string[];      // <-- '?' ditambahkan
    officialDocUrl?: string;        // <-- '?' ditambahkan
  };
}
// Daftar semua proyek Anda
export const projects: Project[] = [

  {
    image: "/projects/cipta-ajar.jpg",
    title: "Cipta Ajar AI",
    category: "Studi Kasus: Product Lead & Validasi Dampak Bisnis",
    description: "Berawal dari identifikasi inefisiensi administrasi guru akibat perubahan kurikulum, saya memimpin pengembangan aplikasi AI ini untuk mengotomatisasi 4 dokumen ajar (Materi, Modul, Soal, LKPD).",
    features: [
      "Validasi Dampak (Metrik): Terbukti (data survei) menghemat >95% waktu administrasi guru (dari rata-rata >4 jam menjadi <15 menit).",
      "Validasi Kepemimpinan (IHT): Dipresentasikan sebagai Narasumber resmi di In-House Training (IHT) SMPN 3 Lakbok untuk melatih seluruh staf guru.",
      "Manajemen Produk (Peran): Merancang solusi web satu halaman (Gemini API) dan mengelola keseluruhan proses dari ide, desain, eksekusi teknis hingga validasi 7 guru pengguna aktif."
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Gemini API"],
    liveDemoUrl: "https://ciptaajar-denasurya.vercel.app/",
    repoUrl: {
      main: "https://github.com/denasurya/Cita-Ajar-demo-01",
    },
    caseStudy: {
      story: `
        <h2>Cerita (The "Why")</h2>
        <p>Berawal dari identifikasi inefisiensi administrasi guru akibat perubahan kurikulum, saya melihat guru kewalahan menghabiskan waktu berjam-jam (rata-rata >4 jam) hanya untuk administrasi. Saya berinisiatif memimpin pengembangan Cipta Ajar AI sebagai solusi 1-halaman untuk mengotomatisasi 4 dokumen ajar utama.</p>
        
        <h2>Peran Saya (The "How")</h2>
        <p>Saya bertindak sebagai <strong>Product Lead</strong> dari 0 ke 1. Karena saya 'sama sekali tidak tau koding', saya harus <em>resourceful</em>. Peran saya adalah:</p>
        <ul>
          <li><strong>Merancang Solusi:</strong> Mendesain alur web 1 halaman dan UI yang paling efisien.</li>
          <li><strong>Me-manage Eksekusi Teknis:</strong> Saya 'me-manage eksekusi teknis' dengan berkolaborasi intensif dengan tool AI Generatif (Google Gemini) sebagai 'developer' saya. Saya yang memberi 'perintah dan spesifikasi detail', lalu saya yang 'merakit dan mengimplementasikan' kodenya.</li>
        </ul>
        
        <h2>Bukti Dampak (The "Impact")</h2>
        <p>Produk ini tidak hanya jadi, tapi tervalidasi di lapangan:</p>
        <ul>
          <li><strong>Validasi Kepemimpinan:</strong> Saya <strong>ditunjuk sebagai Narasumber resmi</strong> di <strong>In-House Training (IHT) SMPN 3 Lakbok</strong> untuk melatih seluruh staf guru.</li>
          <li><strong>Validasi Metrik:</strong> Studi validasi terfokus pada <strong>7 guru pengguna aktif</strong> membuktikan Cipta Ajar AI <strong>menghemat >95% waktu administrasi</strong>.</li>
        </ul>
      `,
      videoDemoUrl: "https://youtu.be/FiDwBXWBfXU", // <-- Ganti dengan URL video demo
      videoTestimoniUrl: "https://youtu.be/FiDwBXWBfXU", // <-- Ganti dengan URL video guru [cite: user]
      graphImageUrl: "/projects/cipta-ajar-grafik.jpg", // <-- Ganti dengan path/nama screenshot grafik Google Form
      ihtPhotoUrls: [
        "/projects/foto-iht-1.jpg", // <-- Ganti dengan path foto Anda saat IHT [cite: user]
        "/projects/foto-jadwal.jpg" // <-- Ganti dengan path foto jadwal IHT [cite: user]
      ]
    }
  },
  {
    image: "/projects/vocality.jpg",
    title: "VOCALITY - AI Voice Training",
    category: "Studi Kasus: Product Lead & R&D Collaboration",
    description: "Mengembangkan aplikasi AI interaktif (berbasis ide Kepala Sekolah) untuk melatih pelafalan Bahasa Inggris guna mengatasi masalah kecemasan berbicara (84% siswa) dan kurangnya feedback personal.",
    features: [
      "Hasil Validasi (32 Siswa): Terbukti secara statistik (p<0.05) menaikkan skor rata-rata kemampuan siswa dari 62.50 menjadi 78.75.",
      "Kredensial: Makalah terpilih dan dipresentasikan di The 16th Annual International Symposium of Foreign Language Learning (AISOFOLL).",
      "Manajemen Produk (Peran): Menerjemahkan visi stakeholder (Kepala Sekolah) dengan merancang UI/UX dan memimpin eksekusi teknis dalam sebuah kolaborasi R&D model 4D."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel Serverless", "Gemini API"],
    liveDemoUrl: "https://vocality-training.vercel.app/",
    repoUrl: {
      main: "https://github.com/denasurya/vocaliti-final",
    },
    caseStudy: {
      story: `
      <h2>Cerita: Kolaborasi Stakeholder (The "Why")</h2>
      <p>Proyek ini adalah studi kasus <strong>kolaborasi tim</strong>. Idenya berawal dari <strong>Bapak Kepala Sekolah</strong> yang datang dengan *problem statement* (masalah) jelas: 84% siswa cemas berbicara Bahasa Inggris dan guru kewalahan memberi <em>feedback</em> personal.</p>

      <h2>Peran Saya: Technical Product Lead (The "How")</h2>
      <p>Peran saya adalah sebagai <strong>Technical Product Lead</strong> yang menerjemahkan visi tersebut menjadi produk nyata. Saya bertanggung jawab atas:</p>
    <ul>
    <li><strong>Menerjemahkan Visi Stakeholder:</strong> Saya merancang alur aplikasi berdasarkan kebutuhan spesifik Kepala Sekolah.</li>
    <li><strong>Me-manage Eksekusi Teknis:</strong> Saya 'me-manage eksekusi teknis' dengan berkolaborasi intensif dengan Google Gemini untuk membangun fitur analisis suara dan gambar (multimodal).</li>
    <li><strong>Menjelaskan Solusi Teknis:</strong> Saya fokus pada pengembangan produk dan menjelaskannya secara teknis kepada *stakeholder*.</li>
    </ul>

    <h2>Hasil Tim: Validasi Dampak (The "Impact")</h2>
    <p>Kami berkolaborasi erat dengan pembagian peran yang jelas:</p>
    <ul>
    <li><strong>Saya (Product Lead)</strong> fokus pada eksekusi teknis hingga produk siap divalidasi.</li>
    <li><strong>Bapak Kepala Sekolah (Domain Expert)</strong> fokus mengurus sisi **Validasi Akademis (R&D)**, termasuk perhitungan statistik dan presentasi di AISOFOLL.</li>
    </ul>
    <p>Hasil kolaborasi tim ini terbukti sukses:</p>
    <ul>
    <li><strong>Validasi Metrik (32 Siswa):</strong> Hasil <em>pre-test/post-test</em> membuktikan produk ini <strong>meningkatkan nilai kemahiran siswa secara signifikan (p<0.05)</strong>, menaikkan skor rata-rata dari <strong>62.50 menjadi 78.75</strong>.</li>
    <li><strong>Validasi Akademis:</strong> Makalah hasil R&D ini <strong>terpilih dan dipresentasikan</strong> di <strong>The 16th Annual International Symposium of Foreign Language Learning (AISOFOLL)</strong>.</li>
    </ul>
      `,
      
      videoTestimoniUrl: "https://youtu.be/nGpwnGeez0Y", // <-- Ganti dengan link YouTube "Unlisted" video Anda [cite: WhatsApp Video 2025-11-05 at 22.57.41.mp4]
      
      // --- SEMUA PATH FILE SEKARANG MENGGUNAKAN /projects/ ---
      journalUrl: "/projects/AISOFOLL_DenaSurya.pdf", // <-- Masukkan PDF Jurnal ke /public/projects/
      announcementImageUrl: "/projects/vocality-aisofoll-badge.jpg", // <-- Masukkan foto badge AISOFOLL ke /public/projects/
      officialDocUrl: "/projects/surat-dinas-vocality.pdf", // <-- Masukkan PDF Surat Dinas ke /public/projects/
      eventPhotoUrls: [
        "/projects/vocality-aisofoll-dena.jpg", 
        "/projects/aisofoll-grup.jpg"
      ]
    }
    // --- SAMPAI SINI ---
  },
  {
    image: "/projects/profile.jpg", // <-- (Lihat Catatan di bawah)
    title: "Web Profile Portofolio",
    category: "Studi Kasus: Product Lead & Personal Branding",
    description: "Merancang dan membangun website portofolio pribadi (website ini) untuk tujuan personal branding strategis, mengelola proses pengembangan dari konsep hingga deployment.",
    
    features: [
      "Strategi PM: Dirancang sebagai 'Studi Kasus' visual untuk membuktikan dampak (metrik & validasi), bukan hanya galeri proyek.",
      "Eksekusi 'Resourceful': Dikelola dan dieksekusi dari 0 ke 1 (ide, desain, deploy) menggunakan AI (Gemini) sebagai 'developer' resource.",
      "Sinkronisasi Penuh: 100% sinkron dengan narasi CV dan GitHub untuk menciptakan cerita personal branding yang konsisten sebagai Product Lead (AI & Edutech)."
    ],
    
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveDemoUrl: "https://denasuryagumilah.vercel.app/",
    repoUrl: {
      main: "https://github.com/denasurya/PORTFOLIO-TERAKHIR", // (Saya asumsikan ini link repo Anda dari)
    },

    // ==========================================================
    // INI ADALAH NARASI MODAL POP-UP UNTUK WEB PROFILE
    // ==========================================================
    caseStudy: {
      story: `
        <h2>Cerita (The "Why")</h2>
        <p>Sebagai bagian dari personal branding saya sebagai Product Lead, saya sadar CV statis (PDF) saja tidak cukup. Saya membutuhkan sebuah platform untuk <strong>menceritakan kisah lengkap</strong> di balik data dan membuktikan <em>dampak</em> nyata dari proyek saya (Cipta Ajar AI & VOCALITY).</p>
        <p>Website ini saya rancang sebagai <strong>Studi Kasus Personal Branding</strong> strategis saya, untuk menunjukkan (bukan hanya menceritakan) bagaimana saya berpikir sebagai PM.</p>
        
        <h2>Peran Saya (The "How")</h2>
        <p>Saya bertindak sebagai <strong>Product Lead</strong> untuk proyek internal ini. Saya bertanggung jawab atas keseluruhan proses:</p>
        <ul>
          <li><strong>Ideation & Desain:</strong> Saya merancang <em>user flow</em> dan desain UI/UX (termasuk modal studi kasus ini) agar fokus menceritakan 'dampak' (metrik) daripada 'fitur' teknis.</li>
          <li><strong>Me-manage Eksekusi Teknis:</strong> Sama seperti proyek lainnya, saya 'me-manage eksekusi teknis' dengan berkolaborasi intensif dengan Google Gemini untuk membangun kodenya menggunakan <strong>Next.js</strong> dan <strong>Tailwind CSS</strong>.</li>
          <li><strong>Deployment:</strong> Saya me-manage proses <em>deployment</em> dan <em>update</em> berkelanjutan di <strong>Vercel</strong>.</li>
        </ul>
        
        <h2>Bukti Dampak (The "Impact")</h2>
        <p>Hasilnya adalah platform yang sedang Anda lihat ini:</p>
        <ul>
          <li><strong>Bukti Eksekusi:</strong> Bukti nyata kemampuan saya mengeksekusi visi produk dari 0 (konsep) hingga 1 (<em>deployment</em> live).</li>
          <li><strong>Bukti Sinkronisasi:</strong> Sebuah platform yang 100% <strong>sinkron</strong> dengan narasi CV  dan GitHub saya, menciptakan cerita personal branding yang konsisten sebagai Product Lead (AI & Edutech).</li>
        </ul>
      `,
      // Kita bisa pakai screenshot halaman 'About' atau 'Hero' Anda
      graphImageUrl: "/projects/profile.jpg", 
    }
    // ==========================================================
    // AKHIR DARI PROYEK WEB PROFILE
    // ==========================================================
  }
];