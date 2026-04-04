import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// Pastikan path image sesuai dengan lokasi file logo Anda
import logoImg from '/assets/Logo-Mulyo-Abadi.png' 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav>
      <NavLink to="/" className="nav-logo" onClick={closeMenu}>
        <img 
          src={logoImg} 
          alt="Mulyo Abadi Logo" 
          className="nav-logo-img" 
          style={{ height: '40px', width: 'auto' }} // Sesuaikan ukuran lewat CSS atau inline
        />
      </NavLink>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            onClick={closeMenu}
          >
            HOME 
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            onClick={closeMenu}
          >
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            onClick={closeMenu}
          >
            GALLERY
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => 'nav-link nav-cta' + (isActive ? ' active' : '')}
            onClick={closeMenu}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}