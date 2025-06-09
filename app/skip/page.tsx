// app/skip/page.tsx
import { getSkipsByPostcodeAndArea } from "./action";
import { type Metadata } from "next";
import { BreadcrumbNav } from "./components/BreadcrumbNav";
import { SkipClientPage } from "./SkipClientPage";
import { BookingStepper } from "./components/BookingStepper";

export const metadata: Metadata = {
  title: "Skip Results",
};

export default async function SkipResultsPage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const params = await searchParams;
  const postcode = typeof params?.postcode === 'string' ? params.postcode : '';
  const area = typeof params?.area === 'string' ? params.area : '';

  if (!postcode || !area) {
    return (
      <main className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-xl font-bold">Invalid search</h1>
        <p>Please provide both postcode and area.</p>
      </main>
    );
  }

  const skips = await getSkipsByPostcodeAndArea(postcode, area);

  const steps = [
    { label: 'Postcode' },
    { label: 'Waste Type' },
    { label: 'Select Skip' },
    { label: 'Permit Check' },
    { label: 'Choose Date' },
    { label: 'Payment' }
  ];
  return (
    <main className="max-w-6xl mx-auto p-4 space-y-6">
      <BookingStepper currentStep={2} steps={steps} />
      <SkipClientPage skips={skips} postcode={postcode} area={area} />
    </main>
  );
}
