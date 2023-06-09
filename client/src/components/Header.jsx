import Logo from "./assets/logo.png"

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={Logo} alt="Logo" className="mr-2" />
            <div className="pt-2">Project Management App</div>
          </div>
        </a>
      </div> 
    </nav>
  );
}
