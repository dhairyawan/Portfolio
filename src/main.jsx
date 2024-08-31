import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Techstacks from './components/Techstacks/Techstacks'
import Resume from './components/Resume/Resume'
import Error from './components/Error/Error'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<About />} />
    <Route path='projects' element={<Projects />} />
    {/* <Route path='techstacks' element={<Techstacks />} /> */}
    {/* <Route path='resume' element={<Resume />} /> */}
    {/* <Route path='*' element={""} /> */}
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
