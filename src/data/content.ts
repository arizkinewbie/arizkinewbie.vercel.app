/**
 * Data terstruktur — edit di sini, bukan di komponen.
 * Semua entri punya versi id + en.
 */

export type Locale = "id" | "en";

/* ---------- Kartu bukti kredibilitas ---------- */
export const proof = [
  {
    k: { id: "Teknologi & AI", en: "Tech & AI" },
    v: {
      id: "Robot Otonom KRI 2021 & Co-Founder SymptoMed AI",
      en: "Autonomous Robot KRI 2021 & Co-Founder of SymptoMed AI",
    },
  },
  {
    k: { id: "Prestasi Nasional", en: "National Awards" },
    v: {
      id: "Best Talent IndonesiaNEXT Season 7 (Telkomsel) & Bangkit Distinction Graduate",
      en: "Best Talent Telkomsel IndonesiaNEXT Season 7 & Bangkit Distinction Graduate",
    },
  },
  {
    k: { id: "Kepemimpinan", en: "Leadership" },
    v: {
      id: "Ketua BEM KHI Esa Unggul, Inisiator ARTRAKTIF & Tokoh Pemuda Muratara",
      en: "Student Body President (BEM KHI), ARTRAKTIF Initiator & Muratara Youth Leader",
    },
  },
  {
    k: { id: "Advokasi & Regulasi", en: "Policy & Advocacy" },
    v: {
      id: "Narasumber National Law Forum 2026 bersama Wamen Komdigi & Pembangunan Daerah",
      en: "National Law Forum 2026 Speaker with Dep. Minister Komdigi & Regional Advocate",
    },
  },
] as const;

/* ---------- Empat pilar topik ---------- */
export const pillars = [
  {
    ico: "💻",
    h: { id: "Rekayasa Software & AI", en: "Software & AI Engineering" },
    p: {
      id: "Arsitektur cloud, full-stack scalable, robotika otonom (KRI 2021), & health-tech SymptoMed.",
      en: "Cloud architecture, scalable full-stack, autonomous robotics (KRI 2021), & health-tech SymptoMed.",
    },
  },
  {
    ico: "⚖️",
    h: { id: "Tata Kelola & Regulasi AI", en: "AI Governance & Policy" },
    p: {
      id: "Advokasi etika AI, regulatory sandbox, kedaulatan digital, narasumber National Law Forum 2026.",
      en: "AI ethics advocacy, regulatory sandbox, digital sovereignty, National Law Forum 2026 speaker.",
    },
  },
  {
    ico: "🔐",
    h: { id: "Privasi Data & Keamanan", en: "Data Privacy & Security" },
    p: {
      id: "Kepatuhan UU PDP 27/2022, autentikasi dokumen tamper-proof QR-JWT, dan hardening sistem.",
      en: "PDP Law 27/2022 compliance, tamper-proof QR-JWT doc verification, and system hardening.",
    },
  },
  {
    ico: "📢",
    h: { id: "Advokasi Publik & Daerah", en: "Grassroots & Regional Impact" },
    p: {
      id: "Aksi jembatan publik Muratara (GAASS), pemberdayaan pemuda desa (IRMMR), dan talenta daerah.",
      en: "Muratara public bridge action (GAASS), village youth empowerment (IRMMR), and regional talent.",
    },
  },
] as const;

/* ---------- Rekam jejak panggung ---------- */
export const talks = [
  {
    yr: { id: "2026", en: "2026" },
    t: {
      id: "National Law Forum — Tata Kelola AI & Kedaulatan Digital",
      en: "National Law Forum — AI Governance & Digital Sovereignty",
    },
    m: { id: "DPN PERMAHI · Jakarta", en: "DPN PERMAHI · Jakarta" },
    href: "https://stitml.ac.id/artikel/putra-daerah-sumsel-asal-muratara-arizki-putra-rahman-bicara-tata-kelola-ai-di-national-law-forum-2026",
  },
  {
    yr: { id: "2025", en: "2025" },
    t: {
      id: "Advokasi Hak Publik & Penolakan Komersialisasi Jembatan",
      en: "Public Advocacy Against Bridge Access Commercialisation",
    },
    m: { id: "GAASS · Musi Rawas Utara", en: "GAASS · Musi Rawas Utara" },
    href: "https://rakyatempatlawang.disway.id/read/670393/gaass-musi-rawas-utara-protes-komersialisasi-akses-publik-desak-pemerintah-segera-bangun-ulang-jembatan/15",
  },
  {
    yr: { id: "2023", en: "2023" },
    t: { id: "IndonesiaNEXT Season 7 — Best Talent", en: "IndonesiaNEXT Season 7 — Best Talent" },
    m: { id: "Telkomsel", en: "Telkomsel" },
    href: "https://jalurinformasi.com/anak-mantan-ketua-pwi-muratara-menjadi-best-talent-indonesianext-season-7/",
  },
  {
    yr: { id: "2023", en: "2023" },
    t: { id: "Bangkit Academy — Distinction Graduate", en: "Bangkit Academy — Distinction Graduate" },
    m: { id: "Google · GoTo · Traveloka", en: "Google · GoTo · Traveloka" },
    href: "",
  },
  {
    yr: { id: "2022", en: "2022" },
    t: { id: "Ketua BEM KHI & Inisiator ARTRAKTIF", en: "Chairperson, BEM KHI & ARTRAKTIF Convenor" },
    m: { id: "Universitas Esa Unggul (Liputan Tempo.co)", en: "Esa Unggul University (Tempo.co)" },
    href: "https://event.tempo.co/read/1665679/fakultas-desain-dan-industri-universitas-esa-unggul-bekasi-sukses-selenggarakan-artraktif",
  },
  {
    yr: { id: "2022", en: "2022" },
    t: { id: "Program Kreativitas Mahasiswa (PKM) Riset Teknologi", en: "Student Creativity Programme (PKM) Applied Research" },
    m: { id: "Kemendikbudristek · Esa Unggul", en: "Ministry of Education & Esa Unggul" },
    href: "https://fin.co.id/read/87267/jelang-kompetisi-pkm-2022-universitas-esa-unggul-lakukan-persiapan-khusus",
  },
  {
    yr: { id: "2021", en: "2021" },
    t: { id: "Kontes Robot Indonesia (KRI 2021) — Robot Otonom Damkar 'Esgul Fire'", en: "Indonesian Robot Contest (KRI 2021) — Autonomous Firefighter 'Esgul Fire'" },
    m: { id: "Puspresnas (Liputan Tribunnews)", en: "Puspresnas (Tribunnews Coverage)" },
    href: "https://www.tribunnews.com/sains/2021/10/05/robot-damkar-otonom-berkaki-tingkat-buatan-mahasiswa-ueu-curi-perhatian-di-kontes-kri-2021",
  },
  {
    yr: { id: "2021", en: "2021" },
    t: { id: "Inisiator Seminar Kepemudaan 'Pemuda Kunci Pembangunan Desa'", en: "Youth Seminar Convenor 'Youth as the Key to Village Development'" },
    m: { id: "IRMMR & Karang Taruna Desa Remban", en: "IRMMR & Remban Youth Union" },
    href: "https://coganews.co.id/2021/02/14/pemuda-kunci-pembangunan-desa-irmmr-bersama-karang-taruna-desa-remban-sukses-adakan-seminar-kepemudaan/",
  },
  {
    yr: { id: "2019", en: "2019" },
    t: { id: "Inisiator Advokasi Transparansi Hak Siswa SMAN Surulangun", en: "Student Rights & Transparency Advocacy Initiator" },
    m: { id: "Muratara (Liputan Tribun Palembang)", en: "Muratara (Tribun Palembang Coverage)" },
    href: "https://palembang.tribunnews.com/2019/10/14/minta-ganti-kepsek-ratusan-siswa-sman-surulangun-kabupaten-muratara-demo-di-jalinsum",
  },
] as const;

/* ---------- Policy brief (placeholder — ganti saat tulisan siap) ---------- */
export const briefs = [
  {
    ico: "📄",
    t: {
      id: "Perpres AI: yang diatur dan yang sengaja dibiarkan",
      en: "The AI Regulation: what it covers and what it leaves open",
    },
    p: {
      id: "Membaca dua RPP final — etika dan peta jalan — dari sisi pelaku usaha.",
      en: "Reading the two final drafts — ethics and roadmap — from an operator's side.",
    },
    status: { id: "SEGERA", en: "SOON" },
    href: "",
  },
  {
    ico: "📄",
    t: {
      id: "PP 33/2026: apa yang berubah untuk data pasien",
      en: "GR 33/2026: what changes for patient data",
    },
    p: {
      id: "Dampak langsung ke produk kesehatan digital dan AI diagnostik.",
      en: "Direct impact on digital health products and diagnostic AI.",
    },
    status: { id: "SEGERA", en: "SOON" },
    href: "",
  },
  {
    ico: "📄",
    t: {
      id: "Kedaulatan data tanpa industri dalam negeri",
      en: "Data sovereignty without a domestic industry",
    },
    p: {
      id: "Kritik atas kebijakan data center yang tidak menyentuh kapasitas lokal.",
      en: "A critique of data centre policy that never touches local capacity.",
    },
    status: { id: "SEGERA", en: "SOON" },
    href: "",
  },
  {
    ico: "📄",
    t: {
      id: "Talenta digital daerah: yang tidak masuk roadmap",
      en: "Regional tech talent: what the roadmap leaves out",
    },
    p: {
      id: "Perspektif Sumsel dan Muratara atas peta jalan AI nasional.",
      en: "A South Sumatra and Muratara perspective on the national AI roadmap.",
    },
    status: { id: "SEGERA", en: "SOON" },
    href: "",
  },
] as const;

/* ---------- Karya / perusahaan ---------- */
export const works = [
  {
    role: { id: "Founder & CEO", en: "Founder & CEO" },
    name: "Nbie Solutions",
    p: {
      id: "Tech & AI solutions, policy brief, talent, dan amplifikasi digital. Melayani organisasi dan institusi.",
      en: "Tech & AI solutions, policy briefs, talent, and digital amplification. Serving organisations and institutions.",
    },
    href: "https://nbies.id",
    light: false,
  },
  {
    role: { id: "Co-Founder & CTO", en: "Co-Founder & CTO" },
    name: "SymptoMed",
    p: {
      id: "Health-tech dengan AI untuk analisis gejala dan rujukan fasilitas kesehatan. Produk di Google Play.",
      en: "Health-tech using AI for symptom analysis and health facility referral. Available on Google Play.",
    },
    href: "https://symptomed.id",
    light: true,
  },
] as const;

/* ---------- Arsip Liputan Media & Berita Terverifikasi ---------- */
export const pressReleases = [
  {
    publisher: "Tempo.co",
    year: "2022",
    tag: { id: "Kepemimpinan Kampus", en: "Student Leadership" },
    title: {
      id: "Fakultas Desain dan Industri Kreatif UEU Bersama BEM KHI Sukses Selenggarakan ARTRAKTIF",
      en: "FDIK Esa Unggul and BEM KHI Successfully Convene ARTRAKTIF Event",
    },
    url: "https://event.tempo.co/read/1665679/fakultas-desain-dan-industri-universitas-esa-unggul-bekasi-sukses-selenggarakan-artraktif",
    badge: "Media Nasional",
  },
  {
    publisher: "Tribunnews.com",
    year: "2021",
    tag: { id: "Robotika & Inovasi", en: "Robotics & Innovation" },
    title: {
      id: "Robot Damkar Otonom Berkaki Tingkat 'Esgul Fire' Buatan Mahasiswa UEU Curi Perhatian di KRI 2021",
      en: "Autonomous Firefighter Robot 'Esgul Fire' Catches National Spotlight at KRI 2021",
    },
    url: "https://www.tribunnews.com/sains/2021/10/05/robot-damkar-otonom-berkaki-tingkat-buatan-mahasiswa-ueu-curi-perhatian-di-kontes-kri-2021",
    badge: "Media Nasional",
  },
  {
    publisher: "Investor Daily (Investor.id)",
    year: "2021",
    tag: { id: "Teknologi Terapan", en: "Applied Tech" },
    title: {
      id: "Robot Buatan Mahasiswa UEU 'Esgul Fire' Berlaga di Kontes Robot Indonesia 2021",
      en: "Esa Unggul Student Robot 'Esgul Fire' Competes in Kontes Robot Indonesia 2021",
    },
    url: "https://investor.id/national/265866/robot-buatan-mahasiswa-ueu-quotesgul-firequot-berlaga-di-kontes-robot-indonesia-2021",
    badge: "Media Nasional",
  },
  {
    publisher: "Rakyat Merdeka (RM.id)",
    year: "2021",
    tag: { id: "Robotika", en: "Robotics" },
    title: {
      id: "Robot Buatan Mahasiswa UEU 'Esgul Fire' Ramaikan Kontes Robot Indonesia 2021",
      en: "Student-Built Robot 'Esgul Fire' Enlivens Kontes Robot Indonesia 2021",
    },
    url: "https://rm.id/baca-berita/etalase-bisnis/93931/robot-buatan-mahasiswa-ueu-quotesgul-firequot-ramaikan-kontes-robot-indonesia-2021",
    badge: "Media Nasional",
  },
  {
    publisher: "Disway Network (Palpres)",
    year: "2022",
    tag: { id: "Organisasi Kampus", en: "Campus Governance" },
    title: {
      id: "Pemuda Asli Desa Remban Muratara Terpilih Jadi Ketua BEM KHI Universitas Esa Unggul",
      en: "Remban Native Youth Elected Chairperson of BEM KHI Universitas Esa Unggul",
    },
    url: "https://palpres.disway.id/read/422227/pemuda-asli-desa-remban-muratara-terpilih-ketua-bem-khi-ueu",
    badge: "Disway Network",
  },
  {
    publisher: "Disway Network (Rakyat Empat Lawang)",
    year: "2025",
    tag: { id: "Advokasi Publik", en: "Public Advocacy" },
    title: {
      id: "GAASS Musi Rawas Utara Protes Komersialisasi Akses Publik, Desak Pemerintah Segera Bangun Jembatan",
      en: "GAASS Protests Commercialisation of Public River Crossing, Demands Immediate Bridge Reconstruction",
    },
    url: "https://rakyatempatlawang.disway.id/read/670393/gaass-musi-rawas-utara-protes-komersialisasi-akses-publik-desak-pemerintah-segera-bangun-ulang-jembatan/15",
    badge: "Disway Network",
  },
  {
    publisher: "Jalur Informasi",
    year: "2023",
    tag: { id: "Talenta Digital", en: "Digital Talent" },
    title: {
      id: "Anak Mantan Ketua PWI Muratara Menjadi Best Talent IndonesiaNEXT Season 7 Telkomsel",
      en: "Former Regional Press Head's Son Crowned Telkomsel IndonesiaNEXT Season 7 Best Talent",
    },
    url: "https://jalurinformasi.com/anak-mantan-ketua-pwi-muratara-menjadi-best-talent-indonesianext-season-7/",
    badge: "Prestasi Telkomsel",
  },
  {
    publisher: "Harian Negeri",
    year: "2025",
    tag: { id: "Advokasi Kebijakan", en: "Public Policy" },
    title: {
      id: "Masyarakat Lesung Batu Menjerit Satu Tahun Tanpa Jembatan, Akses Publik Malah Diberi Harga",
      en: "Lesung Batu Community Plight: One Year Without Bridge, Public Access Monetised",
    },
    url: "https://hariannegeri.com/masyarakat-lesung-batu-menjerit-satu-tahun-tanpa-jembatan-akses-publik-malah-diberi-harga",
    badge: "Advokasi Sosial",
  },
  {
    publisher: "CogaNews",
    year: "2021",
    tag: { id: "Gerakan Pemuda", en: "Youth Leadership" },
    title: {
      id: "Pemuda Kunci Pembangunan Desa: IRMMR & Karang Taruna Desa Remban Sukses Gelar Seminar Kepemudaan",
      en: "Youth as Engine of Rural Development: IRMMR & Youth Union Convene Youth Summit",
    },
    url: "https://coganews.co.id/2021/02/14/pemuda-kunci-pembangunan-desa-irmmr-bersama-karang-taruna-desa-remban-sukses-adakan-seminar-kepemudaan/",
    badge: "Daerah",
  },
  {
    publisher: "Tribunnews Palembang",
    year: "2019",
    tag: { id: "Integritas Sekolah", en: "Education Integrity" },
    title: {
      id: "Ratusan Siswa SMAN Surulangun Muratara Bergerak Tuntut Transparansi dan Kepemimpinan Bersih",
      en: "Hundreds of Surulangun High School Students Mobilise Demanding Transparency & Accountable Leadership",
    },
    url: "https://palembang.tribunnews.com/2019/10/14/minta-ganti-kepsek-ratusan-siswa-sman-surulangun-kabupaten-muratara-demo-di-jalinsum",
    badge: "Tribun Network",
  },
] as const;
