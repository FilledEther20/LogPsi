"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Unauthenticated, useMutation, useQuery } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Authenticated } from "convex/react";
import { UserButton } from "@clerk/clerk-react";
import { api } from "@/convex/_generated/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";
// import Header from "./header";

export default function Home() {
  const createDocument = useMutation(api.documents.createDocument);
  const documents = useQuery(api.documents.getDocuments);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <ModeToggle />
        <Button
          onClick={() => {
            createDocument({
              title: "Hello world",
            });
          }}
        >
          Click Me man
        </Button>
        {documents?.map((doc) => (
          <Card key={doc._id}>
            <CardHeader>
              <CardTitle>{doc.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
        <UserButton />
      </Authenticated>
    </div>
  );
}
