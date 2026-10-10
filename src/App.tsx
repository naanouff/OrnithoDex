import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { BottomNav } from './components/BottomNav'
import { BirdSheetPage } from './pages/BirdSheetPage'
import { CollectionPage } from './pages/CollectionPage'
import { HomePage } from './pages/HomePage'
import { QuizPage } from './pages/QuizPage'
import { TrainingPage } from './pages/TrainingPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/espece/:slug" element={<BirdSheetPage />} />
          <Route path="/entrainement" element={<TrainingPage />} />
          <Route path="/entrainement/:mode" element={<QuizPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}
