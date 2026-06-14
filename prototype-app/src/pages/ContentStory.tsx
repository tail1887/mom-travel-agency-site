import { useState } from 'react'
import { BookOpenText, MessageCircle, Quote, UserRoundCheck } from 'lucide-react'
import { PrototypeNav } from '../components/PrototypeNav'
import { agencyInfo, sampleProducts } from '../data/sampleProducts'

const stories = [
  {
    title: '긴 이동일을 편하게 보내는 일정 배치',
    text: '장거리 여행은 볼거리보다 리듬이 먼저입니다. 이동 다음 날은 핵심 일정과 휴식 시간을 함께 배치합니다.',
  },
  {
    title: '처음 가는 인도에서 가장 많이 묻는 것',
    text: '식사, 화장실, 이동 거리, 비자 준비처럼 고객이 실제로 걱정하는 항목을 먼저 설명합니다.',
  },
  {
    title: '순례길은 거리보다 페이스가 중요합니다',
    text: '하루 걷는 시간, 쉬는 지점, 짐 운반 여부가 만족도를 크게 바꿉니다.',
  },
]

export function ContentStory() {
  const [selectedStory, setSelectedStory] = useState(stories[0])
  const [featuredProductId, setFeaturedProductId] = useState(sampleProducts[1].id)
  const featuredProduct = sampleProducts.find((product) => product.id === featuredProductId) ?? sampleProducts[1]

  return (
    <main className="concept-page story-page">
      <PrototypeNav current="story" />
      <section className="story-cover">
        <div>
          <span className="eyebrow">E안 · 콘텐츠/스토리형</span>
          <h1>상품보다 먼저, 여행을 이해하게 만듭니다</h1>
          <p>후기, 인솔자 노트, 여행지 설명을 먼저 읽고 자연스럽게 상품 상담으로 이어지는 매거진형 구조입니다.</p>
          <a href="#kakao">
            <MessageCircle size={18} aria-hidden="true" />
            이야기 읽고 상담하기
          </a>
        </div>
        <img src={sampleProducts[2].image} alt="스토리형 여행 이미지" />
      </section>

      <section className="story-grid">
        <article className="story-lead">
          <Quote size={34} aria-hidden="true" />
          <h2>“어디를 가느냐보다 누구와 어떻게 가느냐가 더 중요했습니다.”</h2>
          <p>고객 후기와 인솔자 설명을 전면에 두어 신뢰를 먼저 쌓습니다.</p>
        </article>
        {stories.map((story) => (
          <button
            key={story.title}
            className={selectedStory.title === story.title ? 'active' : ''}
            type="button"
            onClick={() => setSelectedStory(story)}
          >
            <BookOpenText size={24} aria-hidden="true" />
            <h2>{story.title}</h2>
            <p>{story.text}</p>
          </button>
        ))}
      </section>

      <section className="guide-note">
        <div>
          <UserRoundCheck size={28} aria-hidden="true" />
          <h2>콘텐츠 운영 mock</h2>
          <p>{selectedStory.text}</p>
          <label>
            연결 상품
            <select value={featuredProductId} onChange={(event) => setFeaturedProductId(event.target.value)}>
              {sampleProducts.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.title}
                </option>
              ))}
            </select>
          </label>
          <strong>현재 연결: {featuredProduct.title}</strong>
        </div>
        <div className="related-products">
          <a href="#kakao">
            <img src={featuredProduct.image} alt={`${featuredProduct.title} 이미지`} />
            <span>{featuredProduct.category}</span>
            <strong>{featuredProduct.title}</strong>
          </a>
          <article>
            <span>고객 화면 미리보기</span>
            <h3>{selectedStory.title}</h3>
            <p>이 글 하단에 {featuredProduct.title} 상담 버튼이 붙습니다.</p>
          </article>
        </div>
      </section>

      <footer className="story-footer">
        <strong>{agencyInfo.name}</strong>
        <span>{agencyInfo.phone}</span>
        <span>{agencyInfo.hours}</span>
      </footer>
    </main>
  )
}
