/**
 * AETHERIA — OSKA 2026/2027 SMKN 1 Ciomas
 * Centralized Configuration & Content Data
 * 
 * Mudah diedit sewaktu-waktu oleh tim kreatif / pengurus OSKA.
 */

export const LOGO_SVG_SRC = "/assets/logo-aetheria.svg";
export const LOGO_SRC = LOGO_SVG_SRC;
export const LOGO_DARK_SRC = LOGO_SVG_SRC;
export const LOGO_LIGHT_SRC = LOGO_SVG_SRC;

export const siteConfig = {
  organization: "OSKA 2026/2027",
  institution: "SMKN 1 CIOMAS",
  name: "AETHERIA",
  tagline: "Rise Beyond The Ordinary",
  closingQuote: "One Spirit, Endless Possibilities.",
  logoPath: LOGO_SVG_SRC,
  logoLightPath: LOGO_SVG_SRC,
  year: "2026/2027",
  emblems: [
    { name: "SMKN 1 Ciomas", short: "SKANIC", label: "Almamater" },
    { name: "OSIS SKANIC", short: "OSIS", label: "Organisasi Siswa" },
    { name: "MPK SKANIC", short: "MPK", label: "Majelis Perwakilan" },
  ]
};

export const aboutNarratives = [
  {
    index: "01",
    title: "What Is AETHERIA?",
    subtitle: "Makna Identitas Baru",
    content:
      "AETHERIA merupakan identitas yang merepresentasikan semangat, harapan, dan perjalanan baru OSKA 2026/2027. Terinspirasi dari keindahan langit, unsur alam, dan mitologi, AETHERIA hadir sebagai simbol dari sebuah awal yang penuh makna. Lebih dari sekadar nama, AETHERIA menggambarkan semangat untuk terus berkembang dan menciptakan perubahan."
  },
  {
    index: "02",
    title: "Latar Belakang AETHERIA",
    subtitle: "Gagasan Kelahiran Identitas",
    content:
      "AETHERIA tercipta dari gagasan untuk membangun sebuah identitas yang tidak hanya memiliki daya tarik visual, tetapi juga menyimpan cerita dan filosofi di dalamnya. Terinspirasi dari sosok Phoenix serta perpaduan unsur alam, identitas ini menggambarkan kekuatan, keseimbangan, kebebasan, dan harapan."
  },
  {
    index: "03",
    title: "Makna dan Tujuan AETHERIA",
    subtitle: "Pesan & Nilai Perjalanan",
    content:
      "AETHERIA menjadi representasi nilai dan semangat OSKA 2026/2027. Identitas ini membawa pesan tentang keberanian untuk memulai, kesiapan menghadapi perubahan, serta tekad untuk terus berkembang. AETHERIA juga menjadi pengingat bahwa setiap perjalanan besar selalu dimulai dari satu langkah kecil."
  },
  {
    index: "04",
    title: "Filosofi Terbentuknya AETHERIA",
    subtitle: "Sinergi Empat Unsur Abadi",
    content:
      "Terinspirasi dari Phoenix sebagai simbol kelahiran kembali, AETHERIA menggabungkan empat unsur yang saling melengkapi, yaitu api, air, angin, dan bintang. Keempatnya merepresentasikan keberanian, kebijaksanaan, kebebasan, dan harapan sebagai nilai yang menjadi dasar perjalanan ke depan."
  }
];

export const philosophyData = {
  logoPhilosophy:
    "Logo AETHERIA merupakan perpaduan berbagai simbol yang memiliki makna tersendiri. Phoenix menjadi elemen utama yang dikelilingi oleh unsur api, air, angin, dan bintang. Perpaduan tersebut menggambarkan kelahiran kembali, keseimbangan, perubahan, serta harapan untuk masa depan.",
  phoenixMeaning:
    "Phoenix merupakan burung mitologi yang dikenal dengan kisah kelahirannya kembali dari abu. Sosok ini melambangkan kebangkitan, keberanian, transformasi, dan harapan. Phoenix menjadi simbol bahwa setiap akhir dapat menjadi awal dari perjalanan yang baru.",
  elements: [
    {
      id: "fire",
      name: "Api",
      englishName: "Fire",
      symbol: "🔥",
      color: "#F6C86E",
      accent: "from-amber-500/20 to-orange-600/10",
      description:
        "Melambangkan keberanian, semangat, dan energi untuk menghadapi tantangan serta meraih tujuan.",
      detail: "Membakar keraguan, menyalakan dedikasi tanpa henti untuk mengabdi."
    },
    {
      id: "water",
      name: "Air",
      englishName: "Water",
      symbol: "💧",
      color: "#B8C8D8",
      accent: "from-sky-500/20 to-blue-700/10",
      description:
        "Melambangkan kebijaksanaan, ketenangan, dan keseimbangan dalam menghadapi berbagai keadaan.",
      detail: "Fleksibel mengarungi dinamika, senantiasa menyejukkan dan memulihkan."
    },
    {
      id: "wind",
      name: "Angin",
      englishName: "Wind",
      symbol: "🍃",
      color: "#D6E2ED",
      accent: "from-teal-400/20 to-slate-500/10",
      description:
        "Melambangkan kebebasan, perubahan, dan keterbukaan terhadap ide serta kesempatan baru.",
      detail: "Membawa embusan inovasi segar dan merangkul pemikiran progresif."
    },
    {
      id: "star",
      name: "Bintang",
      englishName: "Star",
      symbol: "✨",
      color: "#C9A96A",
      accent: "from-yellow-400/20 to-amber-600/10",
      description:
        "Melambangkan harapan, cita-cita, dan arah yang menjadi panduan dalam perjalanan menuju masa depan.",
      detail: "Kompas celestial pemandu langkah kepengurusan menuju puncak prestasi."
    }
  ],
  colors: [
    {
      name: "Antique Gold",
      hex: "#C9A96A",
      bgClass: "bg-[#C9A96A]",
      textDark: true,
      meaning: "Melambangkan kemuliaan, semangat, optimisme, dan harapan."
    },
    {
      name: "Royal Blue",
      hex: "#294B70",
      bgClass: "bg-[#294B70]",
      textDark: false,
      meaning: "Melambangkan ketenangan, kebijaksanaan, dan kepercayaan."
    },
    {
      name: "Silver Blue",
      hex: "#B8C8D8",
      bgClass: "bg-[#B8C8D8]",
      textDark: true,
      meaning: "Melambangkan keseimbangan, kebebasan, dan kejernihan."
    },
    {
      name: "Midnight Navy",
      hex: "#17283F",
      bgClass: "bg-[#17283F]",
      textDark: false,
      meaning: "Melambangkan kedalaman, keteguhan, dan misteri."
    }
  ]
};

export const directionData = {
  vision: {
    lead: "Visi Resmi OSKA 2026/2027",
    quote:
      "“Mewujudkan SMKN 1 Ciomas sebagai sekolah yang aktif, kreatif, solid, berprestasi, dan siap menghadapi dunia kerja melalui kolaborasi seluruh siswa.”",
    author: "OSKA 2026/2027 • SMKN 1 Ciomas"
  },
  missions: [
    {
      number: "01",
      title: "Aspirasi Siswa",
      desc: "Menampung dan menindaklanjuti aspirasi siswa."
    },
    {
      number: "02",
      title: "Bakat, Kreativitas & Prestasi",
      desc: "Mengembangkan bakat, kreativitas, dan prestasi siswa."
    },
    {
      number: "03",
      title: "Solidaritas & Kolaborasi",
      desc: "Meningkatkan solidaritas dan kolaborasi antar siswa."
    },
    {
      number: "04",
      title: "Kegiatan Aktif & Positif",
      desc: "Menciptakan kegiatan sekolah yang aktif, kreatif, dan positif."
    },
    {
      number: "05",
      title: "OSIS Terbuka & Bertanggung Jawab",
      desc: "Membangun OSIS yang terbuka, bertanggung jawab, dan dekat dengan siswa."
    }
  ],
  purpose: {
    title: "Tujuan Kepengurusan",
    text: "Kepengurusan OSKA 2026/2027 didedikasikan untuk membangun tonggak sejarah baru SMKN 1 Ciomas. Melalui fondasi AETHERIA, setiap program dirancang bukan hanya sebagai rutinitas seremonial, melainkan perjalanan pembelajaran yang mengasah kepemimpinan, kepedulian sosial, dan karakter unggul generasi muda penerus bangsa."
  },
  values: [
    {
      element: "Api",
      title: "Keberanian",
      latin: "Fortitudo",
      desc: "Keteguhan untuk memprakarsai langkah pertama dan menghadapi setiap tantangan dengan kepala tegak."
    },
    {
      element: "Air",
      title: "Kebijaksanaan",
      latin: "Sapientia",
      desc: "Kemampuan mendengar, menimbang keputusan secara jernih, dan menjaga keharmonisan bersama."
    },
    {
      element: "Angin",
      title: "Kebebasan Berkarya",
      latin: "Libertas",
      desc: "Keterbukaan terhadap gagasan segar, eksplorasi tanpa batas, serta kelenturan dalam beradaptasi."
    },
    {
      element: "Bintang",
      title: "Harapan Abadi",
      latin: "Spes Aeterna",
      desc: "Optimisme yang teguh menjadi lentera penunjuk arah demi masa depan yang gemilang."
    }
  ]
};

export const connectionChannels = [
  {
    platform: "Instagram OSIS",
    handle: "@osis.skanic",
    url: "https://instagram.com/osis.skanic",
    type: "Social Media",
    badge: "Official OSIS",
    desc: "Dokumentasi kegiatan, pengumuman agenda resmi, dan informasi kesiswaan SMKN 1 Ciomas."
  },
  {
    platform: "Instagram MPK",
    handle: "@mpksknc_",
    url: "https://instagram.com/mpksknc_",
    type: "Legislative Body",
    badge: "Official MPK",
    desc: "Aspirasi siswa, pengawasan program kerja, serta kabar lembaga permusyawaratan."
  },
  {
    platform: "TikTok OSKA",
    handle: "@oskaskanic",
    url: "https://tiktok.com/@oskaskanic",
    type: "Short Content",
    badge: "Creative Media",
    desc: "Video kreatif, recap keseruan acara, behind-the-scene kepengurusan, dan tren inspiratif."
  },
  {
    platform: "Email Resmi",
    handle: "oskaskanik@gmail.com",
    url: "mailto:oskaskanik@gmail.com",
    type: "Direct Inquiry",
    badge: "Official Correspondence",
    desc: "Korespondensi formal, proposal kolaborasi, undangan kegiatan, dan kemitraan eksternal."
  }
];
