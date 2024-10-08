import React from 'react'
import Login from "./pages/Login"
import Registration from './pages/registration'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration/>
    },
    {
      path:"/login",
      element: <Login/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
