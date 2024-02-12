import { usePathname } from 'next/navigation';

import { Bell, Briefcase, Home, Settings, User } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/',
      icon: <Home size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <User size={20} />,
      active: isNavItemActive(pathname, '/projects'),
      position: 'top',
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <Bell size={20} />,
      active: isNavItemActive(pathname, '/blog'),
      position: 'top',
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, '/contact'),
      position: 'top',
    },
  ];
};