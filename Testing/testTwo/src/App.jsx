import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/model/Home'
import UseState from './components/model/UseState'
import Navigation from './components/module/Navigation'
import UseEffect from './components/model/UseEffect'
import UseRef from './components/model/UseRef'

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='UseState' element={<UseState />} />
        <Route path='UseEffect' element={<UseEffect />} />
        <Route path='UseRef' element={<UseRef />} />
      </Routes>
    </Router>
  )
}
