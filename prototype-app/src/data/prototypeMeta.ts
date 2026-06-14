export type PrototypeSlug = 'trust' | 'premium' | 'marketplace' | 'consultation' | 'story'

export type PrototypeMeta = {
  slug: PrototypeSlug
  label: string
  title: string
  description: string
  fit: string
  route: string
  references: string
}

export const prototypeMeta: PrototypeMeta[] = [
  {
    slug: 'trust',
    label: 'A안',
    title: '전통 신뢰형',
    description: '전화상담과 신뢰 정보를 크게 보여주는 안정적인 여행사 스타일',
    fit: '중장년 고객, 전화 문의 중심, 공지/후기/회사정보가 중요한 여행사',
    route: '/prototypes/trust',
    references: '혜초여행, 손안의여행의 정보 구조와 신뢰 요소',
  },
  {
    slug: 'premium',
    label: 'B안',
    title: '프리미엄 맞춤여행형',
    description: '큰 이미지와 여백으로 전문 맞춤여행 느낌을 강조하는 스타일',
    fit: '인도, 성지순례, 특수지역, 소규모 테마여행',
    route: '/prototypes/premium',
    references: '작은별여행사, 인도로가는길의 전문성 표현',
  },
  {
    slug: 'marketplace',
    label: 'C안',
    title: '상품몰형',
    description: '가격, 출발일, 기간을 빠르게 비교할 수 있는 상품 중심 스타일',
    fit: '상품 수가 많고 카테고리/출발일 비교가 중요한 여행사',
    route: '/prototypes/marketplace',
    references: '손안의여행, 혜초여행의 상품 카드 정보 밀도',
  },
  {
    slug: 'consultation',
    label: 'D안',
    title: '상담 전환형',
    description: '전화와 카카오톡 문의를 가장 빠르게 유도하는 스타일',
    fit: '상담 후 맞춤 견적을 내는 운영 방식',
    route: '/prototypes/consultation',
    references: '오지투어, 작은별여행사의 상담 중심 패턴',
  },
  {
    slug: 'story',
    label: 'E안',
    title: '콘텐츠/스토리형',
    description: '후기, 여행 이야기, 인솔자 전문성으로 신뢰를 쌓는 스타일',
    fit: '후기와 여행지 설명을 통해 천천히 설득하는 여행사',
    route: '/prototypes/story',
    references: '작은별여행사, 손안의여행, 인도로가는길의 스토리 요소',
  },
]
