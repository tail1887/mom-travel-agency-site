import { Bell, Building2, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { PrototypeNav } from '../components/PrototypeNav'
import { agencyInfo, sampleProducts } from '../data/sampleProducts'

export function TrustTraditional() {
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
                <article key={product.id} className="trust-table-row" role="row">
                  <span className={`status-badge ${product.status}`}>{product.status}</span>
                  <div>
                    <strong>{product.title}</strong>
                    <small>{product.region}</small>
                  </div>
                  <span>{product.departure}</span>
                  <span>{product.duration}</span>
                  <strong>{product.price}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="trust-detail">
            <h2>상품 상세는 일정표처럼 읽히게</h2>
            <div className="trust-detail-grid">
              {sampleProducts[0].itinerary.map((item, index) => (
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
