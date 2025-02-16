import { Home, Info, Briefcase, Mail } from 'lucide-react';

const navLinks = [
  {
    name: 'Home',
    path: '/',
    icon: <Home size={20} />,
    hoverBg: 'bg-blue-50',
    hoverText: 'text-blue-600',
  },
  {
    name: 'About',
    path: '/about',
    icon: <Info size={20} />,
    hoverBg: 'bg-green-50',
    hoverText: 'text-green-600',
  },
  {
    name: 'Services',
    path: '/services',
    icon: <Briefcase size={20} />,
    hoverBg: 'bg-purple-50',
    hoverText: 'text-purple-600',
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <Mail size={20} />,
    hoverBg: 'bg-orange-50',
    hoverText: 'text-orange-600',
  },
];

export default navLinks;
