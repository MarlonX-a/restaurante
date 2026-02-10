import { Navbar } from './components/navbar'
import { Routes, Route } from 'react-router-dom';
import { Perfil } from './components/perfil';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  )
}

export default App
