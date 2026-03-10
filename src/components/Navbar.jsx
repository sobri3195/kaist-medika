import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/katalog', 'Katalog'],
  ['/kategori', 'Kategori'],
  ['/blog', 'Edukasi'],
  ['/tentang', 'Tentang'],
  ['/kontak', 'Kontak'],
];

const Navbar = () => (
  <header className="navbar">
    <div className="container nav-wrap">
      <NavLink to="/" className="brand">
        Kai'st Medika
      </NavLink>
      <nav>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className="nav-link">
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="nav-actions">
        <NavLink to="/wishlist">Wishlist</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/auth" className="btn btn-primary">Masuk</NavLink>
      </div>
    </div>
  </header>
);

export default Navbar;
