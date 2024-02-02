import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Bald-bible', path: '/projects/bald-bible' },
      { title: 'Nike Clone', path: '/projects/nike-clone' },
    ],
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];