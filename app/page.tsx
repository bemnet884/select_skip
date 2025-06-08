'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [postcode, setPostcode] = useState('');
  const [area, setArea] = useState('');
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!postcode.trim() || !area.trim()) return;

    const search = new URLSearchParams({
      postcode: postcode.trim().toUpperCase(),
      area: area.trim(),
    }).toString();

    router.push(`/skip?${search}`);
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Find Skips</h1>
        <Input
          placeholder="Enter postcode (e.g. NR32)"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <Input
          placeholder="Enter area (e.g. Lowestoft)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <Button type="submit" className="w-full">
          Search
        </Button>
      </form>
    </main>
  );
}
