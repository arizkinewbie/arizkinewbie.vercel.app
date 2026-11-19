/**
 * Keystatic — CMS git-based opsional (fase 2).
 *
 * Mode local (default, gratis, nol akun):
 *   npm run cms   → buka http://localhost:4321/keystatic
 *
 * Mode GitHub (produksi, butuh OAuth App):
 *   set PUBLIC_KEYSTATIC_STORAGE=github + env GitHub di .env
 *
 * Konten yang dikelola lewat editor:
 *   - talks   → daftar panggung (src/data/talks.json)
 *   - briefs  → policy brief    (src/data/briefs.json)
 */

interface KeystaticConfig {
  storage: { kind: "local" } | { kind: "github"; repo: string };
  ui?: { brand?: { name: string } };
  collections: Record<string, unknown>;
}

const useGitHub = import.meta.env.PUBLIC_KEYSTATIC_STORAGE === "github";

const talksCollection = {
  label: "Daftar Panggung",
  slugField: "title",
  path: "src/data/talks/*",
  format: { data: "json" as const },
  schema: {
    year: { label: "Tahun", validation: { isRequired: true } },
    title: { label: "Judul forum / peran", validation: { isRequired: true } },
    org: { label: "Penyelenggara / institusi", validation: { isRequired: true } },
    href: { label: "Tautan bukti (opsional)" },
    order: { label: "Urutan tampil", validation: { isRequired: true } },
  },
};

const briefsCollection = {
  label: "Policy Brief",
  slugField: "title",
  path: "src/data/briefs/*",
  format: { data: "json" as const },
  schema: {
    title: { label: "Judul", validation: { isRequired: true } },
    summary: { label: "Ringkasan 1–2 baris", validation: { isRequired: true } },
    status: {
      label: "Status",
      options: [
        { label: "Segera", value: "soon" },
        { label: "Terbit", value: "published" },
      ],
      defaultValue: "soon",
    },
    href: { label: "Tautan PDF (opsional)" },
    order: { label: "Urutan tampil", validation: { isRequired: true } },
  },
};

const config: KeystaticConfig = {
  storage: useGitHub
    ? { kind: "github", repo: "arizkinewbie/arizkinewbie.vercel.app" }
    : { kind: "local" },
  ui: { brand: { name: "Arizki Putra Rahman" } },
  collections: {
    talks: talksCollection,
    briefs: briefsCollection,
  },
};

export default config;
