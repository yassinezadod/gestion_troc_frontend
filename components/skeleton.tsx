"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circle" | "card"
}

function Skeleton({ className, variant = "text", ...props }: SkeletonProps) {
  const baseStyle = "animate-pulse bg-gray-300 dark:bg-gray-700"

  const variants = {
    text: "h-4 rounded-md",
    circle: "rounded-full",
    card: "rounded-lg",
  }

  return (
    <div
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    />
  )
}

export { Skeleton }
