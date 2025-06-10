'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { FunnelIcon, PoundSterlingIcon } from 'lucide-react';
import { useState } from 'react';

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
  const [open, setOpen] = useState(false);
  const resetFilters = () => {
    setFilters({
      size: '',
      maxPrice: '',
      onlyHeavyWaste: false,
      roadAllowed: false,
    });
    setOpen(false); // Close popover after reset
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <FunnelIcon className="h-4 w-4" />
          Filters
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[320px] sm:w-[400px] space-y-4">
        {/* Size */}
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
          {/* Reset Button */}
          <div className="pt-2">
            <Button
              variant="ghost"
              className="w-full text-sm"
              onClick={resetFilters}
            >
              Reset Filters
            </Button>
          </div>

        </div>

      </PopoverContent>
    </Popover>
  );
}
