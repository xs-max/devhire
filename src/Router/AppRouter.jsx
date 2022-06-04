import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../LayOut'
import Favorite from '../Pages/Favorites'
import Home from '../Pages/Home'


const AppRouter = () => {
  return (
    <div>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorite />} />
            </Routes>
        </Layout>
    </div>
  )
}

export default AppRouter