import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Layout/Home'
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import cartLoader from './components/Loader/CartLoader'
import Checkout from './components/Checkout/Checkout'
import Signup from './components/Signup/Signup'
import AuthProvider from './providers/AuthProvider'
import PrivateRoute from './routes/PrivateRoute'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Home></Home>,
    children : [
      {
        path : '/',
        element : <Shop/>
      },
      {
        path : '/orders',
        element : <Orders></Orders>,
        loader : cartLoader,
      },
      {
        path : '/inventory',
        element : <Inventory></Inventory>
      },
      {
        path : '/checkout',
        element : <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Signup></Signup>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router = {router} />
    </AuthProvider>
  </React.StrictMode>,
)
