import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/#features'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get Started', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms & Conditions', href: getPermalink('/terms') },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { text: 'Email: officialkddigitalstudio@gmail.com', href: 'mailto:officialkddigitalstudio@gmail.com' },
        { text: 'Phone: +91 8368509327', href: 'tel:+918368509327' },
      ],
    },
    {
      title: 'Corporate Cell',
      links: [
        { text: 'Suite #281, Plot No. 281, D-Block', href: '#' },
        { text: 'Prem Nagar, Gali No. 6, Najafgarh', href: '#' },
        { text: 'New Delhi - 110043', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sakshidehraj2018-bit/astrowind' },
  ],
  footNote: `
    © ${new Date().getFullYear()} <span class="font-bold text-blue-600 dark:text-muted">KD Digital Studio</span> · All rights reserved.
  `,
};
