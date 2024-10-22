import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import { QueryClientProvider } from 'react-query';
import Header from './components/Header'
import Login from './pages/Login'
import Registration from './pages/Registration';
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
      ],
    },
  ]);

  return (
   
      <RouterProvider router={router} />
    
  );
}