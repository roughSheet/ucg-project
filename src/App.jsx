import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import RecordRetrieval from './pages/RecordRetrieval'
import MedicalCoding from './pages/MedicalCoding'
import RevenueCycle from './pages/RevenueCycle'
import MedicalSummarization from './pages/MedicalSummarization'
import Blogs from './pages/Blogs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/record-retrieval-services" element={<RecordRetrieval />} />
        <Route path="/medical-billing-coding" element={<MedicalCoding />} />
        <Route path="/revenue-cycle-management" element={<RevenueCycle />} />
        <Route path="/medical-records-summarization" element={<MedicalSummarization />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App