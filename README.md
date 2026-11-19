# arizkinewbie.com

Situs personal Arizki Putra Rahman — posisi: **operator tech policy** (tata kelola AI, regulasi digital & data, ekonomi digital), bukan portfolio developer.

Dibangun ulang dari nol dengan **Astro 7.4.13 + Tailwind CSS v4.3.5**, deploy statis ke **Cloudflare Pages**.

---

## Untuk Putra — langkah takeover

### 1. Clone & install

```bash
git clone https://github.com/arizkinewbie/arizkinewbie.vercel.app.git
cd arizkinewbie.vercel.app
git checkout rebuild/astro7
npm install          # 291 paket, 0 vulnerability
```

### 2. Jalankan lokal

```bash
npm run dev          # http://localhost:4321 → redirect ke /id/
npm run build        # output ke dist/
npm run preview      # cek hasil build
```

### 3. Deploy ke Cloudflare Pages

| Setting | Nilai |
|---|---|
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` atau lebih baru (dev di sini v26.12.1) |
| Environment variables | tidak ada (nol) |

Custom domain: `arizkinewbie.com` + `www.arizkinewbie.com`. Cloudflare Pages memberi SSL otomatis.
DNS saat ini di DomaiNesia (`ragna.id.domainesia.com`) — arahkan `CNAME` ke `<project>.pages.dev`
atau pindahkan nameserver ke Cloudflare.

> Alternatif cepat: repo ini juga bisa langsung dipasang di Vercel (nama repo masih menyebut vercel).
> Keduanya gratis untuk situs statis; pilih **satu** jalur, jangan dua-duanya.

---

## Struktur proyek

```
arizki-repo/
├── astro.config.mjs          # site URL, i18n (id/en), sitemap, Tailwind v4 via Vite
├── keystatic.config.ts       # CMS opsional (fase 2)
├── public/
│   ├── fonts/                # Archivo variabel (latin + latin-ext), OFL 1.1
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── components/
    │   ├── Hero.astro        # hero + kartu bukti kredibilitas
    │   ├── Nav.astro         # header, menu mobile, language switch
    │   ├── About.astro       # tentang + 4 pilar topik
    │   ├── Panggung.astro    # daftar forum & rekam jejak
    │   ├── Pemikiran.astro   # grid policy brief
    │   ├── Karya.astro       # Nbie Solutions & SymptoMed
    │   ├── Kontak.astro      # 3 CTA WhatsApp + kontak langsung
    │   ├── Footer.astro
    │   └── Icon.astro        # ikon SVG inline, nol dependency
    ├── data/
    │   ├── site.ts           # kontak, URL, varian pesan WhatsApp
    │   └── content.ts        # proof, pillars, talks, briefs, works (id + en)
    ├── i18n/ui.ts            # kamus UI dua bahasa
    ├── layouts/Base.astro    # shell HTML, meta, hreflang, OG, font preload
    ├── pages/
    │   ├── index.astro       # / → 301 /id/
    │   └── [lang]/index.astro# /id/ dan /en/
    └── styles/global.css     # token + komponen (.pill/.dot/.disp), Tailwind v4
```

## Mengedit konten

Semua teks ada di dua tempat — **tidak perlu menyentuh komponen**:

- `src/data/content.ts` — data terstruktur (panggung, brief, pilar, karya), tiap entri punya `id` + `en`
- `src/i18n/ui.ts` — label UI (navigasi, tombol, paragraf)

## Design system

Diadaptasi dari `davidalfasunarna.com` (Tailwind 4.3.4):

- **Token warna** di blok `@theme` (`src/styles/global.css`). Ganti 4 nilai untuk kembali ke palet ungu acuan.
- **Ritme fluid** — satu rumus `clamp()` untuk semua ukuran huruf & jarak. Tidak ada media query ukuran huruf.
- **Font** — Archivo variabel (bobot 100–900, lebar 62–125%) + `Archivo Fallback` terkalibrasi (`size-adjust`, `ascent-override`) supaya layout tidak bergeser sebelum font termuat.
- **Komponen** — `.pill`, `.dot`, `.disp`, `.pad`, `.py-section`, `.proof`, `.talk__row`, `.work`, `.contact`.

## Yang belum terisi (butuh aset dari Kanda)

- [ ] **Foto hero** — landscape ≥2400px. Ganti `<div class="hero__placeholder">` di `Hero.astro` dengan `<img class="hero__media" srcset="...">`.
- [ ] **`public/og.jpg`** — 1200×630 untuk preview WhatsApp/LinkedIn/X.
- [ ] **Policy brief** — 4 kartu di `content.ts` masih placeholder berstatus "SEGERA".
- [ ] **Foto panggung** — 2–3 foto untuk section Panggung.
- [ ] **Media kit PDF** — `/media-kit.pdf`, ditautkan dari section Kontak.

## CMS opsional (fase 2 — belum dipasang)

`keystatic.config.ts` sudah disiapkan untuk mengelola daftar panggung & brief lewat editor visual.
Belum aktif karena menambah dependency. Aktifkan dengan:

```bash
npm i @keystatic/core @keystatic/astro @astrojs/react react react-dom
```

lalu ikuti https://keystatic.com/docs/astro — mode `local` gratis tanpa akun,
mode `github` butuh OAuth App.

## Hasil verifikasi build

```
astro check   → 0 errors, 0 warnings, 0 hints (18 file)
astro build   → 3 halaman (/id/, /en/, /), ~800 ms
dist total    → 272 KB (termasuk 2 file font 176 KB)
CSS           → 16 KB satu file
HTML          → 19 KB per halaman, JS hanya inline ~1 KB
```

Render diuji di viewport 390×844, 768×1024, dan 1440×900: nol overflow horizontal,
menu mobile membuka dengan `aria-expanded=true`, language switch berfungsi,
`<html lang>` berganti, hreflang id/en/x-default terpasang,
16/16 heading tingginya > 0.8x font-size, h1 = 3 baris rapi di 1440px.

## Peringatan kelas CSS

**Jangan** menamai kelas kustom dengan nama yang menabrak utility Tailwind
(`.h-1`, `.w-2`, `.p-4`, `.m-2`, `.text-lg`, dst). Tailwind v4 punya `.h-1`
= `height: .25rem`, dan di CSS hasil build utility itu **menang** atas kelas
dengan nama sama — heading bisa terjepit jadi 4px. Pakai prefix sendiri:
`.type-1`, `.sec-x`, `.cardx-y`.

## Lisensi

Kode: MIT. Font Archivo: SIL Open Font License 1.1.
