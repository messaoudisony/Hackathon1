import { Link } from "react-router-dom"
import "./NavbarToggle.css"

export default function NavbarToggle() {
  return (
    <nav className="navbar navbar-expand-lg bgNav">
       <div className="mx-5">
    </div>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <img src= "./src/assets/images/logo-skydown-blue.png" width="120" alt="logo"/>
      </ul>
      <div className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item" >
          <Link to="/" className="navLink active">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="dropdown-toggle navLink" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nos services
          </a>
          <ul className="dropdown-menu navDropdownMenu" aria-labelledby="navbarDropdown">
            <li><Link className="navDropdown" to="/hobbit">Logements spaciaux</Link></li>
            <li><Link className="navDropdown" to="/cabane">Logements sous-marin</Link></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <Link className="navLink" to="/about">A propos</Link>
        </li>
        <li className="nav-item">
          <Link className="navLink" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="navLink" to="/signup">Se connecter</Link>
        </li>
       
      </ul>
      </div>
    </div>
  </div>
</nav>
  )
}
