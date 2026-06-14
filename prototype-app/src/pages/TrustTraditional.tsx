import { useMemo, useState } from 'react'
import { Bell, Building2, Eye, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { PrototypeNav } from '../components/PrototypeNav'
import { agencyInfo, sampleProducts } from '../data/sampleProducts'

export function TrustTraditional() {
  const [selectedId, setSelectedId] = useState(sampleProducts[0].id)
  const [statusOverride, setStatusOverride] = useState('출발확정')
  const selectedProduct = useMemo(
    () => sampleProducts.find((product) => product.id === selectedId) ?? sampleProducts[0],
    [selectedId],
  )

  return (
    <main className="concept-page trust-page">
      <PrototypeNav current="trust" />
      <section className="trust-contact-bar">
        <strong>{agencyInfo.name}</strong>
        <a href={`tel:${agencyInfo.phone}`}>
          <Phone size={18} aria-hidden="true" />
          {agencyInfo.phone}
        </a>
        <a href="#kakao">
          <MessageCircle size={18} aria-hidden="true" />
          카카오톡 상담
        </a>
        <span>{agencyInfo.hours}</span>
      </section>

      <section className="trust-layout">
        <aside className="trust-sidebar">
          <h2>여행상품</h2>
          <nav aria-label="상품 카테고리">
            <a href="#products">전체 상품</a>
            <a href="#products">출발확정</a>
            <a href="#products">문화탐방</a>
            <a href="#products">성지순례</a>
            <a href="#products">맞춤상담</a>
          </nav>
          <div className="trust-box">
            <Bell size={22} aria-hidden="true" />
            <strong>공지</strong>
            <p>여권 유효기간과 보험 안내를 상담 전에 확인합니다.</p>
          </div>
        </aside>

        <div className="trust-main">
          <section className="trust-hero">
            <div>
              <span className="eyebrow">A안 · 전통 신뢰형</span>
              <h1>전화로 바로 확인하는 익숙한 여행사 화면</h1>
              <p>큰 연락처, 좌측 카테고리, 게시판형 상품표를 앞세워 중장년 고객에게 익숙한 구조입니다.</p>
            </div>
            <div className="trust-stamps">
              <span>
                <ShieldCheck size={18} aria-hidden="true" />
                여행자 보험 안내
              </span>
              <span>
                <Building2 size={18} aria-hidden="true" />
                사업자정보 고지
              </span>
            </div>
          </section>

          <section id="products" className="trust-table-section">
            <div className="section-title-row">
              <h2>출발 가능 상품</h2>
              <a href="#kakao">상품별 상담하기</a>
            </div>
            <div className="trust-table" role="table" aria-label="여행상품 표">
              <div className="trust-table-head" role="row">
                <span>상태</span>
                <span>상품명</span>
                <span>출발일</span>
                <span>기간</span>
                <span>가격</span>
              </div>
              {sampleProducts.map((product) => (
                <button
                  key={product.id}
                  className={`trust-table-row ${product.id === selectedId ? 'selected' : ''}`}
                  role="row"
                  type="button"
                  onClick={() => setSelectedId(product.id)}
                >
                  <span className={`status-badge ${product.id === selectedId ? statusOverride : product.status}`}>
                    {product.id === selectedId ? statusOverride : product.status}
                  </span>
                  <div>
                    <strong>{product.title}</strong>
                    <small>{product.region}</small>
                  </div>
                  <span>{product.departure}</span>
                  <span>{product.duration}</span>
                  <strong>{product.price}</strong>
                </button>
              ))}
            </div>
          </section>

          <section className="trust-ops">
            <div className="trust-admin-panel">
              <h2>운영자 빠른 수정 mock</h2>
              <label>
                선택 상품
                <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
                  {sampleProducts.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                출발 상태
                <select value={statusOverride} onChange={(event) => setStatusOverride(event.target.value)}>
                  <option>모집중</option>
                  <option>출발확정</option>
                  <option>마감임박</option>
                  <option>숨김</option>
                </select>
              </label>
              <p>실제 개발에서는 이 영역이 관리자 상품 수정 화면으로 확장됩니다.</p>
            </div>
            <div className="trust-preview-panel">
              <h2>
                <Eye size={20} aria-hidden="true" />
                고객 화면 미리보기
              </h2>
              <strong>{selectedProduct.title}</strong>
              <span className={`status-badge ${statusOverride}`}>{statusOverride}</span>
              <p>
                {selectedProduct.departure} · {selectedProduct.duration} · {selectedProduct.price}
              </p>
              <a href="#kakao">이 상태로 상담 버튼 노출</a>
            </div>
          </section>

          <section className="trust-detail">
            <h2>상품 상세는 일정표처럼 읽히게</h2>
            <div className="trust-detail-grid">
              {selectedProduct.itinerary.map((item, index) => (
                <article key={item}>
                  <span>{index + 1}일차</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <footer className="trust-footer-plain">
        <strong>{agencyInfo.name}</strong>
        <span>{agencyInfo.business}</span>
        <span>{agencyInfo.address}</span>
        <span>이용약관 · 개인정보처리방침 · 여행약관</span>
      </footer>
    </main>
  )
}
