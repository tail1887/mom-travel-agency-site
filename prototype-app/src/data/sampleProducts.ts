export type ProductStatus = '모집중' | '출발확정' | '마감임박'

export type TravelProduct = {
  id: string
  title: string
  region: string
  category: string
  duration: string
  departure: string
  status: ProductStatus
  price: string
  deposit: string
  intensity: string
  image: string
  tags: string[]
  summary: string
  itinerary: string[]
  included: string[]
  excluded: string[]
  notes: string[]
}

export const sampleProducts: TravelProduct[] = [
  {
    id: 'silk-road',
    title: '중앙아시아 실크로드 12일',
    region: '우즈베키스탄 · 카자흐스탄',
    category: '문화탐방',
    duration: '10박 12일',
    departure: '2026.09.18',
    status: '모집중',
    price: '상담가',
    deposit: '예약금 700,000원',
    intensity: '보통',
    image:
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=82',
    tags: ['실크로드', '전문인솔자', '소규모'],
    summary:
      '고대 도시와 사막 길을 천천히 둘러보는 문화탐방 일정입니다. 이동과 휴식의 균형을 중시합니다.',
    itinerary: ['타슈켄트 도착 및 휴식', '사마르칸트 유적 탐방', '부하라 구시가지 산책', '알마티 귀국 전 자유시간'],
    included: ['왕복 항공 상담', '전 일정 숙박', '전용차량', '전문 인솔자'],
    excluded: ['개인 경비', '일부 현지 식사', '여행자 보험 선택 업그레이드'],
    notes: ['여권 유효기간을 확인해야 합니다.', '현지 사정에 따라 방문 순서가 조정될 수 있습니다.'],
  },
  {
    id: 'india-rajasthan',
    title: '북인도 라자스탄 14일',
    region: '델리 · 자이푸르 · 바라나시',
    category: '테마여행',
    duration: '12박 14일',
    departure: '2026.11.06',
    status: '출발확정',
    price: '4,890,000원부터',
    deposit: '예약금 800,000원',
    intensity: '여유',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=82',
    tags: ['인도', '문화유산', '맞춤상담'],
    summary:
      '인도 핵심 도시를 깊게 보는 일정입니다. 긴 이동일 이후에는 충분한 휴식 시간을 배치합니다.',
    itinerary: ['델리 도착과 올드델리 산책', '자이푸르 궁전과 시장 탐방', '아그라 타지마할 방문', '바라나시 새벽 보트'],
    included: ['호텔 숙박', '전용차량', '한국어 안내', '주요 입장권'],
    excluded: ['인도 비자', '개인 음료', '매너팁'],
    notes: ['사전 건강 상담을 권장합니다.', '일정 중 일부 구간은 국내선 이동이 포함될 수 있습니다.'],
  },
  {
    id: 'camino',
    title: '산티아고 순례길 핵심 11일',
    region: '스페인 · 포르투갈',
    category: '성지순례',
    duration: '9박 11일',
    departure: '2026.10.02',
    status: '마감임박',
    price: '3,590,000원',
    deposit: '예약금 500,000원',
    intensity: '걷기 있음',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82',
    tags: ['순례길', '걷기여행', '소그룹'],
    summary:
      '긴 순례가 부담스러운 고객을 위한 핵심 구간 일정입니다. 하루 걷는 시간과 휴식 지점을 명확히 안내합니다.',
    itinerary: ['포르투 도착', '해안길 핵심 구간 걷기', '산티아고 대성당 도착', '마드리드 경유 귀국'],
    included: ['숙박', '전용 이동', '순례길 안내자료', '인솔자 동행'],
    excluded: ['개인 장비', '일부 점심', '개인 여행자 보험'],
    notes: ['편한 신발 준비가 필요합니다.', '날씨에 따라 걷기 구간이 조정될 수 있습니다.'],
  },
]

export const agencyInfo = {
  name: '여행이음',
  phone: '02-000-0000',
  kakao: '카카오톡 상담',
  hours: '평일 09:30 - 18:00',
  address: '서울시 여행구 상담로 12',
  business: '사업자등록번호 000-00-00000',
}
