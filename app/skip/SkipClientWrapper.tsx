'use client';

import { useEffect, useState } from 'react';
import { BookingStepper } from './components/BookingStepper';
import { Skip } from '@/lib/types';
import { SkipCard } from './components/SkipCard';
import { PermitCheck } from './components/PermitCheck'; // create this component
import { Button } from '@/components/ui/button';
import { SkipFilters } from './components/SkipFilters';

interface Props {
  skips: Skip[];
  postcode: string;
  area: string;
}

const steps = [
  { label: 'Postcode' },
  { label: 'Waste Type' },
  { label: 'Select Skip' },
  { label: 'Permit Check' },
  { label: 'Choose Date' },
  { label: 'Payment' }
];

export default function SkipClientWrapper({ skips, postcode, area }: Props) {
  const [filteredSkips, setFilteredSkips] = useState<Skip[]>(skips);
  const [currentStep, setCurrentStep] = useState(2);
  const [filters, setFilters] = useState({
    size: '',
    onlyHeavyWaste: false,
    maxPrice: '',
    roadAllowed: false
  });


  useEffect(() => {
    const filtered = skips.filter((skip) => {
      const sizeMatch = filters.size
        ? skip.size === parseInt(filters.size)
        : true;

      const heavyWasteMatch = filters.onlyHeavyWaste
        ? skip.allows_heavy_waste
        : true;

      const roadAllowed = filters.roadAllowed
        ? skip.allowed_on_road
        : true;

      const priceMatch = filters.maxPrice
        ? skip.price_before_vat <= parseFloat(filters.maxPrice)
        : true;

      return sizeMatch && heavyWasteMatch && priceMatch && roadAllowed;
    });

    setFilteredSkips(filtered);
  }, [filters, skips]);

  return (
    <div className="space-y-6">
      <BookingStepper
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        steps={steps}
      />

      {currentStep === 2 && (<>
        <SkipFilters filters={filters} setFilters={setFilters} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              steps={steps}
            />
          ))}
        </div></>
      )}

      {currentStep === 3 && (
        <PermitCheck
          postcode={postcode}
          area={area}
          onNext={() => setCurrentStep(currentStep + 1)}
          onBack={() => setCurrentStep(currentStep - 1)}
        />
      )}

      {/* Step 4: Choose Date */}
      {currentStep === 4 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 4: Choose Delivery Date</h2>
          <p className="text-muted-foreground">Add a calendar picker or date selection UI here.</p>
          <div className="flex gap-4">
            <Button onClick={() => setCurrentStep(3)} variant="outline">Back</Button>
            <Button onClick={() => setCurrentStep(5)}>Continue</Button>
          </div>
        </div>
      )}

      {/* Step 5: Payment */}
      {currentStep === 5 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 5: Payment</h2>
          <p className="text-muted-foreground">Integrate Stripe or another payment solution here.</p>
          <div className="flex gap-4">
            <Button onClick={() => setCurrentStep(4)} variant="outline">Back</Button>
            <Button onClick={() => setCurrentStep(0)}>Finish</Button>
          </div>
        </div>
      )}
    </div>
  );
}
