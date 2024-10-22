import React from "react";
import Login from "./pages/Login";
import Registration from "./pages/registration";
import Events from "./pages/events/usersEvents";
import CreateEvent from "./pages/events/CreateEvent";
import UpdateEvent from "./pages/events/updateEvent";
import EventDetails from "./pages/events/EventDetails"; // Import EventDetails component

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import { QueryClientProvider } from 'react-query';
import Header from './components/Header'
// import Events from './pages/events/'
// import CreateEvent from './CreateEvent';
// import UpdateEvent from './UpdateEvent';
import Services from './components/Services';
import Home from './components/Home';
import Contact from './components/Contact';
// Layout component that includes the Header
function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* This will render the routed component below the Header */}
    </>
  );
}


export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,  // Layout wraps the routed components
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          path:'/',
          element:<Home/>
        },
        {
          path: '/registration',
          element: <Registration/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
        // {
        //   path: '/events',
        //   element: <Events />,
        // },
        // {
        //   path: '/createEvent',
        //   element: <CreateEvent />,
        // },
        // {
        //   path: '/updateEvent/:id',
        //   element: <UpdateEvent />,
        // },
      
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/createEvent",
      element: <CreateEvent />,
    },
    {
      path: "/updateEvent/:id",
      element: <UpdateEvent />,
    },
    {
      path: "/event/:id",
      element: <EventDetails />,
    },
  ]}
  ]);



  return (
   
      <RouterProvider router={router} />
    
  );
}