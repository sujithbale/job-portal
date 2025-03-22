"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            JobBoard
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">
              Find Jobs
            </Link>
            <Link href="/companies" className="text-muted-foreground hover:text-foreground transition-colors">
              Companies
            </Link>
            <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/jobs" className="text-foreground hover:text-primary transition-colors">
                  Find Jobs
                </Link>
                <Link href="/companies" className="text-foreground hover:text-primary transition-colors">
                  Companies
                </Link>
                <Link href="/resources" className="text-foreground hover:text-primary transition-colors">
                  Resources
                </Link>

                <div className="border-t my-4 pt-4">
                  {isLoggedIn ? (
                    <>
                      <Button variant="ghost" asChild className="w-full justify-start">
                        <Link href="/dashboard">Dashboard</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start mt-2"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" asChild className="w-full justify-start">
                        <Link href="/login">Sign In</Link>
                      </Button>
                      <Button asChild className="w-full justify-start mt-2">
                        <Link href="/register">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

