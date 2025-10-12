"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/ui/Logo";
import { AuthService } from "@/services/auth";
import { handleLoginResponse } from "@/helpers/auth/handleResponseAuth";

type Notification = {
  type: "success" | "error" | "warning";
  message: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      setNotification({
        type: "warning",
        message: "You are already logged in!",
      });
      setTimeout(() => router.replace("/"), 1000);
    } else {
      setNotification({
        type: "error",
        message: "No active session found. Please log in.",
      });
      setTimeout(() => setNotification(null), 3000);
    }
  }, [router]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignIn = async () => {
    if (!formData.email || !formData.password) return;
    setLoading(true);

    try {
      const response = await AuthService.login(
        formData.email,
        formData.password
      );
      console.log("Redirecting to:", response.redirect);
      console.log("Router instance:", router);
      handleLoginResponse(response, router, setNotification);
    } catch (err: any) {
      console.error("Login failed:", err);
      setNotification({
        type: "error",
        message: err?.message || "Failed to login. Check your credentials.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setNotification(null), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Notification */}
      {notification && (
        <div
          className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow text-white ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "warning"
              ? "bg-orange-500"
              : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Logo />
          </div>
          <Link
            href="/register"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            <ins>Register</ins>
          </Link>
        </div>
        <div className="border-b-2 border-blue-600"></div>
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto pt-12 px-4">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-xl font-semibold text-center mb-8">
            Sign in to your account
          </h2>

          <div className="space-y-6">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
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
              disabled={!formData.email || !formData.password || loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>

            <div className="text-center">
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                <ins>Reset Password</ins>
              </Link>
            </div>
          </div>

          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">
              Don't have an account?
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-700"
              >
                <ins>Register</ins>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
