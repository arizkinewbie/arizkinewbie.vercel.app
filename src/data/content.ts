/**
 * Data terstruktur — edit di sini, bukan di komponen.
 * Semua entri punya versi id + en.
 */

export type Locale = "id" | "en";

/* ---------- Kartu bukti kredibilitas ---------- */
export const proof = [
  {
    k: { id: "2026", en: "2026" },
    v: {
      id: "Narasumber National Law Forum, bersama Wamen Komdigi",
      en: "Speaker at the National Law Forum, with the Deputy Minister of Komdigi",
    },
  },
  {
    k: { id: "2", en: "2" },
    v: { id: "Perusahaan tech yang dipimpin & dibangun", en: "Technology companies led and built" },
  },
  {
    k: { id: "Telkomsel", en: "Telkomsel" },
    v: { id: "Best Talent IndonesiaNEXT Season 7", en: "Best Talent at IndonesiaNEXT Season 7" },
  },
  {
    k: { id: "Muratara", en: "Muratara" },
    v: {
      id: "Putra daerah Sumsel di panggung kebijakan nasional",
      en: "A South Sumatra native on the national policy stage",
    },
  },
] as const;

/* ---------- Empat pilar topik ---------- */
export const pillars = [
  {
    ico: "🤖",
    h: { id: "Tata Kelola AI", en: "AI Governance" },
    p: {
      id: "Perpres Etika & Peta Jalan AI, sandbox, pengawasan algoritma.",
      en: "AI Ethics & Roadmap Presidential Regulations, sandboxes, algorithmic oversight.",
    },
  },
  {
    ico: "🔐",
    h: { id: "Data & Privasi", en: "Data & Privacy" },
    p: {
      id: "UU PDP 27/2022, PP 33/2026, lembaga PDP, kedaulatan data.",
      en: "PDP Law 27/2022, GR 33/2026, the PDP authority, data sovereignty.",
    },
  },
  {
    ico: "📊",
    h: { id: "Ekonomi Digital", en: "Digital Economy" },
    p: {
      id: "Insentif, pajak digital, pendanaan, talenta teknologi.",
      en: "Incentives, digital tax, funding, technology talent.",
    },
  },
  {
    ico: "🏛️",
    h: { id: "Politik Kebijakan", en: "Policy Politics" },
    p: {
      id: "DPR Komisi I, RUU teknologi, konsultasi publik.",
      en: "House Commission I, technology bills, public consultation.",
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
    yr: { id: "2023", en: "2023" },
    t: { id: "IndonesiaNEXT Season 7 — Best Talent", en: "IndonesiaNEXT Season 7 — Best Talent" },
    m: { id: "Telkomsel", en: "Telkomsel" },
    href: "",
  },
  {
    yr: { id: "2023", en: "2023" },
    t: { id: "Bangkit Academy — Distinction Graduate", en: "Bangkit Academy — Distinction Graduate" },
    m: { id: "Google · GoTo · Traveloka", en: "Google · GoTo · Traveloka" },
    href: "",
  },
  {
    yr: { id: "2022", en: "2022" },
    t: { id: "Ketua BEM KHI", en: "Chairperson, BEM KHI" },
    m: { id: "Universitas Esa Unggul", en: "Esa Unggul University" },
    href: "",
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
