/**
 * Kamus UI dua bahasa.
 * Menambah bahasa = tambah kunci di sini + locales di astro.config.mjs.
 */
export const languages = { id: "Bahasa Indonesia", en: "English" } as const;
export const defaultLang = "id" as const;
export type Lang = keyof typeof languages;

export const ui = {
  id: {
    "site.title": "Arizki Putra Rahman",
    "site.tagline": "Tata Kelola AI & Kebijakan Teknologi",
    "nav.panggung": "Panggung",
    "nav.pemikiran": "Pemikiran",
    "nav.karya": "Karya",
    "nav.tentang": "Tentang",
    "nav.kontak": "Kontak",
    "skip": "Langsung ke isi",
    "hero.h1a": "Membangun Kode,",
    "hero.h1b": "Menantang Kebijakan.",
    "hero.h1c": "Bukan Pengamat.",
    "hero.sub":
      "Arizki Putra Rahman (@arizkinewbie) — Software Engineer, CEO Nbie Solutions, CTO SymptoMed, Best Talent Telkomsel, dan Aktivis Advokasi. Berangkat dari Desa Remban (Muratara) hingga panggung National Law Forum bersama Wamen Komdigi: membuktikan bahwa teknologi harus membumi, berdampak nyata, dan berani mengawal regulasi.",
    "hero.cta1": "Undang bicara",
    "hero.cta2": "Baca policy brief",
    "proof": "Rekam jejak",
    "about.kicker": "Prinsip: 'Mulai Aja Dulu.'",
    "about.h2a": "Teknologi Terapan,",
    "about.h2b": "Advokasi Tanpa Kompromi.",
    "about.p1":
      "Saya lahir di Desa Remban (Muratara), belajar merakit robot otonom di laboratorium, memimpin ribuan mahasiswa sebagai Ketua BEM Esa Unggul, hingga mendirikan Nbie Solutions dan SymptoMed Healthtech. Saya bukan akademisi yang hanya bicara konsep di menara gading — saya menulis kode, membangun infrastruktur server, dan turun ke lapangan membela hak akses publik warga.",
    "about.p2":
      "Ketika saya berbicara tentang tata kelola AI dan UU PDP di National Law Forum bersama pimpinan kementerian, suara saya berangkat dari meja kerja: memastikan regulasi teknologi melindungi masyarakat tanpa mematikan ruang gerak inovator lokal dan pelaku usaha kecil.",
    "about.cta1": "Lihat rekam jejak",
    "about.cta2": "Hubungi saya",
    "panggung.h2": "Panggung",
    "panggung.sub": "Forum, panel, dan uji publik tempat saya bicara soal tata kelola AI dan regulasi digital.",
    "panggung.note": "Ingin versi lengkap (topik, durasi, rider teknis)? Minta media kit lewat WhatsApp.",
    "pemikiran.h2": "Pemikiran",
    "pemikiran.sub": "Policy brief dan catatan regulasi — bukan blog harian. Hanya yang selesai.",
    "pemikiran.cta": "Minta brief lengkap",
    "karya.h2": "Karya",
    "karya.sub": "Bukti bahwa saya bukan cuma bicara soal regulasi — saya juga menjalankan yang diatur.",
    "kontak.h2a": "Mari bicara",
    "kontak.h2b": "soal yang substantif.",
    "kontak.sub": "Pilih kebutuhan Anda — pesan WhatsApp-nya sudah terisi otomatis, langsung ke saya.",
    "kontak.direct": "Kontak langsung",
    "kontak.mediakit":
      "Untuk media & panitia acara: minta media kit (bio 100 kata, foto resolusi tinggi, daftar topik).",
    "footer.rights": "Seluruh hak cipta dilindungi.",
    "lang.switch": "Ganti bahasa",
  },
  en: {
    "site.title": "Arizki Putra Rahman",
    "site.tagline": "AI Governance & Technology Policy",
    "nav.panggung": "Speaking",
    "nav.pemikiran": "Writing",
    "nav.karya": "Work",
    "nav.tentang": "About",
    "nav.kontak": "Contact",
    "skip": "Skip to content",
    "hero.h1a": "Engineering Code,",
    "hero.h1b": "Shaping Policy.",
    "hero.h1c": "Not an Observer.",
    "hero.sub":
      "Arizki Putra Rahman (@arizkinewbie) — Software Engineer, CEO of Nbie Solutions, CTO of SymptoMed, Telkomsel Best Talent, and Civil Advocate. From Remban Village (Muratara) to the National Law Forum alongside the Deputy Minister of Komdigi: living proof that technology must be grounded in reality, fiercely accountable, and rooted in community.",
    "hero.cta1": "Invite to speak",
    "hero.cta2": "Read policy briefs",
    "proof": "Track record",
    "about.kicker": "Principle: 'Start Where You Are.'",
    "about.h2a": "Applied Engineering,",
    "about.h2b": "Uncompromising Advocacy.",
    "about.p1":
      "Born in Remban Village (Muratara), I engineered autonomous robots in university labs, governed as student union president at Esa Unggul, and founded Nbie Solutions alongside SymptoMed Healthtech. I am not an ivory-tower theorist — I deploy production code, maintain resilient server infrastructure, and advocate for public rights on the ground.",
    "about.p2":
      "When I deliberate on AI governance and national privacy laws alongside government ministers, my arguments are anchored in technical reality: ensuring technological frameworks protect sovereignty without strangling regional innovators and grassroots developers.",
    "about.cta1": "See track record",
    "about.cta2": "Get in touch",
    "panggung.h2": "Speaking",
    "panggung.sub": "Forums, panels and public consultations where I speak on AI governance and digital regulation.",
    "panggung.note": "Need the full version (topics, duration, tech rider)? Request the media kit on WhatsApp.",
    "pemikiran.h2": "Writing",
    "pemikiran.sub": "Policy briefs and regulatory notes — not a daily blog. Only what is finished.",
    "pemikiran.cta": "Request full briefs",
    "karya.h2": "Work",
    "karya.sub": "Evidence that I don't only talk about regulation — I run what gets regulated.",
    "kontak.h2a": "Let's talk",
    "kontak.h2b": "about something substantive.",
    "kontak.sub": "Pick what you need — the WhatsApp message is pre-filled and goes straight to me.",
    "kontak.direct": "Direct contact",
    "kontak.mediakit":
      "For media & event organisers: request the media kit (100-word bio, high-res photo, topic list).",
    "footer.rights": "All rights reserved.",
    "lang.switch": "Switch language",
  },
} as const;

export type UIKey = keyof (typeof ui)["id"];

/** Ambil fungsi penerjemah untuk satu bahasa. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key];
  };
}
