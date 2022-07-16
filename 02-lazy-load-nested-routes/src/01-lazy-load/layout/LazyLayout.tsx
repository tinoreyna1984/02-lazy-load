import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import LazyPage01 from '../pages/LazyPage01';
import LazyPage02 from '../pages/LazyPage02';
import LazyPage03 from '../pages/LazyPage03';

const LazyLayout = () => {
  return (
    <div>
        <h1>Lazy Layout</h1>
        {/* Diseño de las páginas con lazy load */}
        <ul>
            <li><NavLink to="lazy1">Lazy 01</NavLink></li>
            <li><NavLink to="lazy2">Lazy 02</NavLink></li>
            <li><NavLink to="lazy3">Lazy 03</NavLink></li>
        </ul>
        {/* Rutas de las páginas con lazy load */}
        <Routes>
          <Route path="lazy1" element={<LazyPage01 />} />
          <Route path="lazy2" element={<LazyPage02 />} />
          <Route path="lazy3" element={<LazyPage03 />} />

          <Route path="*" element={<Navigate replace to='lazy1' />} />
        </Routes>
    </div>
  )
}

export default LazyLayout;
