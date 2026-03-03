"use client";

import { useUser } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { SignedInNavItems, SignedOutNavItems } from "@/config";

export default function Header() {
  const { isSignedIn } = useUser();

  const navItems = [];

  if (!isSignedIn) {
    navItems.push(...SignedOutNavItems());
  } else {
    navItems.push(...SignedInNavItems());
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-fedblue bg-fedblue px-4 md:px-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-xl font-semibold md:text-base"
        prefetch={false}
      >
        {/* <span className="w-8 h-8 border bg-accent rounded-full" /> */}
        <span className="text-2xl text-white">Michael Wood</span>
      </Link>

      <div className="ml-4 flex items-center gap-3">
        <button
          onClick={() => setIsOpen(true)}
          className="block rounded-sm bg-white sm:hidden"
        >
          <Menu size={24} />
        </button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="right" className="block md:hidden">
            <SheetTitle>Menu</SheetTitle>
            <div className="flex  h-fit w-full flex-col gap-1 overflow-y-auto pt-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative flex h-full items-center whitespace-nowrap rounded-md ${
                    navItem.active
                      ? "bg-neutral-200 text-sm font-bold text-neutral-700 shadow-sm dark:bg-neutral-800 dark:text-white"
                      : "text-neutral-500  hover:bg-neutral-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                  }`}
                >
                  <div className="relative flex flex-row items-center space-x-2 rounded-md px-2 py-1.5 text-sm font-bold duration-100">
                    {navItem.icon}
                    <span>{navItem.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
