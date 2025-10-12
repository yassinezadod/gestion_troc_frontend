"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleLoginResponse = (
  response: any,
  router: AppRouterInstance,
  setNotification: (value: any) => void
) => {
  console.log("API response:", response);

  // Save tokens if provided
  if (response.accessToken) {
    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("refreshToken", response.refreshToken ?? "");
  }

  // 1️⃣ InfoNeeded / complete info
  if (
    response.type === "InfoNeeded" ||
    response.redirect === "completeinfopage"
  ) {
    setNotification({
      type: "warning",
      message: response.message || "Please complete your information.",
    });
    localStorage.setItem("userInfoComplete", "false"); // not fully logged in yet
    setTimeout(() => router.push("/complete-info"), 1200);
    return;
  }

  // 2️⃣ Error (invalid credentials)
  if (response.type?.toLowerCase() === "error") {
    setNotification({
      type: "error",
      message: response.message || "Login failed. Please try again.",
    });

    // optional redirect to register
    if (response.redirect === "registerpage") {
      setTimeout(() => router.push("/register"), 1500);
    }
    return;
  }

  // 3️⃣ Success
  if (response.message?.toLowerCase().includes("success")) {
    setNotification({ type: "success", message: response.message });
    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("userInfoComplete", "true");
    setTimeout(() => router.push("/"), 1500);
    return;
  }

  // 4️⃣ Fallback
  setNotification({
    type: "error",
    message: response.message || "Unexpected response. Please try again.",
  });
};
