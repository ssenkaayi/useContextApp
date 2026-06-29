
import Home from './pages/Home'
import About from './pages/About'
import ThemContextProvider from './context/ThemContex'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
function App() {

  return (
  
    <ThemContextProvider>
      <BrowserRouter>
        <Routes>
         
          <Route path='/useContextApp/' index element={<Home />} />
          <Route path="/useContextApp/about" element={<About />} />
       
        </Routes>
      </BrowserRouter>
    </ThemContextProvider>

  )
}

export default App
