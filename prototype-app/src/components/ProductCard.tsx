import { CalendarDays, MapPin, WalletCards } from 'lucide-react'
import type { TravelProduct } from '../data/sampleProducts'

type ProductCardProps = {
  product: TravelProduct
  compact?: boolean
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <article className={`product-card ${compact ? 'compact' : ''}`}>
      <img src={product.image} alt={`${product.title} 대표 이미지`} />
      <div className="product-card-body">
        <div className="card-topline">
          <span className={`status ${product.status}`}>{product.status}</span>
          <span>{product.duration}</span>
        </div>
        <h3>{product.title}</h3>
        <p>{product.summary}</p>
        <dl className="product-facts">
          <div>
            <MapPin size={16} aria-hidden="true" />
            <dt>지역</dt>
            <dd>{product.region}</dd>
          </div>
          <div>
            <CalendarDays size={16} aria-hidden="true" />
            <dt>출발</dt>
            <dd>{product.departure}</dd>
          </div>
          <div>
            <WalletCards size={16} aria-hidden="true" />
            <dt>가격</dt>
            <dd>{product.price}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
