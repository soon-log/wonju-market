import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MARKETS } from '../constants/markets';

export default function MarketGrid() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {MARKETS.map((market) => (
          <Card key={market.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-3">
              <Image
                src={market.logoUrl}
                alt={market.name}
                width={32}
                height={32}
                className="rounded"
              />
              <CardTitle className="text-base">{market.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-2 rounded-full" style={{ backgroundColor: market.brandColor }} />
              <p className="mt-3 text-sm text-muted-foreground">
                오늘의 행사 상품을 확인해보세요.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


