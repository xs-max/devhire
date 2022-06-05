import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../LayOut'
import Favorite from '../Pages/Favorites'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'


const AppRouter = () => {
  return (
    <div>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorite />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    </div>
  )
}

export default AppRouter