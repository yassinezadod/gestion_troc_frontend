"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { TermsModal } from "@/components/terms-modal"

export default function RegisterPage() {
  const router = useRouter()
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreeToTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRegister = () => {
    // Simulate user registration
    console.log("User registered:", formData)
    // Store user as registered but incomplete
    localStorage.setItem("userRegistered", "true")
    localStorage.setItem("userInfoComplete", "false")
    localStorage.setItem("userEmail", formData.email)
    // Redirect to complete information page
    router.push("/complete-info")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
             <h1 className="text-2xl font-bold text-blue-600 ml-85">EcomTroc</h1>
          </div>
          <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            <ins>Sign in</ins>
          </Link>
        </div>
        <div className="border-b-2 border-blue-600"></div>
      </div>

      <div className="max-w-md mx-auto pt-12 px-4">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-xl font-semibold text-center mb-8">Create you account</h2>

          <div className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password (6+ chars)"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setShowTermsModal(true)}
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Terms and Conditions
                </button>
              </Label>
            </div>

            <Button
              onClick={handleRegister}
              className="w-full bg-blue-600 hover:bg-blue-500  active:bg-white active:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              disabled={!formData.email || !formData.password || !formData.agreeToTerms}
            >
              Register
            </Button>

            <div className="text-center">
              <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                 <ins> Reset Password</ins>
              </Link>
            </div>
          </div>

          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">
              You already have an account ?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-700">
               <ins>Sign in</ins> 
              </Link>
            </span>
          </div>
        </div>
      </div>

      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
    </div>
  )
}
