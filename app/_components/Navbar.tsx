"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const pathname = usePathname();
  const isOnDashboard = pathname === "/dashboard";

  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-teal-200 px-4 py-4 dark:border-teal-800">
      <div className="flex items-center gap-2">
        <Link href="/">
          <div className="size-7 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 cursor-pointer" />
        </Link>
        <Link href="/">
          <h1 className="text-base font-bold md:text-2xl text-teal-800 dark:text-teal-200 cursor-pointer">
            Medical AI Agent
          </h1>
        </Link>
      </div>
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <UserButton />
          {!isOnDashboard && (
            <a
              href="/dashboard"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-teal-700 transition"
            >
              Go to Dashboard
            </a>
          )}
        </div>
      ) : (
        <SignInButton />
      )}
    </nav>
  );
}
