import "./NavbarToggle.css"

export default function NavbarToggle() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="LogoNav">
        <img src= "./src/assets/images/logo-skydown-blue.png" alt="logo"/>
    </div>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nos services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">nos services</a></li>
            <li><a className="dropdown-item" href="#">planete</a></li>
            <li><a className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">sous mer</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign up</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
