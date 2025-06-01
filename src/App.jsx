import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Barang from './component/Barang'
import AddBarang from './pages/AddBarang'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Barang/>} />
          <Route path='/addBarang' element={<AddBarang />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
