"use client"

import Link from "next/link"
import { Facebook, MessageCircle, Instagram, Twitter } from "lucide-react"
import { useTranslation } from "@/hook/use-translation"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gradient-to-t from-orange-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decoration circles */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-orange-500 mb-4">EcomTroc</h3>
            <p className="text-gray-300 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              {[MessageCircle, Facebook, Instagram, Twitter].map((Icon, idx) => (
                <Link
                  href="#"
                  key={idx}
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">{t("footer.usefulLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-orange-400 hover:underline transition-colors duration-300"
                >
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/annonces"
                  className="text-gray-300 hover:text-orange-400 hover:underline transition-colors duration-300"
                >
                  {t("footer.listings")}
                </Link>
              </li>
              <li>
                <Link
                  href="/produits"
                  className="text-gray-300 hover:text-orange-400 hover:underline transition-colors duration-300"
                >
                  {t("footer.products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-orange-400 hover:underline transition-colors duration-300"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Support */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">{t("footer.legal")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-orange-400 hover:underline transition-colors duration-300"
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-orange-400 hover:underline transition-colors duration-300"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 hover:text-orange-400 hover:underline transition-colors duration-300"
                >
                  {t("footer.help")}
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="text-gray-300 hover:text-orange-400 hover:underline transition-colors duration-300"
                >
                  {t("footer.safety")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
