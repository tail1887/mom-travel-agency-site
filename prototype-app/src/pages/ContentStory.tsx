import { BookOpenText, Quote, UserRoundCheck } from 'lucide-react'
import { ConsultationCTA } from '../components/ConsultationCTA'
import { ProductCard } from '../components/ProductCard'
import { ProductDetailPreview } from '../components/ProductDetailPreview'
import { PrototypeNav } from '../components/PrototypeNav'
import { TrustFooter } from '../components/TrustFooter'
import { sampleProducts } from '../data/sampleProducts'

export function ContentStory() {
  return (
    <main className="concept-page story-theme">
      <PrototypeNav current="story" />
      <section className="story-hero">
        <div className="story-image">
          <img src={sampleProducts[2].image} alt="여행 이야기 대표 이미지" />
        </div>
        <div className="story-copy">
          <span className="eyebrow">E안 · 콘텐츠/스토리형</span>
          <h1>여행을 다녀온 사람의 이야기로 신뢰를 쌓습니다</h1>
          <p>후기, 여행지 소개, 인솔자 설명을 통해 상품 문의로 자연스럽게 이어지는 방향입니다.</p>
          <ConsultationCTA title="이야기를 읽고 상담하기" />
        </div>
      </section>
      <section className="story-panels">
        <article>
          <BookOpenText size={24} aria-hidden="true" />
          <h2>여행지 이야기</h2>
          <p>처음 가는 지역의 분위기, 이동 거리, 준비물을 쉽게 설명합니다.</p>
        </article>
        <article>
          <Quote size={24} aria-hidden="true" />
          <h2>고객 후기</h2>
          <p>다녀온 고객의 말로 일정의 장점과 불안 해소 포인트를 보여줍니다.</p>
        </article>
        <article>
          <UserRoundCheck size={24} aria-hidden="true" />
          <h2>인솔자 노트</h2>
          <p>전문가의 시선으로 난이도, 계절, 현지 상황을 안내합니다.</p>
        </article>
      </section>
      <section className="editorial-section">
        <div>
          <span className="eyebrow">이번 달 이야기</span>
          <h2>인도 여행 전, 긴 이동일을 편하게 보내는 법</h2>
          <p>
            장거리 이동이 많은 여행은 일정표보다 리듬이 중요합니다. 이동 다음 날은 핵심 관광과 휴식
            시간을 함께 배치해야 만족도가 높습니다.
          </p>
        </div>
        <ProductCard product={sampleProducts[1]} compact />
      </section>
      <ProductDetailPreview product={sampleProducts[1]} heading="콘텐츠에서 연결되는 상품 상세" />
      <TrustFooter />
    </main>
  )
}
