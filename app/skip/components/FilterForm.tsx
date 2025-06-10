// components/FilterForm.tsx
'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { PoundSterlingIcon } from 'lucide-react';

interface Filters {
  size: string;
  onlyHeavyWaste: boolean;
  maxPrice: string;
  roadAllowed: boolean;
}

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onClose?: () => void; // optional for closing drawer/sheet
}

export function FilterForm({ filters, setFilters, onClose }: Props) {
  const resetFilters = () => {
    setFilters({
      size: '',
      maxPrice: '',
      onlyHeavyWaste: false,
      roadAllowed: false,
    });
    if (onClose) onClose();
  };

  return (
    <div className="space-y-4 p-4">
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

      <div className="space-y-3">
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

        <div className="pt-2">
          <Button variant="ghost" className="w-full text-sm" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
