// Always client components for UI, but constants can be module-only.
export type Market = {
  id: string;
  name: string;
  logoUrl: string;
  brandColor: string;
};

export const MARKETS: Market[] = [
  {
    id: 'emart',
    name: '이마트',
    logoUrl: 'https://picsum.photos/seed/emart/64/64',
    brandColor: '#F7D21E',
  },
  {
    id: 'homeplus',
    name: '홈플러스',
    logoUrl: 'https://picsum.photos/seed/homeplus/64/64',
    brandColor: '#E60012',
  },
  {
    id: 'lottemart',
    name: '롯데마트',
    logoUrl: 'https://picsum.photos/seed/lottemart/64/64',
    brandColor: '#D81B60',
  },
];


