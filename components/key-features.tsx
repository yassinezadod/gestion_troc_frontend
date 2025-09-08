"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Plus, FileText, Bell, MessageCircle } from "lucide-react"
import { useTranslation } from "@/hook/use-translation"

export default function KeyFeatures() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Plus,
      titleKey: "features.addProduct.title",
      descriptionKey: "features.addProduct.description",
    },
    {
      icon: FileText,
      titleKey: "features.createListing.title",
      descriptionKey: "features.createListing.description",
    },
    {
      icon: Bell,
      titleKey: "features.notifications.title",
      descriptionKey: "features.notifications.description",
    },
    {
      icon: MessageCircle,
      titleKey: "features.whatsapp.title",
      descriptionKey: "features.whatsapp.description",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("features.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(feature.descriptionKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
