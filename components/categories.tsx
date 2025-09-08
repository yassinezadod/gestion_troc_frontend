"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hook/use-translation"

export default function Categories() {
  const {t} = useTranslation()

  // Toutes les clés de catégories disponibles dans fr.json et en.json
  const categoriesList = [
    "electronics",
    "fashion",
    "home_garden",
    "sports",
    "vehicles",
    "books",
    "kids",
    "beauty",
  ]

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
            {t("navbar.categories")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categoriesList.map((key, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-3 px-2 text-sm text-center bg-white hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
            >
              {t(`categorie.${key}`)}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
