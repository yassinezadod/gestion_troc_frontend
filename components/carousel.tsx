"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "@/hook/use-translation"

const carouselItems = [
  {
    id: 1,
    image: "/modern-smartphone-collection.png",
    titleKey: "carousel.electronics.title",
    descriptionKey: "carousel.electronics.description",
  },
  {
    id: 2,
    image: "/vintage-furniture-collection.jpg",
    titleKey: "carousel.furniture.title",
    descriptionKey: "carousel.furniture.description",
  },
  {
    id: 3,
    image: "/sports-equipment.png",
    titleKey: "carousel.sports.title",
    descriptionKey: "carousel.sports.description",
  },
  {
    id: 4,
    image: "/books-and-education-materials.jpg",
    titleKey: "carousel.books.title",
    descriptionKey: "carousel.books.description",
  },
]

export default function Carousel() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play avec pause au survol
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Titre et sous-titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("carousel.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("carousel.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Container slides */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={t(item.titleKey)}
                      fill
                      className="object-cover"
                      // seulement priority pour le premier slide
                      priority={index === 0}
                      // lazy uniquement pour les autres
                      loading={index === 0 ? undefined : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-lg opacity-90 max-w-2xl">
                        {t(item.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label={t("carousel.previous")}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label={t("carousel.next")}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`${t("carousel.goToSlide")} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
