"use client";
import Image from "next/image";
import { Unauthenticated, useMutation, useQuery } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Authenticated } from "convex/react";
import { UserButton } from "@clerk/clerk-react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const createDocument = useMutation(api.documents.createDocument);
  const documents=useQuery(api.documents.getDocuments)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <button
          onClick={() => {
            createDocument({
              title: "Hello world",
            });
          }}
        >
          Click Me man
        </button>
          {
            documents?.map(
              (doc) => (
                <div key={doc._id}>
                  {doc.title}
                </div>
              )
            )
          }
        <UserButton />
      </Authenticated>
    </div>
  );
}
