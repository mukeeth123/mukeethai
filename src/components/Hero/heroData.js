import { Bot, Layers, Workflow } from 'lucide-react';

export const FEATURE_CARDS = [
  {
    icon: Bot,
    title: 'AI Product Delivery',
    description: 'Apps, platforms, and intelligent agents built for startup velocity.',
  },
  {
    icon: Layers,
    title: 'Enterprise Automations',
    description: 'Workflow systems that scale with teams, data, and compliance needs.',
  },
  {
    icon: Workflow,
    title: 'Agentic AI Systems',
    description: 'Modern AI infrastructure with orchestration and production readiness.',
  },
];

export const FLOATING_LABELS = [
  { id: 'partnerships', text: 'Open to Partnerships' },
  { id: 'delivery', text: 'AI Product Delivery' },
];

export const SOCIAL_LINKS = [
  { href: 'https://github.com/mukheeth', label: 'GitHub', icon: 'github' },
  { href: 'https://www.linkedin.com/in/syed-mukeeth-ur-rahiman-349120244/', label: 'LinkedIn', icon: 'linkedin' },
  { href: '#contact', label: 'Email', icon: 'mail', scroll: '#contact' },
  { href: 'https://wa.me/918179020981', label: 'WhatsApp', icon: 'whatsapp' },
  {
    href: 'https://drive.google.com/file/d/1aCwxyi1PcJAbCQdDX25jnwY91EeMO7JJ/view?usp=sharing',
    label: 'Download Resume',
    icon: 'resume',
  },
];

export function scrollToSection(selector) {
  const target = document.querySelector(selector);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
  else window.location.href = `/${selector}`;
}
