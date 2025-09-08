"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Globe, User, Menu, X } from "lucide-react"
import { useTranslation } from "@/hook/use-translation"
import Logo from "./ui/Logo"


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { language, setLanguage, t } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleLanguageChange = (newLanguage: "fr" | "en") => setLanguage(newLanguage)

  const handleLoginClick = () => {
    const userRegistered = localStorage.getItem("userRegistered")
    const userInfoCompleted = localStorage.getItem("userInfoCompleted")

    if (userRegistered && userInfoCompleted) router.push("/dashboard")
    else if (userRegistered && !userInfoCompleted) router.push("/complete-info")
    else router.push("/login")
  }

  return (
    <nav className="bg-background border-b border-border px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {isLoading ? (
            <>
            
            </>
          ) : (
            <>
              <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors">{t("navbar.home")}</Link>
              <Link href="/categories" className="text-foreground hover:text-primary font-medium transition-colors">{t("navbar.categories")}</Link>
              <Link href="/about" className="text-foreground hover:text-primary font-medium transition-colors">{t("navbar.about")}</Link>
              <Link href="/contact" className="text-foreground hover:text-primary font-medium transition-colors">{t("navbar.contact")}</Link>
            </>
          )}
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xs lg:max-w-md mx-4 lg:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder={t("navbar.search_placeholder")}
                className="pl-10 pr-4 py-2 w-full bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          
        </div>

        {/* Right Side Items */}
        <div className="flex items-center space-x-6">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="border-none bg-transparent flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
                <Globe className="w-5 h-5 text-gray-600" />
                <SelectValue className="hidden" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-md shadow-lg">
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          

         
            <button
              onClick={handleLoginClick}
              className="p-3 bg-white rounded-full drop-shadow-lg hover:scale-110 transform transition-transform duration-300"
              title="Login"
            >
              <User className="h-6 w-6 text-black" />
            </button>
          

         
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden mt-3">
        
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder={t("navbar.search_placeholder")}
              className="pl-10 pr-4 py-2 w-full bg-input border-border focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
          <div className="flex flex-col space-y-3">   
              
                <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("navbar.home")}</Link>
                <Link href="/categories" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("navbar.categories")}</Link>
                <Link href="/about" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("navbar.about")}</Link>
                <Link href="/contact" className="text-foreground hover:text-primary font-medium transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("navbar.contact")}</Link>
              
          </div>
        </div>
      )}
    </nav>
  )
}
