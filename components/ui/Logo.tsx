"use client"

import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-blue-700 to-blue-300 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-300"
    >
      EcomTroc
    </Link>
  )
}
