// app/skip/loading.tsx
import { BookingStepper } from './components/BookingStepper';
import { LoadingSkips } from './components/LoadingSkips';

export default function Loading() {
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
      <BookingStepper currentStep={2} steps={steps} />
      <LoadingSkips />
    </main>
  );
}
