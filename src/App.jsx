import React from "react";
import Login from "./pages/Login";
import Registration from "./pages/registration";
import Events from "./pages/events/usersEvents";
import CreateEvent from "./pages/events/CreateEvent";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/createEvent",
      element: <CreateEvent/>
    }
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}