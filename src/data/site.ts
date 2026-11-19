/** Kontak & tautan — satu sumber kebenaran. */
// SITE_URL dipakai untuk staging (arizkinewbie.nbies.id) vs produksi (arizkinewbie.com).
const SITE_URL = process.env.SITE_URL || "https://arizkinewbie.com";

export const site = {
  name: "Arizki Putra Rahman",
  domain: new URL(SITE_URL).hostname,
  url: SITE_URL,
  email: "arizki@nbies.id",
  phone: "+62 822-8948-6808",
  phoneRaw: "6282289486808",
  linkedin: "https://linkedin.com/in/arizkinewbie",
  instagram: "https://instagram.com/arizkinewbie",
  github: "https://github.com/arizkinewbie",
  nbies: "https://nbies.id",
  symptomed: "https://symptomed.id",
} as const;

/** Tiga varian pesan WhatsApp — pola CTA dari situs acuan. */
export const waIntent = {
  speak: {
    id: "Halo Arizki, saya ingin mengundang Anda sebagai narasumber untuk acara kami. Berikut detail acaranya:",
    en: "Hi Arizki, I would like to invite you as a speaker for our event. Here are the details:",
    label: { id: "Undang bicara", en: "Invite to speak" },
    desc: {
      id: "Keynote, panel, atau diskusi publik soal AI & data.",
      en: "Keynote, panel, or public discussion on AI & data.",
    },
  },
  brief: {
    id: "Halo Arizki, saya ingin berdiskusi soal policy brief atau kajian regulasi.",
    en: "Hi Arizki, I would like to discuss a policy brief or regulatory research.",
    label: { id: "Policy brief", en: "Policy brief" },
    desc: {
      id: "Kajian regulasi, masukan kebijakan, riset pendukung.",
      en: "Regulatory analysis, policy input, supporting research.",
    },
  },
  work: {
    id: "Halo Arizki, saya ingin berdiskusi soal kerja sama proyek teknologi atau AI.",
    en: "Hi Arizki, I would like to discuss a technology or AI project collaboration.",
    label: { id: "Kerja sama", en: "Collaboration" },
    desc: {
      id: "Proyek tech/AI, amplifikasi, atau kerja sama institusional.",
      en: "Tech/AI projects, amplification, or institutional partnership.",
    },
  },
} as const;

export type WaIntent = keyof typeof waIntent;

/** Bangun tautan WhatsApp dengan pesan terisi otomatis. */
export function waLink(intent: WaIntent, lang: "id" | "en" = "id"): string {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(waIntent[intent][lang])}`;
}
