import { CalendarDays, Filter, Search, SlidersHorizontal } from 'lucide-react'
import { PrototypeNav } from '../components/PrototypeNav'
import { agencyInfo, sampleProducts } from '../data/sampleProducts'

const filters = ['출발확정', '상담가', '성지순례', '걷기 적음', '소규모']

export function ProductMarketplace() {
  return (
    <main className="concept-page market-page">
      <PrototypeNav current="marketplace" />
      <section className="market-shell">
        <aside className="market-filter">
          <h1>여행상품 찾기</h1>
          <label>
            <Search size={18} aria-hidden="true" />
            <input type="search" placeholder="지역, 상품명 검색" />
          </label>
          <div>
            <strong>조건 필터</strong>
            {filters.map((filter) => (
              <button key={filter} type="button">
                <Filter size={15} aria-hidden="true" />
                {filter}
              </button>
            ))}
          </div>
          <a href={`tel:${agencyInfo.phone}`} className="market-phone">
            조건 상담 {agencyInfo.phone}
          </a>
        </aside>

        <section className="market-results">
          <div className="market-toolbar">
            <div>
              <span className="eyebrow">C안 · 상품몰형</span>
              <h2>가격, 날짜, 상태를 한 화면에서 비교</h2>
            </div>
            <button type="button">
              <SlidersHorizontal size={18} aria-hidden="true" />
              보기 설정
            </button>
          </div>

          <div className="market-comparison">
            {sampleProducts.concat(sampleProducts).map((product, index) => (
              <article key={`${product.id}-${index}`}>
                <img src={product.image} alt={`${product.title} 이미지`} />
                <div className="market-product-body">
                  <div>
                    <span className={`status-badge ${product.status}`}>{product.status}</span>
                    <h3>{product.title}</h3>
                    <p>{product.region}</p>
                  </div>
                  <dl>
                    <div>
                      <dt>출발</dt>
                      <dd>{product.departure}</dd>
                    </div>
                    <div>
                      <dt>기간</dt>
                      <dd>{product.duration}</dd>
                    </div>
                    <div>
                      <dt>가격</dt>
                      <dd>{product.price}</dd>
                    </div>
                  </dl>
                  <a href="#kakao">
                    <CalendarDays size={17} aria-hidden="true" />
                    출발 가능 문의
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
