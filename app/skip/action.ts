// app/skip/actions.ts
'use server';

import { Skip } from '@/lib/types';

export async function getSkipsByPostcodeAndArea(postcode: string, area: string): Promise<Skip[]> {
  const res = await fetch(
    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch skips for ${postcode} and ${area}`);
  }

  const data: Skip[] = await res.json();
  return data;
}
