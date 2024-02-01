'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '../styles/constants';
import { SideNavItem, MenuItemWithSubMenuProps } from '../styles/types';
import { Icon } from '@iconify/react';
import { motion, useCycle } from 'framer-motion';


const HeaderMobile = () => {

  const pathname = usePathname();
  const containerRef = useRef(null);

  return (
    <div>
      Header-mobile
    </div>
  )
}

export default HeaderMobile
