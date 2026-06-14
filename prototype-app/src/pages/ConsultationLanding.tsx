import { useState } from 'react'
import { CheckCircle2, MessageCircle, Phone, Send } from 'lucide-react'
import { PrototypeNav } from '../components/PrototypeNav'
import { agencyInfo, sampleProducts } from '../data/sampleProducts'

export function ConsultationLanding() {
  const [submittedName, setSubmittedName] = useState('')
  const [formState, setFormState] = useState({
    destination: '',
    month: '',
    group: '',
  })

  function submitMock() {
    setSubmittedName(formState.destination || '상담 요청')
  }

  return (
    <main className="concept-page consult-page">
      <PrototypeNav current="consultation" />
      <section className="consult-hero">
        <div className="consult-copy">
          <span className="eyebrow">D안 · 상담 전환형</span>
          <h1>상품을 고르기 전에, 여행 조건부터 맞춥니다</h1>
          <p>방문자가 고민을 입력하거나 바로 전화하게 만드는 랜딩페이지형 구조입니다.</p>
          <div className="consult-big-actions">
            <a href={`tel:${agencyInfo.phone}`}>
              <Phone size={22} aria-hidden="true" />
              {agencyInfo.phone}
            </a>
            <a href="#kakao">
              <MessageCircle size={22} aria-hidden="true" />
              카카오톡 빠른 상담
            </a>
          </div>
        </div>

        <form className="consult-form" aria-label="상담 문의 예시 폼">
          <h2>30초 상담 요청</h2>
          <label>
            가고 싶은 지역
            <input
              placeholder="예: 인도, 중앙아시아, 산티아고"
              value={formState.destination}
              onChange={(event) => setFormState({ ...formState, destination: event.target.value })}
            />
          </label>
          <label>
            희망 출발 시기
            <input
              placeholder="예: 10월 중순, 내년 봄"
              value={formState.month}
              onChange={(event) => setFormState({ ...formState, month: event.target.value })}
            />
          </label>
          <label>
            인원과 연령대
            <input
              placeholder="예: 부부 2명, 60대"
              value={formState.group}
              onChange={(event) => setFormState({ ...formState, group: event.target.value })}
            />
          </label>
          <button type="button" onClick={submitMock}>
            <Send size={18} aria-hidden="true" />
            상담 요청 예시
          </button>
          {submittedName && (
            <p className="consult-submit-message">
              {submittedName} 문의가 접수된 것처럼 표시됩니다. 실제 개발에서는 관리자 문의함으로 연결됩니다.
            </p>
          )}
        </form>
      </section>

      <section className="consult-proof">
        {['전화 상담 우선', '결제는 MVP 제외', '출발일 확인', '난이도 상담'].map((item) => (
          <span key={item}>
            <CheckCircle2 size={18} aria-hidden="true" />
            {item}
          </span>
        ))}
      </section>

      <section className="consult-recommend">
        <div>
          <h2>상담으로 자주 연결되는 상품</h2>
          <p>선택지는 적게 보여주고, 문의 버튼을 반복 배치합니다.</p>
        </div>
        <div className="consult-product-stack">
          {sampleProducts.map((product) => (
            <article key={product.id}>
              <span>{product.status}</span>
              <strong>{product.title}</strong>
              <small>
                {product.departure} · {product.duration} · {product.price}
              </small>
              <a href="#kakao">이 상품 상담</a>
            </article>
          ))}
        </div>
      </section>

      <section className="consult-admin-flow">
        <h2>관리자 문의함 틀</h2>
        <div>
          <span>신규</span>
          <strong>{formState.destination || '희망 지역 미입력'}</strong>
          <small>
            {formState.month || '출발 시기 미입력'} · {formState.group || '인원 미입력'}
          </small>
          <button type="button">상담 완료 처리</button>
        </div>
      </section>
    </main>
  )
}
