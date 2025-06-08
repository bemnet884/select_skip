// app/skip/page.tsx

import { getSkipsByPostcodeAndArea } from "./action";
import { SkipCard } from "./components/SkipCard";



export default async function SkipResultsPage({ searchParams }: {
  searchParams?: { postcode?: string; area?: string };
}) {

  const postcode = searchParams?.postcode ?? '';
  const area = searchParams?.area ?? '';

  if (!postcode || !area) {
    return (
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-xl font-bold">Invalid search</h1>
        <p>Please provide both postcode and area.</p>
      </main>
    );
  }

  const skips = await getSkipsByPostcodeAndArea(postcode, area);

  return (
    <main className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">
        Skips in {postcode}, Area: {area}
      </h1>
      {skips.length === 0 ? (
        <p>No skips found.</p>
      ) : (
        skips.map((skip) => <SkipCard key={skip.id} skip={skip} />)
      )}
    </main>
  );
}
