"use client"

import { activePageAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import React from "react"
import { Button } from "../ui/button"
import { BarChart2, LayoutDashboard, Settings, Wallet } from "lucide-react"
import { ThemeToggle } from "../themeToggle"

const navItems = [
  { id: "dashboard", label: "대시보드", icon: LayoutDashboard },
  { id: "transactions", label: "거래내역", icon: Wallet },
  { id: "analysis", label: "분석", icon: BarChart2 },
  { id: "settings", label: "설정", icon: Settings },
]

const Sidebar = () => {
  const [activePage, setActivePage] = useAtom(activePageAtom)

  return (
    <aside className="hidden md:flex w-64 flex-col gap-4 border-r bg-background p-4">
      <div className="flex h-16 items-center">
        <h1 className="text-2xl font-bold">💸 짠짠북</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activePage === item.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActivePage(item.id)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </aside>
  )
}

export default Sidebar
