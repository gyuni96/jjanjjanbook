import Sidebar from "@/components/common/sidebar"
import React from "react"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-8 overflow-y-auto">{children}</main>
    </div>
  )
}

export default AppLayout
