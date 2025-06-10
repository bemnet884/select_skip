'use client';

import { Skeleton } from '@/components/ui/skeleton';

export function LoadingSkips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 p-4 border rounded-xl shadow-sm bg-white"
        >
          <Skeleton className="h-24 rounded-md w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}
