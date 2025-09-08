import { Skeleton } from "@/components/skeleton"

export default function NavbarSkeleton() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo skeleton */}
          <Skeleton className="h-8 w-32" />

          {/* Desktop menu skeleton */}
          <div className="hidden md:flex items-center space-x-8">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-18" />
          </div>

          {/* Search bar skeleton */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <Skeleton className="h-10 w-full rounded-full" />
          </div>

          {/* Right side buttons skeleton */}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-24" />
          </div>

          {/* Mobile menu button skeleton */}
          <div className="md:hidden">
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </div>
    </nav>
  )
}
