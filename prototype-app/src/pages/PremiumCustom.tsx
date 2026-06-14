import { Gem, Route, Sparkles } from 'lucide-react'
import { ConsultationCTA } from '../components/ConsultationCTA'
import { ProductCard } from '../components/ProductCard'
import { ProductDetailPreview } from '../components/ProductDetailPreview'
import { PrototypeNav } from '../components/PrototypeNav'
import { TrustFooter } from '../components/TrustFooter'
import { sampleProducts } from '../data/sampleProducts'

export function PremiumCustom() {
  return (
    <main className="concept-page premium-theme">
      <PrototypeNav current="premium" />
      <section className="concept-hero premium-hero">
        <img src={sampleProducts[1].image} alt="인도 맞춤여행 이미지" />
        <div className="premium-copy">
          <span className="eyebrow">B안 · 프리미엄 맞춤여행형</span>
          <h1>낯선 길을 편안하게 설계하는 전문 여행</h1>
          <p>특수지역, 성지순례, 장거리 일정처럼 상담이 필요한 여행에 맞춘 차분한 프리미엄 방향입니다.</p>
          <ConsultationCTA tone="dark" title="전문 상담으로 일정 설계" />
        </div>
      </section>
      <section className="curation-strip">
        <article>
          <Gem size={24} aria-hidden="true" />
          <h2>큐레이션</h2>
          <p>상품 수보다 엄선된 일정과 여행 난이도를 강조합니다.</p>
        </article>
        <article>
          <Route size={24} aria-hidden="true" />
          <h2>동선 설계</h2>
          <p>긴 이동 뒤에는 휴식과 지역 체험을 균형 있게 배치합니다.</p>
        </article>
        <article>
          <Sparkles size={24} aria-hidden="true" />
          <h2>상담 경험</h2>
          <p>가격보다 원하는 여행의 분위기와 페이스를 먼저 묻습니다.</p>
        </article>
      </section>
      <section className="section-wrap">
        <div className="section-heading">
          <span>추천 일정</span>
          <h2>이미지와 설명이 여행의 격을 먼저 전달</h2>
        </div>
        <div className="premium-products">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </section>
      <ProductDetailPreview product={sampleProducts[1]} heading="맞춤 상담용 상세 구성" />
      <TrustFooter />
    </main>
  )
}
