import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { prototypeMeta } from '../data/prototypeMeta'

const reviewQuestions = [
  '첫 화면에서 어떤 여행사인지 바로 이해되는가?',
  '전화나 카카오톡 문의 버튼을 찾기 쉬운가?',
  '상품 가격, 출발일, 기간이 읽기 쉬운가?',
  '어머니가 직접 운영할 수 있을 것 같은 구조인가?',
]

export function PrototypeHome() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div>
          <span className="eyebrow">Travel agency prototype board</span>
          <h1>어머니 여행사 사이트 방향 선택</h1>
          <p>
            아래 5개 시안은 최종 디자인이 아니라 방향 선택용 초안입니다. 마음에 드는 분위기,
            상품이 읽히는 방식, 문의 버튼 위치를 중심으로 비교해주세요.
          </p>
        </div>
        <div className="home-checklist">
          <h2>확인 기준</h2>
          <ul>
            {reviewQuestions.map((question) => (
              <li key={question}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {question}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="prototype-grid" aria-label="프로토타입 선택">
        {prototypeMeta.map((item) => (
          <article key={item.slug} className={`prototype-card ${item.slug}`}>
            <div className="prototype-label">{item.label}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <dl>
              <div>
                <dt>잘 맞는 경우</dt>
                <dd>{item.fit}</dd>
              </div>
              <div>
                <dt>참조 패턴</dt>
                <dd>{item.references}</dd>
              </div>
            </dl>
            <Link to={item.route} className="view-link">
              보기
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
