import { Headphones, MessageSquareText, TimerReset } from 'lucide-react'
import { ConsultationCTA } from '../components/ConsultationCTA'
import { ProductCard } from '../components/ProductCard'
import { ProductDetailPreview } from '../components/ProductDetailPreview'
import { PrototypeNav } from '../components/PrototypeNav'
import { TrustFooter } from '../components/TrustFooter'
import { sampleProducts } from '../data/sampleProducts'

export function ConsultationLanding() {
  return (
    <main className="concept-page consultation-theme">
      <PrototypeNav current="consultation" />
      <section className="consultation-hero">
        <div>
          <span className="eyebrow">D안 · 상담 전환형</span>
          <h1>어디로 갈지 정했다면, 일정은 상담으로 맞춥니다</h1>
          <p>상품을 오래 고르기보다 전화와 카카오톡으로 출발일, 예산, 이동 난이도를 빠르게 확인하는 방향입니다.</p>
          <ConsultationCTA tone="dark" title="지금 상담 가능" />
        </div>
        <aside className="consult-card">
          <h2>상담 전에 알려주세요</h2>
          <ul>
            <li>가고 싶은 지역</li>
            <li>희망 출발월</li>
            <li>인원과 연령대</li>
            <li>걷기나 장거리 이동 가능 여부</li>
          </ul>
        </aside>
      </section>
      <section className="process-row">
        <article>
          <MessageSquareText size={24} aria-hidden="true" />
          <h2>문의</h2>
          <p>전화나 카카오톡으로 원하는 여행을 남깁니다.</p>
        </article>
        <article>
          <Headphones size={24} aria-hidden="true" />
          <h2>상담</h2>
          <p>출발일, 가격, 난이도, 포함 사항을 확인합니다.</p>
        </article>
        <article>
          <TimerReset size={24} aria-hidden="true" />
          <h2>제안</h2>
          <p>가장 맞는 상품이나 맞춤 일정을 안내합니다.</p>
        </article>
      </section>
      <section className="section-wrap">
        <div className="section-heading">
          <span>상담으로 많이 묻는 상품</span>
          <h2>선택지를 줄이고 문의 흐름을 강하게</h2>
        </div>
        <div className="product-grid two">
          {sampleProducts.slice(0, 2).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <ProductDetailPreview product={sampleProducts[0]} heading="문의 직전 확인할 상세 정보" />
      <TrustFooter />
      <div className="mobile-sticky-cta">
        <ConsultationCTA tone="compact" title="상담 바로 연결" />
      </div>
    </main>
  )
}
