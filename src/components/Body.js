import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Browse from "./Browse";

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },

    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);

const Body = () => {
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
