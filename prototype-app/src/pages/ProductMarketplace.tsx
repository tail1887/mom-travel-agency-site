import { useMemo, useState } from 'react'
import { CalendarDays, Filter, Search, SlidersHorizontal } from 'lucide-react'
import { PrototypeNav } from '../components/PrototypeNav'
import { agencyInfo, sampleProducts } from '../data/sampleProducts'

const filters = ['출발확정', '상담가', '성지순례', '걷기 적음', '소규모']

export function ProductMarketplace() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('출발확정')
  const [compareIds, setCompareIds] = useState<string[]>([])
  const listedProducts = useMemo(() => sampleProducts.concat(sampleProducts), [])
  const filteredProducts = useMemo(() => {
    return listedProducts.filter((product) => {
      const matchesQuery = `${product.title} ${product.region} ${product.category}`
        .toLowerCase()
        .includes(query.toLowerCase())
      const matchesFilter =
        activeFilter === '출발확정'
          ? product.status === '출발확정'
          : activeFilter === '상담가'
            ? product.price.includes('상담')
            : activeFilter === '성지순례'
              ? product.category === '성지순례'
              : true
      return matchesQuery && matchesFilter
    })
  }, [activeFilter, listedProducts, query])
  const comparedProducts = sampleProducts.filter((product) => compareIds.includes(product.id))

  return (
    <main className="concept-page market-page">
      <PrototypeNav current="marketplace" />
      <section className="market-shell">
        <aside className="market-filter">
          <h1>여행상품 찾기</h1>
          <label>
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="지역, 상품명 검색"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div>
            <strong>조건 필터</strong>
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
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
              <p>{filteredProducts.length}개 상품이 현재 조건에 맞습니다.</p>
            </div>
            <button type="button">
              <SlidersHorizontal size={18} aria-hidden="true" />
              보기 설정
            </button>
          </div>

          <div className="market-comparison">
            {filteredProducts.map((product, index) => (
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
                  <button
                    type="button"
                    onClick={() =>
                      setCompareIds((current) =>
                        current.includes(product.id)
                          ? current.filter((id) => id !== product.id)
                          : current.length >= 2
                            ? [current[1], product.id]
                            : [...current, product.id],
                      )
                    }
                  >
                    {compareIds.includes(product.id) ? '비교 해제' : '비교 담기'}
                  </button>
                </div>
              </article>
            ))}
          </div>
          <section className="market-compare-dock">
            <strong>비교함</strong>
            {comparedProducts.length === 0 ? (
              <span>상품을 2개까지 담아 비교합니다.</span>
            ) : (
              comparedProducts.map((product) => (
                <span key={product.id}>
                  {product.title} · {product.price}
                </span>
              ))
            )}
          </section>
        </section>
      </section>
    </main>
  )
}
