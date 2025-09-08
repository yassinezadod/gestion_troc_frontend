import { Skeleton } from "@/components/skeleton"

export default function CarouselSkeleton() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>

        {/* Carousel skeleton */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-80">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons skeleton */}
          <Skeleton className="absolute left-4 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full" />
          <Skeleton className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full" />
        </div>
      </div>
    </section>
  )
}
