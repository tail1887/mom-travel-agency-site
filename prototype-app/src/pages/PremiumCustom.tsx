import { useMemo, useState } from 'react'
import { CalendarCheck, Gem, MessageCircle, Phone, Route } from 'lucide-react'
import { PrototypeNav } from '../components/PrototypeNav'
import { agencyInfo, sampleProducts } from '../data/sampleProducts'

const paceOptions = ['여유', '균형', '알찬 일정']
const themeOptions = ['문화유산', '미식', '성지순례', '자연']

export function PremiumCustom() {
  const featured = sampleProducts[1]
  const [pace, setPace] = useState(paceOptions[0])
  const [theme, setTheme] = useState(themeOptions[0])
  const customCopy = useMemo(() => {
    return `${theme} 중심으로 ${pace} 페이스에 맞춰 이동일과 휴식일을 다시 배치합니다.`
  }, [pace, theme])

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

      <section className="premium-builder">
        <div>
          <span className="eyebrow">Functional mock</span>
          <h2>맞춤 일정 구성 틀</h2>
          <p>고객 상담 전에 여행 페이스와 관심 테마를 선택해 추천 문구가 바뀌는 흐름입니다.</p>
        </div>
        <div className="premium-controls">
          <fieldset>
            <legend>여행 페이스</legend>
            {paceOptions.map((option) => (
              <button
                key={option}
                className={pace === option ? 'active' : ''}
                type="button"
                onClick={() => setPace(option)}
              >
                {option}
              </button>
            ))}
          </fieldset>
          <fieldset>
            <legend>관심 테마</legend>
            {themeOptions.map((option) => (
              <button
                key={option}
                className={theme === option ? 'active' : ''}
                type="button"
                onClick={() => setTheme(option)}
              >
                {option}
              </button>
            ))}
          </fieldset>
        </div>
        <aside className="premium-itinerary-preview">
          <strong>상담 제안 미리보기</strong>
          <p>{customCopy}</p>
          <a href="#kakao">이 조건으로 상담 요청</a>
        </aside>
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
