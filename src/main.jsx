import ReactDOM from "react-dom";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import Home from "./component/Home";
import Cabane from "./component/Cabane";
import Hobbit from "./component/Hobbit";
import AboutUs from "./component/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Hobbit">Hobbit</Link>
          <Link to="/AboutUs">About Us</Link>
        </nav>
        <main>
          <Home />
        </main>
      </>
    ),
  },
  {
    path: "/Hobbit",
    element: (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Cabane">Cabane</Link>
          <Link to="/AboutUs">About Us</Link>
        </nav>
        <main>
          <Hobbit />
        </main>
      </>
    ),
  },
  {
    path: "/Cabane",
    element: (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Hobbit">Hobbit</Link>
          <Link to="/AboutUs">About Us</Link>
        </nav>
        <main>
          <Cabane />
        </main>
      </>
    ),
  },
{
  path:"/AboutUs",
  element:(
    <>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/Hobbit">Hobbit</Link>
    <Link to="/Cabane">Cabane</Link>
    </nav>
    <main>
      <AboutUs/>
    </main>
  
    
    </>
  )
}
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
