'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import { FunnelIcon } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { FilterForm } from './FilterForm';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
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
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [open, setOpen] = useState(false);

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <FunnelIcon className="h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto">
          <SheetHeader>
            <VisuallyHidden>
              <SheetTitle>Filters</SheetTitle>
            </VisuallyHidden>
          </SheetHeader>

          <FilterForm filters={filters} setFilters={setFilters} onClose={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <FunnelIcon className="h-4 w-4" />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] sm:w-[400px] max-h-[70vh] overflow-y-auto">
        <FilterForm filters={filters} setFilters={setFilters} onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  );
}
