'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skip } from '@/lib/types';
import {
  Truck,
  CalendarDays,
  MapPin,
  PoundSterling,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

interface Props {
  skip: Skip;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  steps: { label: string }[];
}

export function SkipCard({ skip, currentStep, setCurrentStep, steps }: Props) {
  const [open, setOpen] = useState(false);

  const handleConfirm = async () => {

    try {
      setOpen(false);
      setTimeout(() => {
        if (setCurrentStep && currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      }, 100);

    } catch (error) {
      console.error(error);
      toast.error("Failed to select skip", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card className="w-full shadow-sm hover:shadow-md transition-shadow rounded-2xl border border-muted">
        <CardContent className="p-6 space-y-5">
          {/* Image */}
          <div className="relative w-full h-48 md:h-64 rounded-t-2xl overflow-hidden">
            <Image
              src="/skip4.jpg"
              alt={`${skip.size} yard skip`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">{skip.size} Yard Skip</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <CalendarDays className="w-4 h-4" />
              {skip.hire_period_days} days
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            Postcode: <span className="font-medium text-foreground">{skip.postcode}</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 text-base font-semibold text-green-700">
            <PoundSterling className="w-4 h-4" />
            £{skip.price_before_vat} + VAT ({skip.vat}%)
          </div>

          {/* Feature Badges */}
          <div className="flex gap-2 flex-wrap">
            {skip.allowed_on_road ? (
              <Badge variant="outline">Allowed on Road</Badge>
            ) : (
              <Badge variant="destructive">No Road Use</Badge>
            )}

            {skip.allows_heavy_waste ? (
              <Badge variant="outline">Heavy Waste OK</Badge>
            ) : (
              <Badge variant="destructive">No Heavy Waste</Badge>
            )}
          </div>

          {/* Modal Trigger */}
          <DialogTrigger asChild>
            <Button className="w-full font-semibold mt-2" size="lg">
              Select
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>

      {/* Modal Content */}
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Confirm Your Selection</DialogTitle>
          <DialogDescription>
            You selected a {skip.size} yard skip for {skip.hire_period_days} days.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <p className="text-muted-foreground">
            <MapPin className="inline w-4 h-4 mr-1" />
            Postcode: <span className="text-foreground font-medium">{skip.postcode}</span>
          </p>

          <p className="text-muted-foreground">
            <PoundSterling className="inline w-4 h-4 mr-1" />
            Total: <span className="text-green-700 font-semibold">£{skip.price_before_vat} + VAT</span>
          </p>
          <p className="text-xs mt-2">
            <strong className="text-foreground">Disclaimer:</strong><br />
            Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
          </p>
        </div>

        <DialogFooter className="mt-6">
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleConfirm}>
            Confirm & Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
