import { CheckCircle2, TimerReset, Wallet } from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: '정확한 데이터',
    desc: '매일 업데이트되는 가격 정보로 신뢰할 수 있는 비교 결과.',
  },
  {
    icon: Wallet,
    title: '실질적인 절약',
    desc: '마트별 최저가를 제시하여 장바구니 비용을 줄여줍니다.',
  },
  {
    icon: TimerReset,
    title: '시간 절약',
    desc: '한 번의 검색으로 세 곳의 가격을 동시에 확인.',
  },
];

export default function WhyUs() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">왜 원주마트비교인가요?</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-2">
              <Icon className="h-6 w-6" />
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


