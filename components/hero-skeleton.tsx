import { Skeleton } from "@/components/skeleton"

export default function HeroSkeleton() {
  return (
    <section className="relative bg-gradient-to-br from-orange-100 to-orange-300 text-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content skeleton */}
          <div className="text-center lg:text-left">
            <Skeleton className="h-12 w-3/4 mb-6 bg-white/20" />
            <Skeleton className="h-6 w-full mb-4 bg-white/15" />
            <Skeleton className="h-6 w-5/6 mb-8 bg-white/15" />

            {/* Buttons skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Skeleton className="h-12 w-40 bg-white/20" />
              <Skeleton className="h-12 w-36 bg-white/15" />
            </div>

            {/* Stats skeleton */}
            <div className="grid grid-cols-3 gap-8 text-center">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <Skeleton className="h-8 w-16 mx-auto mb-2 bg-white/20" />
                  <Skeleton className="h-4 w-20 mx-auto bg-white/15" />
                </div>
              ))}
            </div>
          </div>

          {/* Right image skeleton */}
          <div className="relative">
            <Skeleton className="h-96 w-full bg-white/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
