"use client"

import { Analytics } from "@vercel/analytics/next"
import { TranslationProvider } from "@/hook/use-translation"
import { Suspense } from "react"
import type React from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
   const Loading = () => (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <span className="text-gray-500 text-lg font-medium animate-pulse">
          Loading...
        </span>
      </div>
    </div>
   )

  return (
    <Suspense fallback={<Loading />}>
      <TranslationProvider>{children}</TranslationProvider>
      <Analytics />
    </Suspense>
  )
}
