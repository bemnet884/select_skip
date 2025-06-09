// components/SkipGrid.tsx
'use client';

import { SkipCard } from './SkipCard';
import { Skip } from '@/lib/types';

interface Props {
  skips: Skip[];
}

export function SkipGrid({ skips }: Props) {
  if (!skips.length) {
    return (
      <p className="text-center text-muted-foreground py-10">
        No skips found for this location.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {skips.map((skip) => (
        <SkipCard key={skip.id} skip={skip} currentStep={0} setCurrentStep={function (step: number): void {
          throw new Error('Function not implemented.');
        }} steps={[]} />
      ))}
    </div>
  );
}
