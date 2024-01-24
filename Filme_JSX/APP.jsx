import React from 'react'
import Header from './Header'
import Watchlist from './Watchlist'
import Watched from './Watched'
import Add from './Add'

import { BrowserRouter, Routes , Route } from 'react-router-dom'
import ContextProvider from '../Film_context/GlobalContext'

export default function APP() {
  return (
    <div>
        <BrowserRouter>
        <ContextProvider>
        <Header />
        <Routes>
            <Route path='/'        element={<Watchlist />} />
            <Route path='/watched'  element={<Watched />} />
            <Route path='/add'      element={<Add />} />
        </Routes>
        </ContextProvider>
    </BrowserRouter>
    </div>
  )
}
