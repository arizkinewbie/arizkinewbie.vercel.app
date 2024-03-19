import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://arizkinewbie.vercel.app/", // replace this with your deployed domain
  author: "Arizki Putra Rahman",
  desc: "Personal Website From ArizkiNewbie, more detail on LinkedIn: https://www.linkedin.com/in/arizkinewbie/",
  title: "ArizkiNewbie",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/arizkinewbie",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6282289486808",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/arizkinewbie",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/arizkinewbie",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/arizkinewbie",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/arizkinewbie",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@arizkinewbie",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },

  {
    name: "TikTok",
    href: "https://tiktok.com/@arizkinewbie",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:arizkiputrar@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
