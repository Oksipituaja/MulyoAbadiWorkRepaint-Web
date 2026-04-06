import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="ft-grid">
        <div className="ft-brand">
          <div className="ft-brand-box">
            <span className="ft-brand-txt">MULYO ABADI</span>
          </div>
          <p>Spesialis repaint &amp; restorasi body part motor profesional. Lebih dari 10 tahun melayani di Bangsri dan sekitarnya.</p>
          <div className="soc-links">
            <a className="soc-link" href="https://www.facebook.com/iwan.sulistiyo.5686" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="soc-link" href="https://instagram.com/mulyoabadiworkpaint" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="soc-link" href="https://www.tiktok.com/@paintingmulyoabadi" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        <div className="ft-col">
          <h4>Halaman</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="ft-col">
          <h4>Layanan</h4>
          <a href="#">Repaint</a>
          <a href="#">Restorasi</a>
          <a href="#">Touch Up &amp; Poles</a>
        </div>

        <div className="ft-col">
          <h4>Kontak</h4>
          <p>
            <i className="fas fa-phone-alt fa-fw"></i> +62 895-3972-00528
          </p>
          <p>
            <i className="fas fa-map-marker-alt fa-fw"></i> Cobaan, RT 03/RW 13 <span></span> Kec. Bangsri, Kab. Jepara, Jawa Tengah
          </p>
          <div className="opening-hours">
            <p>
              <i className="fas fa-clock fa-fw"></i> <span>Senin – Minggu:</span> <span>09.00 – 17.00 WIB</span>
            </p>
            <p>

            </p>
          </div>
          <p>
            <i className="fas fa-calendar-times fa-fw" style={{ color: '#d9534f' }}></i> Tutup: <span style={{fontWeight: '500'}}>Jumat</span>
          </p>
        </div>
      </div>

      <hr className="ft-div" />
      <div className="ft-bot">
        <span>© 2026 Mulyo Abadi Work Paint. All rights reserved.</span>
        <span>Spesialis Repaint &amp; Restorasi Motor</span>
      </div>
    </footer>
  )
}
