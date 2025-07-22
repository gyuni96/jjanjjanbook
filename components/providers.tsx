"use client"
import React, { Children, useEffect } from "react"
import { Provider as JotaiProvider, useAtom } from "jotai"
import { themeAtom } from "@/lib/atoms"

export const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useAtom(themeAtom)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  return <>{children}</>
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <ThemeProviders>{children}</ThemeProviders>
    </JotaiProvider>
  )
}
