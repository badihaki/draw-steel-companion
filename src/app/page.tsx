"use client"
import { atom, useAtom } from "jotai";
import { readWriteUser } from "@/lib/interfaces/user/UserAtom";

export default function Home() {
  const [user] = useAtom(readWriteUser);
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>
        Welcome, {user.username}
      </div>
    </main>
  );
}
