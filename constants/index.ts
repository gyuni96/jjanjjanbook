import { menuItem } from "@/types"
import { BarChart2, LayoutDashboard, Settings, Wallet } from "lucide-react"

export const NAV_ITEMS: menuItem[] = [
  { id: "dashboard", label: "대시보드", icon: LayoutDashboard, url: "/dashboard" },
  { id: "transactions", label: "거래내역", icon: Wallet, url: "/transactions" },
  { id: "analysis", label: "분석", icon: BarChart2, url: "/analysis" },
  { id: "settings", label: "설정", icon: Settings, url: "/settings" },
]
