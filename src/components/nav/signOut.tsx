"use client";

import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

export const SignOut = () => {
  const { signOut } = useClerk();

  return (
    <button
      className="mx-3 flex items-center rounded-md bg-fedblue px-4 py-2 text-white"
      onClick={() => signOut({ redirectUrl: "/" })}
    >
      <LogOut size={20} className="mx-2" />
      Sign out
    </button>
  );
};
