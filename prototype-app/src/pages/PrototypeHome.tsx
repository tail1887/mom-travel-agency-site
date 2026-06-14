import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { prototypeMeta } from '../data/prototypeMeta'

const reviewQuestions = [
  '첫 화면에서 어떤 여행사인지 바로 이해되는가?',
  '5개 안이 서로 다른 선택지처럼 느껴지는가?',
  '전화나 카카오톡 문의 버튼을 찾기 쉬운가?',
  '상품 정보와 운영자가 수정할 영역이 분명한가?',
]

export function PrototypeHome() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div>
          <span className="eyebrow">Prototype direction board</span>
          <h1>어머니 여행사 사이트 5가지 방향</h1>
          <p>
            이번 버전은 단순 색상 차이가 아니라 정보 구조 자체가 다른 5개 초안입니다. 마음에 드는
            분위기보다 “실제로 손님이 문의할 것 같은가”를 기준으로 봐주세요.
          </p>
        </div>
        <aside className="home-checklist">
          <h2>비교 기준</h2>
          <ul>
            {reviewQuestions.map((question) => (
              <li key={question}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {question}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="prototype-grid" aria-label="프로토타입 선택">
        {prototypeMeta.map((item) => (
          <article key={item.slug} className={`prototype-card ${item.slug}`}>
            <div className="prototype-preview" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="prototype-label">{item.label}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <dl>
              <div>
                <dt>화면 성격</dt>
                <dd>{item.fit}</dd>
              </div>
              <div>
                <dt>벤치마킹 패턴</dt>
                <dd>{item.references}</dd>
              </div>
            </dl>
            <Link to={item.route} className="view-link">
              시안 보기
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
