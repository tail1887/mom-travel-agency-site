import { MessageCircle, Phone } from 'lucide-react'
import { agencyInfo } from '../data/sampleProducts'

type ConsultationCTAProps = {
  tone?: 'light' | 'dark' | 'compact'
  title?: string
}

export function ConsultationCTA({ tone = 'light', title = '상담으로 일정 확인하기' }: ConsultationCTAProps) {
  return (
    <div className={`consultation-cta ${tone}`}>
      <div>
        <strong>{title}</strong>
        <span>{agencyInfo.hours}</span>
      </div>
      <div className="cta-actions">
        <a href={`tel:${agencyInfo.phone}`} className="icon-button phone">
          <Phone size={18} aria-hidden="true" />
          <span>{agencyInfo.phone}</span>
        </a>
        <a href="#kakao" className="icon-button kakao">
          <MessageCircle size={18} aria-hidden="true" />
          <span>{agencyInfo.kakao}</span>
        </a>
      </div>
    </div>
  )
}
