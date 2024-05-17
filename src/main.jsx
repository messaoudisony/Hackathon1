import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import Home from "./pages/Home";
import Cabane from "./pages/Cabane";
import Hobbit from "./pages/Hobbit";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import NavbarToggle from "./component/navbar/NavbarToggle";
import Footer from "./component/footer/Footer";
import Animation from "./component/animation/Animation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <main>
          <Animation />
          <NavbarToggle />
          <Home />
          <Footer />
        </main>
      </>
    ),
  },
  {
    path: "/sous-marin",
    element: (
      <>
        <main>
          <NavbarToggle />
          <Hobbit />
          <Footer />
        </main>
      </>
    ),
  },
  {
    path: "/spaciaux",
    element: (
      <>
        <main>
          <NavbarToggle />
          <Cabane />
          <Footer />
        </main>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <main>
          <NavbarToggle />
          <About />
          <Footer />
        </main>
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <main>
          <NavbarToggle />
          <SignUp />
          <Footer />
        </main>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <main>
          <NavbarToggle />
          <Contact />
          <Footer />
        </main>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <main>
          <NavbarToggle />
          <Contact />
          <Footer />
        </main>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <main>
          <NavbarToggle />
          <Contact />
          <Footer />
        </main>
      </>
    ),
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
