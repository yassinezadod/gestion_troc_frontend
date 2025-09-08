"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, MapPin } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/hook/use-translation"

export default function RecentListings() {
  const { t } = useTranslation()

  const recentListings = [
    {
      id: 1,
      title: "iPhone 13 Pro Max",
      description: "Excellent état, avec boîte et accessoires",
      image: "/iphone-13-pro-max.png",
      user: "Ahmed M.",
      location: "Casablanca",
      categoryKey: "categories.electronics",
    },
    {
      id: 2,
      title: "Vélo de montagne Trek",
      description: "Parfait pour les randonnées, peu utilisé",
      image: "/mountain-bike-trek.jpg",
      user: "Fatima K.",
      location: "Rabat",
      categoryKey: "categories.sports",
    },
    {
      id: 3,
      title: "Canapé en cuir marron",
      description: "3 places, très confortable, bon état",
      image: "/brown-leather-sofa.png",
      user: "Youssef B.",
      location: "Marrakech",
      categoryKey: "categories.furniture",
    },
    {
      id: 4,
      title: "Livre de cuisine marocaine",
      description: "Collection complète de recettes traditionnelles",
      image: "/moroccan-cookbook.jpg",
      user: "Aicha L.",
      location: "Fès",
      categoryKey: "categories.books",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("recentListings.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("recentListings.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {recentListings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video w-full">
                <Image
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title}
                  fill
                  className="object-cover"
                  priority
                />
                <Badge className="absolute top-2 left-2 bg-blue-600">{t(listing.categoryKey)}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{listing.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{listing.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {listing.user}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {listing.location}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full bg-transparent">
                  {t("recentListings.viewListing")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/annonces">
          <Button
  size="lg"
  className="
    bg-gradient-to-br from-blue-500 via-orange-600 to-red-700
    text-white font-semibold
    px-8 py-4
    rounded-lg
    shadow-lg
    hover:bg-gradient-to-br hover:from-blue-400 hover:via-yellow-500 hover:to-yellow-600
    hover: hover:shadow-2xl
    active:bg-gradient-to-br active:from-yellow-400 active:via-yellow-500 active:to-yellow-600
    active:translate-y-[1px] active:shadow-md
  "
>
  {t("recentListings.viewAllListings")}
</Button>

          
          </Link>
        </div>
      </div>
    </section>
  )
}
