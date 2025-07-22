"use client"

import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"

export const themeAtom = atomWithStorage("theme", "light")

export const ThemeToggle = () => {
  const [theme, setTheme] = useAtom(themeAtom)

  const toggleThemeHandler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <Button onClick={toggleThemeHandler} variant="ghost" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">테마 전환</span>
    </Button>
  )
}
