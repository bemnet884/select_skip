'use client';

import { SkipCard } from './SkipCard';
import { Skip } from '@/lib/types';
import { BookingStepper } from './BookingStepper';

interface Props {
  skips: Skip[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  steps: { label: string }[];
}

export function SkipGrid({ skips, currentStep, setCurrentStep, steps }: Props) {
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
        <SkipCard
          key={skip.id}
          skip={skip}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          steps={steps}
        />
      ))}
    </div>
  );
}