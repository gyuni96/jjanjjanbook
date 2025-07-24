"use client"

import React from "react"
import { Button } from "../ui/button"
import { ThemeToggle } from "../themeToggle"
import { NAV_ITEMS } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-64 flex-col gap-4 border-r bg-background p-4">
      <div className="flex h-16 items-center">
        <h1 className="text-2xl font-bold">💸 짠짠북</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <Link key={item.id} href={item.url}>
            <Button
              variant={pathname.startsWith(item.url) ? "default" : "ghost"}
              className="w-full justify-start"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </aside>
  )
}

export default Sidebar
