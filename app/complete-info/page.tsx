"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CountrySelector,
  countries,
  type Country,
} from "@/components/country-selector";
import { moroccanCities } from "@/data/moroccanCities";
import Logo from "@/components/ui/Logo";
import { AuthService } from "@/services/auth";

export default function CompleteInfoPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "Casablanca",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Check user is logged in but info incomplete
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const infoComplete = localStorage.getItem("userInfoComplete");
    if (!accessToken) {
      router.push("/login");
    } else if (infoComplete === "true") {
      router.push("/"); // Already completed
    }
  }, [router]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = async () => {
    if (!formData.phone || !formData.address) return;

    setLoading(true);
    setError("");

    try {
      await AuthService.updateMe({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneCode: selectedCountry.code,
        phoneNumber: formData.phone,
        city: formData.city,
        address: formData.address,
      });

      localStorage.setItem("userInfoComplete", "true");
      router.push("/"); // Redirect after completing info
    } catch (err: any) {
      console.error("Failed to update user info", err);
      setError(err.message || "Failed to update information");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Logo />
          </div>
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            <ins>Sign in</ins>
          </Link>
        </div>
        <div className="border-b-2 border-blue-600"></div>
      </div>

      <div className="max-w-md mx-auto pt-12 px-4">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          {error && (
            <div className="mb-4 text-red-600 font-medium text-center">
              {error}
            </div>
          )}

          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-6">
                Personal Information
              </h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="mt-1"
                  />
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!formData.firstName || !formData.lastName}
                  className="w-full bg-blue-600 hover:bg-blue-500"
                >
                  Next
                </Button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex mt-1">
                    <CountrySelector
                      selectedCountry={selectedCountry}
                      onCountryChange={setSelectedCountry}
                    />
                    <Input
                      id="phone"
                      placeholder="612345678"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="city">City</Label>
                  <select
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    {moroccanCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className="mt-1"
                  />
                </div>

                <Button
                  onClick={handleFinish}
                  disabled={loading || !formData.phone || !formData.address}
                  className="w-full bg-blue-600 hover:bg-blue-500"
                >
                  {loading ? "Saving..." : "Finish"}
                </Button>
              </div>

              <Button
                onClick={handleBack}
                className="mt-4 w-full border border-gray-300"
              >
                Back
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
