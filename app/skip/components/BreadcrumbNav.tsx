// components/BreadcrumbNav.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function BreadcrumbNav() {
  const router = useRouter();

  return (
    <div className="mb-4">
      <Button variant="ghost" onClick={() => router.back()} className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Search
      </Button>
    </div>
  );
}
