import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/upcoming-session",
    element: <Home />,
  },
  {
    path: "/sessions",
    element: <Home />,
  },
  {
    path: "/what-you-get",
    element: <Home />,
  },
  {
    path: "/benefits",
    element: <Home />,
  },
  {
    path: "/mentor",
    element: <Home />,
  },
  {
    path: "/host",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Home />,
  },
  {
    path: "/reviews",
    element: <Home />,
  },
  {
    path: "/testimonials",
    element: <Home />,
  },
  {
    path: "/pricing",
    element: <Home />,
  },
  {
    path: "/faq",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
