import { ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { prototypeMeta, type PrototypeSlug } from '../data/prototypeMeta'

type PrototypeNavProps = {
  current: PrototypeSlug
}

export function PrototypeNav({ current }: PrototypeNavProps) {
  return (
    <nav className="prototype-nav" aria-label="프로토타입 이동">
      <Link to="/" className="back-link">
        <ArrowLeft size={17} aria-hidden="true" />
        선택 화면
      </Link>
      <div className="nav-pills">
        {prototypeMeta.map((item) => (
          <Link
            key={item.slug}
            to={item.route}
            className={item.slug === current ? 'active' : ''}
            aria-current={item.slug === current ? 'page' : undefined}
          >
            <Home size={15} aria-hidden="true" />
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
