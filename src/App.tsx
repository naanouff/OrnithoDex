import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { BottomNav } from './components/BottomNav'
import { BirdSheetPage } from './pages/BirdSheetPage'
import { CollectionPage } from './pages/CollectionPage'
import { HomePage } from './pages/HomePage'
import { QuizPage } from './pages/QuizPage'
import { TrainingPage } from './pages/TrainingPage'

function Shell() {
  const { pathname } = useLocation()
  const hideNav = pathname.startsWith('/espece/')

  return (
    <div className="app">
      <div className="screens">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/espece/:slug" element={<BirdSheetPage />} />
          <Route path="/entrainement" element={<TrainingPage />} />
          <Route path="/entrainement/:mode" element={<QuizPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {hideNav ? null : <BottomNav />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
