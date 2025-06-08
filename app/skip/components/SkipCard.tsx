// components/SkipCard.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skip } from '@/lib/types';

interface Props {
  skip: Skip;
}

export function SkipCard({ skip }: Props) {
  return (
    <Card className="w-full shadow-md">
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Size: {skip.size} Yard</h2>
          <span className="text-sm text-muted-foreground">
            {skip.hire_period_days} days hire
          </span>
        </div>

        <div className="text-sm text-muted-foreground">
          Postcode: <strong>{skip.postcode}</strong>
        </div>

        <div className="text-sm">
          Price: £{skip.price_before_vat} + VAT ({skip.vat}%)
        </div>

        <div className="flex gap-2 flex-wrap">
          {skip.allowed_on_road && <Badge>Allowed on Road</Badge>}
          {skip.allows_heavy_waste && <Badge>Heavy Waste OK</Badge>}
          {!skip.allowed_on_road && <Badge variant="destructive">No Road Use</Badge>}
          {!skip.allows_heavy_waste && <Badge variant="destructive">No Heavy Waste</Badge>}
        </div>
      </CardContent>
    </Card>
  );
}
