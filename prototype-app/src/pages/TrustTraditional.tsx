import { Bell, MessageCircle, ShieldCheck } from 'lucide-react'
import { ConsultationCTA } from '../components/ConsultationCTA'
import { ProductCard } from '../components/ProductCard'
import { ProductDetailPreview } from '../components/ProductDetailPreview'
import { PrototypeNav } from '../components/PrototypeNav'
import { TrustFooter } from '../components/TrustFooter'
import { sampleProducts } from '../data/sampleProducts'

export function TrustTraditional() {
  return (
    <main className="concept-page trust-theme">
      <PrototypeNav current="trust" />
      <section className="concept-hero trust-hero">
        <div className="hero-copy">
          <span className="eyebrow">A안 · 전통 신뢰형</span>
          <h1>믿고 전화할 수 있는 상담 중심 여행사</h1>
          <p>큰 연락처, 명확한 상품 정보, 사업자 신뢰 요소를 앞에 둔 안정적인 여행사 화면입니다.</p>
          <ConsultationCTA title="대표 상담 번호" />
        </div>
        <div className="notice-board">
          <h2>오늘의 안내</h2>
          <ul>
            <li>
              <Bell size={18} aria-hidden="true" />
              9월 실크로드 일정 집중 모객 중
            </li>
            <li>
              <ShieldCheck size={18} aria-hidden="true" />
              여행자 보험 및 안전 안내 사전 고지
            </li>
            <li>
              <MessageCircle size={18} aria-hidden="true" />
              카카오톡으로 출발 가능 여부 확인
            </li>
          </ul>
        </div>
      </section>
      <section className="section-wrap">
        <div className="section-heading">
          <span>대표 상품</span>
          <h2>출발일과 상담 가능 여부가 잘 보이는 구성</h2>
        </div>
        <div className="product-grid">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <ProductDetailPreview product={sampleProducts[0]} />
      <TrustFooter />
      <div className="mobile-sticky-cta">
        <ConsultationCTA tone="compact" title="전화 또는 카카오톡 문의" />
      </div>
    </main>
  )
}
