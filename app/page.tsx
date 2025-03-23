'use client'

import Image from "next/image";
import { Unauthenticated } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Authenticated } from "convex/react";
import { UserButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </div>
  );
}