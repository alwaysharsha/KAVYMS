import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import History from './pages/History'
import Team from './pages/Team'
import TempleList from './pages/TempleList'

function App() {
  return (
    <Router basename="/KAVYMS">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Team />} />
          <Route path="/temples" element={<TempleList />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
