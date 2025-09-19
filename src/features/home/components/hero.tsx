'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';


export default function Hero() {
  const [value, setValue] = React.useState('');

  const onSearch = (query: string) => {
    console.log('search:', query);
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          원주 마트 가격 비교
        </h1>
        <p className="mt-3 text-muted-foreground">
          이마트, 홈플러스, 롯데마트의 실시간 가격과 행사 정보를 한 곳에서.
        </p>

        <div className="mt-6 flex gap-2">
          <Input
            placeholder="품목을 검색하세요 (예: 돼지고기, 두부)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="h-11"
          />
          <Button
            className="h-11 gap-2"
            onClick={() => onSearch?.(value)}
          >
            <Search className="h-4 w-4" />
            검색
          </Button>
        </div>
      </div>
    </section>
  );
}


