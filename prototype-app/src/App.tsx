import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { ConsultationLanding } from './pages/ConsultationLanding'
import { ContentStory } from './pages/ContentStory'
import { PremiumCustom } from './pages/PremiumCustom'
import { ProductMarketplace } from './pages/ProductMarketplace'
import { PrototypeHome } from './pages/PrototypeHome'
import { TrustTraditional } from './pages/TrustTraditional'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PrototypeHome />} />
        <Route path="/prototypes/trust" element={<TrustTraditional />} />
        <Route path="/prototypes/premium" element={<PremiumCustom />} />
        <Route path="/prototypes/marketplace" element={<ProductMarketplace />} />
        <Route path="/prototypes/consultation" element={<ConsultationLanding />} />
        <Route path="/prototypes/story" element={<ContentStory />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
