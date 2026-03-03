import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.tsx";
import { HashRouter } from "react-router-dom";

/*import AboutUs from "./components/AboutUs";
import NotFoundPage from "./components/NotFoundPage.tsx";
import Services from "./components/Services.tsx";
import Blog from "./components/Blog.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/services", element: <Services /> },
  { path: "/blog", element: <Blog /> },
]); */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Header />
    </HashRouter>
  </StrictMode>,
);
