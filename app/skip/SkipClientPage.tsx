'use client';

import { useState, useEffect } from 'react';
import { SkipGrid } from './components/SkipGrid';
import { SkipFilters } from './components/SkipFilters';
import { Skip } from '@/lib/types';
import { ErrorState } from './components/ErrorState';
import { BookingStepper } from './components/BookingStepper';

interface Props {
  skips: Skip[];
  postcode: string;
  area: string;
}

export function SkipClientPage({ skips, postcode, area }: Props) {
  const [filteredSkips, setFilteredSkips] = useState<Skip[]>(skips);
  const [currentStep, setCurrentStep] = useState(2);
  const [filters, setFilters] = useState({
    size: '',
    onlyHeavyWaste: false,
    maxPrice: '',
    roadAllowed: false
  });

  const steps = [
    { label: 'Postcode' },
    { label: 'Waste Type' },
    { label: 'Select Skip' },
    { label: 'Permit Check' },
    { label: 'Choose Date' },
    { label: 'Payment' }
  ];

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
      <BookingStepper currentStep={currentStep} steps={steps} setCurrentStep={setCurrentStep} />
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold">Available Skips</h1>
        <p className="text-muted-foreground text-sm">
          Showing results for: <strong>{postcode}</strong> - {area}
        </p>
      </div>

      <SkipFilters filters={filters} setFilters={setFilters} />

      {filteredSkips.length === 0 ? (
        <ErrorState message="No skips found for this location and filter." />
      ) : (
          <SkipGrid
            skips={filteredSkips}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            steps={steps}
          />
      )}
    </div>
  );
}