import { ThemeToggle } from "@/components/themeToggle"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold">💸 짠짠북에 오신 것을 환영합니다</h1>
        <p className="mt-4 text-lg text-muted-foreground">당신의 소비를 스마트하게 관리해보세요.</p>
        <div className="mt-8 flex justify-center gap-4">
          {/* Next.js의 Link 컴포넌트를 사용해 페이지 이동을 처리합니다. */}
          {/* 지금은 /dashboard로 바로 이동하지만, 추후 /login으로 변경될 예정입니다. */}
          <Link href="/dashboard">
            <Button size="lg">대시보드 바로가기</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
