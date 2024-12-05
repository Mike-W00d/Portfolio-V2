import {
  Images,
  Home,
  Presentation,
  MessageSquareMore,
  Contact,
} from "lucide-react";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: "Home",
      href: "/",
      icon: <Home size={20} />,
      active: pathname === "/",
      position: "top",
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <Presentation size={20} />,
      active: isNavItemActive(pathname, "/projects"),
      position: "top",
    },
    {
      name: "Blog",
      href: "/blog",
      icon: <MessageSquareMore size={20} />,
      active: isNavItemActive(pathname, "/blog"),
      position: "top",
    },
    {
      name: "Gallery",
      href: "/gallery",
      icon: <Images size={20} />,
      active: isNavItemActive(pathname, "/gallery"),
      position: "top",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Contact size={20} />,
      active: isNavItemActive(pathname, "/contact"),
      position: "top",
    },
  ];
};
