import { Filter, Search } from 'lucide-react'
import { ConsultationCTA } from '../components/ConsultationCTA'
import { ProductCard } from '../components/ProductCard'
import { ProductDetailPreview } from '../components/ProductDetailPreview'
import { PrototypeNav } from '../components/PrototypeNav'
import { TrustFooter } from '../components/TrustFooter'
import { sampleProducts } from '../data/sampleProducts'

const categories = ['전체', '문화탐방', '테마여행', '성지순례', '출발확정']

export function ProductMarketplace() {
  return (
    <main className="concept-page marketplace-theme">
      <PrototypeNav current="marketplace" />
      <section className="marketplace-top">
        <div>
          <span className="eyebrow">C안 · 상품몰형</span>
          <h1>출발일과 가격을 빠르게 비교하는 여행상품 목록</h1>
          <p>상품 수가 많아질 때도 고객이 지역, 기간, 상태, 가격을 빠르게 훑어볼 수 있는 구조입니다.</p>
        </div>
        <ConsultationCTA title="원하는 조건을 못 찾으셨나요?" />
      </section>
      <section className="market-controls" aria-label="상품 검색과 필터">
        <label>
          <Search size={18} aria-hidden="true" />
          <input type="search" placeholder="지역, 상품명, 출발월 검색" />
        </label>
        <div className="filter-pills">
          <Filter size={18} aria-hidden="true" />
          {categories.map((category) => (
            <button key={category} type="button">
              {category}
            </button>
          ))}
        </div>
      </section>
      <section className="market-list">
        {sampleProducts.concat(sampleProducts.slice(0, 2)).map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} compact />
        ))}
      </section>
      <ProductDetailPreview product={sampleProducts[2]} heading="목록에서 이어지는 상세 구성" />
      <TrustFooter />
    </main>
  )
}
