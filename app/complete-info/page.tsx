"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CountrySelector, countries, type Country } from "@/components/country-selector"
import { moroccanCities } from "@/data/moroccanCities"
import Logo from "@/components/ui/Logo"



export default function CompleteInfoPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]) // Morocco as default
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "Casablanca",
    address: "",
  })

  useEffect(() => {
    const userRegistered = localStorage.getItem("userRegistered")
    if (!userRegistered) {
      router.push("/register")
    }
  }, [router])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 2) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleFinish = () => {
    console.log("Information completed:", formData)
    localStorage.setItem("userInfoComplete", "true")
    // Redirect to dashboard or home page
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Logo />
          </div>
          <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            <ins> Sign in</ins>
          </Link>
        </div>
        <div className="border-b-2 border-blue-600"></div>
      </div>

      <div className="max-w-md mx-auto pt-12 px-4">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          {step === 1 && (
            <>
              <div className="flex items-center mb-6">
                <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-800">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-semibold ml-4">Enter your informations</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button
                  onClick={handleNext}
                   className="w-full bg-blue-600 hover:bg-blue-500  active:bg-white active:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  disabled={!formData.firstName || !formData.lastName}
                >
                  Next
                </Button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex items-center mb-6">
                <button onClick={handleBack} className="text-gray-600 hover:text-gray-800">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-semibold ml-4">Enter your informations</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <div className="flex mt-1">
                    <CountrySelector selectedCountry={selectedCountry} onCountryChange={setSelectedCountry} />
                    <Input
                      id="phone"
                      placeholder="613294527"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                    City
                  </Label>
                  <select
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {moroccanCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Address
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button
                  onClick={handleFinish}
                 className="w-full bg-blue-600 hover:bg-blue-500  active:bg-white active:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  disabled={!formData.phone || !formData.address}
                >
                  Finish
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
