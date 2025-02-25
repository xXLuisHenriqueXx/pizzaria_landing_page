import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./screens/Home";
import Menu from "./screens/Menu";

export default function AppRouter() {
  const router = createBrowserRouter(
    [
      {
        path: "/pizzaria_landing_page/",
        element: <Home />,
      },
      {
        path: "/pizzaria_landing_page/menu",
        element: <Menu />,
      },
      // {
      //     path: "*",
      //     element: <NotFound />
      // }
    ],
    { basename: "/" }
  );

  return <RouterProvider router={router} />;
}
