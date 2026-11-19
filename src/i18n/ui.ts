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
    "hero.h1a": "Kebijakan AI",
    "hero.h1b": "ditentukan",
    "hero.h1c": "sebelum panggung.",
    "hero.sub":
      "Arizki Putra Rahman — CEO Nbie Solutions, CTO SymptoMed, narasumber tata kelola AI. Mengawal Perpres AI dan UU PDP dari meja kerja: policy brief, uji publik, dan implementasi di lapangan.",
    "hero.cta1": "Undang bicara",
    "hero.cta2": "Baca policy brief",
    "proof": "Rekam jejak",
    "about.kicker": "Halo, saya Arizki.",
    "about.h2a": "Dari Muratara",
    "about.h2b": "ke meja kebijakan.",
    "about.p1":
      "Saya mulai dari organisasi mahasiswa, lalu membangun dua perusahaan teknologi. Sekarang sebagian besar waktu saya habis di ruang yang jarang terlihat: membaca rancangan regulasi, menyusun masukan, dan menguji apakah aturan itu benar-benar bisa dijalankan oleh pelaku usaha kecil.",
    "about.p2":
      "Sebab itu saya bicara soal tata kelola AI bukan sebagai pengamat. Perpres yang sedang disusun menentukan apakah perusahaan seperti Nbie dan SymptoMed bisa tumbuh, atau justru tumbang oleh kepatuhan yang tidak masuk akal.",
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
    "hero.h1a": "AI policy",
    "hero.h1b": "is decided",
    "hero.h1c": "before the stage.",
    "hero.sub":
      "Arizki Putra Rahman — CEO of Nbie Solutions, CTO of SymptoMed, speaker on AI governance. Working the AI Presidential Regulation and Indonesia's data protection law from the desk: policy briefs, public consultation, and implementation on the ground.",
    "hero.cta1": "Invite to speak",
    "hero.cta2": "Read policy briefs",
    "proof": "Track record",
    "about.kicker": "Hi, I'm Arizki.",
    "about.h2a": "From Muratara",
    "about.h2b": "to the policy table.",
    "about.p1":
      "I started in student organisations, then built two technology companies. These days most of my time goes into rooms rarely seen: reading draft regulations, writing submissions, and testing whether the rules can actually be carried by small operators.",
    "about.p2":
      "That is why I talk about AI governance not as an observer. The Presidential Regulation now being drafted decides whether companies like Nbie and SymptoMed can grow, or collapse under compliance that makes no sense.",
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
