import { CheckCircle2, CircleAlert, Clock, Plane } from 'lucide-react'
import type { TravelProduct } from '../data/sampleProducts'
import { ConsultationCTA } from './ConsultationCTA'

type ProductDetailPreviewProps = {
  product: TravelProduct
  heading?: string
}

export function ProductDetailPreview({ product, heading = '상품 상세 핵심 영역' }: ProductDetailPreviewProps) {
  return (
    <section className="detail-preview">
      <div className="section-heading">
        <span>{heading}</span>
        <h2>{product.title}</h2>
        <p>{product.summary}</p>
      </div>
      <div className="detail-grid">
        <div className="detail-media">
          <img src={product.image} alt={`${product.title} 상세 이미지`} />
          <div className="detail-badges">
            <span>{product.status}</span>
            <span>{product.intensity}</span>
            <span>{product.duration}</span>
          </div>
        </div>
        <div className="detail-panel">
          <dl className="detail-stats">
            <div>
              <Clock size={18} aria-hidden="true" />
              <dt>출발일</dt>
              <dd>{product.departure}</dd>
            </div>
            <div>
              <Plane size={18} aria-hidden="true" />
              <dt>지역</dt>
              <dd>{product.region}</dd>
            </div>
            <div>
              <CheckCircle2 size={18} aria-hidden="true" />
              <dt>상품가</dt>
              <dd>{product.price}</dd>
            </div>
          </dl>
          <div className="detail-columns">
            <div>
              <h3>일정 요약</h3>
              <ol>
                {product.itinerary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3>포함/불포함</h3>
              <ul>
                {product.included.slice(0, 3).map((item) => (
                  <li key={item}>포함: {item}</li>
                ))}
                {product.excluded.slice(0, 2).map((item) => (
                  <li key={item}>불포함: {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="note-box">
            <CircleAlert size={18} aria-hidden="true" />
            <p>{product.notes[0]}</p>
          </div>
          <ConsultationCTA tone="compact" />
        </div>
      </div>
    </section>
  )
}
