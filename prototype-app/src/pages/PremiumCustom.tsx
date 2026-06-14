import { CalendarCheck, Gem, MessageCircle, Phone, Route } from 'lucide-react'
import { PrototypeNav } from '../components/PrototypeNav'
import { agencyInfo, sampleProducts } from '../data/sampleProducts'

export function PremiumCustom() {
  const featured = sampleProducts[1]

  return (
    <main className="concept-page premium-page">
      <PrototypeNav current="premium" />
      <section className="premium-hero">
        <img src={featured.image} alt="프리미엄 맞춤여행 대표 이미지" />
        <div className="premium-hero-copy">
          <span className="eyebrow">B안 · 프리미엄 맞춤여행형</span>
          <h1>낯선 길을 조용하고 세심하게 설계합니다</h1>
          <p>상품을 많이 보여주기보다, 고객의 페이스와 목적에 맞춘 큐레이션 경험을 먼저 전달합니다.</p>
          <div className="premium-actions">
            <a href={`tel:${agencyInfo.phone}`}>
              <Phone size={18} aria-hidden="true" />
              전문 상담 전화
            </a>
            <a href="#kakao">
              <MessageCircle size={18} aria-hidden="true" />
              맞춤 일정 문의
            </a>
          </div>
        </div>
      </section>

      <section className="premium-manifesto">
        <article>
          <Gem size={26} aria-hidden="true" />
          <h2>적은 상품, 깊은 설명</h2>
          <p>고급스러움은 장식보다 고객의 불안을 줄이는 정보 설계에서 나옵니다.</p>
        </article>
        <article>
          <Route size={26} aria-hidden="true" />
          <h2>동선과 휴식의 균형</h2>
          <p>장거리 여행의 만족도는 이동 다음 날의 여유에서 갈립니다.</p>
        </article>
        <article>
          <CalendarCheck size={26} aria-hidden="true" />
          <h2>상담 후 확정</h2>
          <p>가격보다 먼저 출발 가능성, 난이도, 여행 목적을 확인합니다.</p>
        </article>
      </section>

      <section className="premium-feature">
        <div>
          <span className="eyebrow">Curated journey</span>
          <h2>{featured.title}</h2>
          <p>{featured.summary}</p>
          <dl>
            <div>
              <dt>출발</dt>
              <dd>{featured.departure}</dd>
            </div>
            <div>
              <dt>기간</dt>
              <dd>{featured.duration}</dd>
            </div>
            <div>
              <dt>상담 기준가</dt>
              <dd>{featured.price}</dd>
            </div>
          </dl>
        </div>
        <ol>
          {featured.itinerary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="premium-gallery" aria-label="추천 큐레이션 상품">
        {sampleProducts.map((product) => (
          <article key={product.id}>
            <img src={product.image} alt={`${product.title} 이미지`} />
            <div>
              <span>{product.category}</span>
              <h3>{product.title}</h3>
              <p>{product.region}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
