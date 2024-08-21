import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource-variable/inter';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/root'
import ProductPage from './routes/productPage'
import CartProduct from './routes/cartProduct'
import { ArticlesProvider } from './context/ArticlesContext'
import { CartProvider } from './context/CartContext';
import { QtyProvider } from './context/QtyContext';
import Profil from './routes/Profil';
import Settings from './routes/Settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path:"detail/:productId",
    element: <ProductPage/>,
  },
  {
    path:"cart",
    element: <CartProduct/>,
  },
  {
    path:"profil",
    element: <Profil/>
  },
  {
    path:"settings",
    element: <Settings/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArticlesProvider>
      <CartProvider>
        <QtyProvider>
          <RouterProvider router={router}/> 
        </QtyProvider>
      </CartProvider>
    </ArticlesProvider>
  </React.StrictMode>,
)
