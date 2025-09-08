"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hook/use-translation"

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-gradient-to-br from-red-500 via-black to-orange-700 text-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/troc_banner.png')] bg-center bg-cover opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
      <h1
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 leading-tight 
             text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 
             drop-shadow-[3px_3px_6px_rgba(0,0,0,0.4)]"
>
  {t("hero.title")}
</h1>


        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-white/90 max-w-4xl mx-auto text-pretty leading-relaxed px-4">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <Link href="/annonces">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 md:px-10 py-3 md:py-4 text-base md:text-lg shadow-lg"
            >
              {t("hero.viewListings")}
            </Button>
          </Link>
          <Link href="/register">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold"
            >
              {t("hero.startTrading")}
            </Button>
          </Link>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300">1000+</div>
            <div className="text-white/80 text-sm md:text-base">{t("hero.stats.activeUsers")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300">5000+</div>
            <div className="text-white/80 text-sm md:text-base">{t("hero.stats.completedTrades")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300">50+</div>
            <div className="text-white/80 text-sm md:text-base">{t("hero.stats.citiesCovered")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
