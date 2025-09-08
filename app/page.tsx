"use client"

import Carousel from "@/components/carousel";
import Categories from "@/components/categories";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import KeyFeatures from "@/components/key-features";
import Navbar from "@/components/navbar";
import RecentListings from "@/components/recent-listings";
import Testimonials from "@/components/testimonials";
import LoadingPage from "@/components/loading-page"
import { useState, useEffect } from "react"




export default function Home() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingPage />
  }
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Carousel />
      <Categories />
      <RecentListings />
      <KeyFeatures />
      <Testimonials />
      <Footer />
     
    </div>
  );
}
