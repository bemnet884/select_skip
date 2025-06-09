'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { PoundSterlingIcon, FunnelIcon } from 'lucide-react';

interface Filters {
  size: string;
  onlyHeavyWaste: boolean;
  maxPrice: string;
  roadAllowed: boolean;
}

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export function SkipFilters({ filters, setFilters }: Props) {
  return (
    <section className="border rounded-xl p-4 sm:p-6 shadow-md bg-muted/30 space-y-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <FunnelIcon className="h-5 w-5" />
        <span className="text-sm font-semibold">Filters</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Skip Size */}
        <div className="space-y-1">
          <Label htmlFor="size">Size (yd³)</Label>
          <Input
            id="size"
            type="number"
            placeholder="e.g., 6"
            value={filters.size}
            onChange={(e) =>
              setFilters((f) => ({ ...f, size: e.target.value }))
            }
          />
        </div>

        {/* Max Price */}
        <div className="space-y-1">
          <Label htmlFor="maxPrice">Max Price (£)</Label>
          <div className="relative">
            <PoundSterlingIcon className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="maxPrice"
              type="number"
              className="pl-8"
              placeholder="100"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((f) => ({ ...f, maxPrice: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center gap-2">
            <Checkbox
              id="heavyWaste"
              checked={filters.onlyHeavyWaste}
              onCheckedChange={(checked) =>
                setFilters((f) => ({ ...f, onlyHeavyWaste: !!checked }))
              }
            />
            <Label htmlFor="heavyWaste">Allows Heavy Waste</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="roadAllowed"
              checked={filters.roadAllowed}
              onCheckedChange={(checked) =>
                setFilters((f) => ({ ...f, roadAllowed: !!checked }))
              }
            />
            <Label htmlFor="roadAllowed">Allows on Road</Label>
          </div>
        </div>
      </div>
    </section>
  );
}
