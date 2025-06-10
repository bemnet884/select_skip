// app/skip/loading.tsx
'use client'
import { useState } from 'react';
import { BookingStepper } from './components/BookingStepper';
import { LoadingSkips } from './components/LoadingSkips';

export default function Loading() {
  const [currentStep, setCurrentStep] = useState(2);
  const steps = [
    { label: 'Postcode' },
    { label: 'Waste Type' },
    { label: 'Select Skip' },
    { label: 'Permit Check' },
    { label: 'Choose Date' },
    { label: 'Payment' },
  ];

  return (
    <main className="max-w-6xl mx-auto p-4 space-y-6">
      <BookingStepper currentStep={currentStep} setCurrentStep={setCurrentStep} steps={steps} />
      <LoadingSkips />
    </main>
  );
}
