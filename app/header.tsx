"use client";
import { Authenticated, Unauthenticated } from "convex/react";
import { UserButton, SignInButton } from "@clerk/clerk-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
export default function Header() {
  return (
    <div className="bg-slate-900  py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
            <Image src="../public/next.svg" alt="Logo" width={100} height={100} className="rounded-sm"/>
            LogPsi
        </div>

        <div>
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <div className="flex gap-6">
            <ModeToggle />
            <UserButton />
            </div>
          </Authenticated>
        </div>
      </div>
    </div>
  );
}
