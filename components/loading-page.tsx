import NavbarSkeleton from "@/components/navbar-skeleton"
import HeroSkeleton from "@/components/hero-skeleton"
import CarouselSkeleton from "@/components/carousel-skeleton"
import ListingsSkeleton from "./listings-skeleton"
import { Skeleton } from "@/components/skeleton"

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarSkeleton />
      <HeroSkeleton />
      <CarouselSkeleton />
      <ListingsSkeleton />

      {/* Key Features skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-56 mx-auto mb-4" />
            <Skeleton className="h-5 w-96 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-16 w-16 mx-auto mb-4 rounded-full" />
                <Skeleton className="h-6 w-32 mx-auto mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer skeleton */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <Skeleton className="h-6 w-24 mb-4 bg-white/20" />
                {[1, 2, 3, 4].map((j) => (
                  <Skeleton key={j} className="h-4 w-full mb-2 bg-white/10" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
