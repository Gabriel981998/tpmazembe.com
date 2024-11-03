import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import Blogpost from './pages/Blogpost.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Matchs from './pages/Matchs.jsx'
import Equipe from './pages/Equipe.jsx'
import EquipePost from './pages/EquipePost.jsx'
import Hero2 from './pages/Hero2.jsx'
import Collection from './pages/Collection.jsx'
import Product from './pages/Product.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import Newest from './pages/Newest.jsx'
import Coach from './pages/Coach.jsx'
import CoachPost from './pages/CoachPost.jsx'

import PhasedeGroupesAller from './pages/PhasedeGroupesAller.jsx'
import Classement from './pages/Classement.jsx'





createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <ShopContextProvider>
  <Navbar/>
 
 <StrictMode>
   <Routes>
     <Route path='/' element={<App/>}></Route>
     <Route path='/blog' element={<Blog/>}></Route>
     <Route path='/equipe' element={<Equipe/>}></Route>
     <Route path='/equipe/:slug' element={<EquipePost/>}></Route>
     <Route path='/coach' element={<Coach/>}></Route>
     <Route path='/coach/:slug' element={<CoachPost/>}></Route>
     <Route path='/matchs' element={<Matchs/>}></Route>
     <Route path='/blog/:slug' element={<Blogpost/>}></Route>

     <Route path='/eshop' element={<Hero2/>}></Route>
     <Route path='/collection' element={<Collection/>}></Route>
     <Route path='/product/:productId' element={<Product/>}></Route>
     <Route path='/classement' element={<Classement/>}></Route>
     <Route path='/phasedegroupesaller' element={<PhasedeGroupesAller/>}></Route>
    
   </Routes>


</StrictMode>



<Footer/>
<Newest/>
  </ShopContextProvider>
     
 
</BrowserRouter>
)
