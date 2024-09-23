'use client';

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ToastButton({ message, buttonName }: { message: string; buttonName: string }) {
  return (
    <Button
      onClick={() => {
        toast.success(message);
      }}
      className="bg-fedblue text-white hover:bg-honblue"
    >
      {buttonName}
    </Button> 
  );
}