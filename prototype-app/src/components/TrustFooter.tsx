import { Building2, Clock, FileText, MapPin, Phone } from 'lucide-react'
import { agencyInfo } from '../data/sampleProducts'

export function TrustFooter() {
  return (
    <footer className="trust-footer">
      <div>
        <h2>{agencyInfo.name}</h2>
        <p>상담 중심 여행 설계와 안전한 일정 운영을 위한 기본 신뢰 정보 영역입니다.</p>
      </div>
      <ul>
        <li>
          <Phone size={17} aria-hidden="true" />
          {agencyInfo.phone}
        </li>
        <li>
          <Clock size={17} aria-hidden="true" />
          {agencyInfo.hours}
        </li>
        <li>
          <MapPin size={17} aria-hidden="true" />
          {agencyInfo.address}
        </li>
        <li>
          <Building2 size={17} aria-hidden="true" />
          {agencyInfo.business}
        </li>
        <li>
          <FileText size={17} aria-hidden="true" />
          이용약관 · 개인정보처리방침 · 여행약관
        </li>
      </ul>
    </footer>
  )
}
