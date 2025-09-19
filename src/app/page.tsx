import Hero from '@/features/home/components/hero';
import MarketGrid from '@/features/home/components/market-grid';
import WhyUs from '@/features/home/components/why-us';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MarketGrid />
      <WhyUs />
    </div>
  )
}
