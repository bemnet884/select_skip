'use client';

import { Button } from '@/components/ui/button';

interface Props {
  postcode: string;
  area: string;
  onNext: () => void;
  onBack: () => void;
}

export function PermitCheck({ postcode, area, onNext, onBack }: Props) {
  return (
    <div className="p-6 border rounded-lg space-y-4">
      <h2 className="text-xl font-bold">Permit Check</h2>
      <p>Checking if a permit is required for postcode <strong>{postcode}</strong> in area <strong>{area}</strong>.</p>

      {/* Example content */}
      <p>You do not need a permit for this location.</p>

      <div className="flex gap-4 mt-4">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
