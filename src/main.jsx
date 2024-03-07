import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Gallery from './Pages/Gallery/Gallery.jsx'
import VideoFootage from './Pages/Videos/VideoFootage.jsx'
import Layout from './Layout.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' 
    element={<Layout/>}
    errorElement = {<ErrorPage/>}>
      <Route path='/' element={<App/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/videofootage' element={<VideoFootage />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     </Route>
  ))
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
