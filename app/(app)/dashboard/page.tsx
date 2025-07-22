import React from "react"

const DashboardPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mb-4">대시보드</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
          <h3 className="font-semibold tracking-tight text-lg">이번 달 수입</h3>
          <p className="text-2xl font-bold mt-2">0원</p>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
          <h3 className="font-semibold tracking-tight text-lg">이번 달 지출</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">0원</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
