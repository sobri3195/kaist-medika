import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/katalog', 'Katalog'],
  ['/kategori', 'Kategori'],
  ['/blog', 'Edukasi'],
  ['/tentang', 'Tentang'],
  ['/kontak', 'Kontak'],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <img src="/logo-kaist-medika.svg" alt="Kai'st Medika" className="brand-logo" />
        </NavLink>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className="nav-link">
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <NavLink to="/wishlist" className="nav-icon" aria-label="Wishlist">♡</NavLink>
          <NavLink to="/cart" className="nav-icon" aria-label="Keranjang belanja">🛒</NavLink>
          <NavLink to="/auth" className="btn btn-primary">Masuk</NavLink>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-label="Buka menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav container">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className="nav-link" onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
          <NavLink to="/tracking" className="nav-link" onClick={closeMenu}>Tracking</NavLink>
          <NavLink to="/akun" className="nav-link" onClick={closeMenu}>Akun Saya</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
