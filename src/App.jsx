import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Home from './pages/Home'
import ProductView from './pages/ProductView'
import ProductAdd from './pages/ProductAdd'
import UserProducts from './pages/UserProducts'
import LandingPage from './pages/LandingPage'


function App() {


  return (
    <>
    
      <Routes>
         <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/product-view/:id' element={<ProductView/>} />
        <Route path='/add-product' element={<ProductAdd/>} />
        <Route path='/user-product' element={<UserProducts/>} />
      </Routes>
    </>
  )
}

export default App
