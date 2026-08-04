import { Routes, Route } from 'react-router'
import RootLayout from './RootLayout'
import Banner from './Components/Banner'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Banner />} />
        <Route path="*" element={<Banner />} />
      </Route>
    </Routes>
  )
}

export default App
