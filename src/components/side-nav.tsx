/* eslint-disable array-callback-return */
"use client";

import { useUser } from "@clerk/nextjs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SignedInNavItems, SignedOutNavItems } from "@/config";
import { cn } from "@/lib/utils";

import { SignOut } from "./signOut";

export default function SideNav() {
  const { isSignedIn } = useUser();

  const navItems = [];

  if (!isSignedIn) {
    navItems.push(...SignedOutNavItems());
  } else {
    navItems.push(...SignedInNavItems());
  }

  // Set initial state without relying on window/localStorage
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay logic until the component is mounted
    setIsMounted(true);

    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("sidebarExpanded");
      if (saved !== null) {
        setIsSidebarExpanded(JSON.parse(saved));
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      window.localStorage.setItem(
        "sidebarExpanded",
        JSON.stringify(isSidebarExpanded),
      );
    }
  }, [isSidebarExpanded, isMounted]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // If the component is not mounted, avoid rendering dynamic content
  if (!isMounted) {
    return <div className="w-[74px] bg-fedblue"></div>;
  }

  return (
    <div className="bg-transparent sm:pr-4">
      <div
        className={cn(
          isSidebarExpanded ? "w-[200px]" : "w-[68px]",
          "border-r transition-all duration-300 ease-in-out transform hidden sm:flex h-full bg-fedblue",
        )}
      >
        <aside className="flex size-full columns-1 flex-col overflow-x-hidden break-words bg-fedblue px-4">
          {/* Top */}
          <div className="relative mt-6 pb-2">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, idx) => {
                if (item.position === "top") {
                  return (
                    <Fragment key={idx}>
                      <div className="space-y-1">
                        <SideNavItem
                          label={item.name}
                          icon={item.icon}
                          path={item.href}
                          active={item.active}
                          isSidebarExpanded={isSidebarExpanded}
                        />
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>
          {/* Bottom */}
          <div className="sticky bottom-0 mb-4 mt-auto block whitespace-nowrap transition duration-200">
            {navItems.map((item, idx) => {
              if (item.position === "bottom") {
                return (
                  <Fragment key={idx}>
                    <div className="space-y-1">
                      <SideNavItem
                        label={item.name}
                        icon={item.icon}
                        path={item.href}
                        active={item.active}
                        isSidebarExpanded={isSidebarExpanded}
                      />
                    </div>
                  </Fragment>
                );
              }
            })}
            {isSignedIn ? <SignOut /> : null}
          </div>
          {/* <div className="mb-3">
            {isSignedIn ? (
              <SignOutButton>
                <button>
                  <SideNavItem
                    label={"Sign Out"}
                    icon={<LogOut size={20} />}
                    path={"/"}
                    active={false}
                    isSidebarExpanded={isSidebarExpanded}
                  />
                </button>
              </SignOutButton>
            ) : (
              <SideNavItem
                label={"Sign In"}
                icon={<LogIn size={20} />}
                path={"/sign-in"}
                active={false}
                isSidebarExpanded={isSidebarExpanded}
              />
            )}
          </div> */}
        </aside>
        <div className="relative mt-[calc(calc(60vh)-10px)]">
          <button
            type="button"
            className="absolute right-[-12px] flex size-6 items-center justify-center rounded-full border border-muted-foreground/20 bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? (
              <ChevronLeft size={16} className="stroke-foreground" />
            ) : (
              <ChevronRight size={16} className="stroke-foreground" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export const SideNavItem: React.FC<{
  label: string;
  icon: any;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
  logOut?: boolean;
}> = ({ label, icon, path, active, isSidebarExpanded, logOut }) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={`relative flex h-full items-center whitespace-nowrap rounded-md ${
            active
              ? "bg-white text-sm text-black shadow-sm"
              : "text-white hover:bg-white hover:text-black"
          }`}
        >
          <div className="relative flex flex-row items-center space-x-2 rounded-md px-2 py-1.5 text-sm duration-100">
            {icon}
            <span>{label}</span>
          </div>
        </Link>
      ) : (
        <TooltipProvider delayDuration={70}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={path}
                className={`relative flex h-full items-center whitespace-nowrap rounded-md ${
                  active
                    ? "bg-white text-sm text-black"
                    : "text-white hover:bg-white hover:text-black"
                }`}
              >
                <div className="relative flex flex-row items-center space-x-2 rounded-md p-2 text-sm duration-100">
                  {icon}
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="px-3 py-1.5 text-xs"
              sideOffset={10}
            >
              <span>{label}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
};
