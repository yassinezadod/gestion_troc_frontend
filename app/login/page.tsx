"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSignIn = () => {
    console.log("Sign in:", formData)

    // Simulate successful login
    localStorage.setItem("userLoggedIn", "true")
    localStorage.setItem("userEmail", formData.email)

    // Check if user has completed their information
    const userInfoComplete = localStorage.getItem("userInfoComplete")

    if (userInfoComplete === "true") {
      // User has complete info, redirect to dashboard/home
      router.push("/")
    } else {
      // User needs to complete their information
      localStorage.setItem("userRegistered", "true")
      localStorage.setItem("userInfoComplete", "false")
      router.push("/complete-info")
    }
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
          <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
            <ins>Register</ins>
          </Link>
        </div>
        <div className="border-b-2 border-blue-600"></div>
      </div>

      <div className="max-w-md mx-auto pt-12 px-4">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-xl font-semibold text-center mb-8">Sign in to your account</h2>

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

            <Button
              onClick={handleSignIn}
               className="w-full bg-blue-600 hover:bg-blue-500 active:bg-white active:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              disabled={!formData.email || !formData.password}
            >
              Sign in
            </Button>

            <div className="text-center">
              <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm">
              <ins>Reset Password</ins>
              </Link>
            </div>
          </div>

          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">
              Dont have an account ?{" "}
              <Link href="/register" className="text-blue-600 hover:text-blue-700">
              <ins>Register</ins> 
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
