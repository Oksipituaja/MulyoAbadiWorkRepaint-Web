export default function About() {
  return (
    <>
      {/* ═══ ABOUT HERO ═══ */}
      <div className="ab-hero">
        <video
          className="ab-hero-video"
          src="/assets/Video/restorasi-vespa-px150.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="ab-hero-overlay"></div>
        <div className="ab-hero-content">
          <div className="section-tag" style={{ justifyContent: 'center', color: 'var(--accent-pale)' }}>
            Tentang Kami
          </div>
          <h1>
            Your Best Solution For<br />Motor Repaint &amp; Restoration
          </h1>
          <p>
            Mulyo Abadi Work Paint adalah bengkel cat spesialis repaint dan restorasi
            body part motor profesional yang telah melayani ribuan pelanggan sejak 2014.
          </p>
        </div>
      </div>

      {/* ═══ OUR STORY ═══ */}
      <div className="ab-story">
        <div className="ab-story-txt">
          <div className="section-tag" style={{ justifyContent: 'flex-start' }}>Cerita Kami</div>
          <h2>Berdiri Sejak 2014,<br />Ribuan Motor Telah Kami Repaint</h2>
          <p>
            Mulyo Abadi Work Paint lahir dari kecintaan terhadap dunia otomotif dan
            semangat untuk menghadirkan layanan repaint motor berkualitas tinggi yang
            terjangkau bagi para bikers di Bangsri dan sekitarnya.
          </p>
          <p>
            Dengan pengalaman lebih dari satu dekade, kami telah menangani ribuan unit
            motor berbagai merek — Honda, Yamaha, Suzuki, Kawasaki, hingga motor sport
            dan moge — dengan hasil yang selalu memuaskan.
          </p>
          <p>
            Kepercayaan komunitas motor dan pelanggan setia kami adalah motivasi terbesar
            untuk terus meningkatkan kualitas dan layanan setiap harinya.
          </p>
        </div>
        <div className="ab-vis">
          <video
            src="/assets/Video/ninja-blue-purple.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
      </div>

      {/* ═══ VISION MISSION ═══ */}
      <div className="specials-grid">
        <div className="sp-card">
          <div className="sp-icon sp-icon-visi">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3>Visi</h3>
          <p>
            Menjadi bengkel repaint dan restorasi motor terpercaya dan terdepan di Jawa
            Tengah dengan standar kualitas terbaik.
          </p>
        </div>
        <div className="sp-card">
          <div className="sp-icon sp-icon-misi">
            <i className="fas fa-fire"></i>
          </div>
          <h3>Misi</h3>
          <p>
            Memberikan layanan repaint motor profesional dengan material premium, teknisi
            ahli, untuk kepuasan maksimal setiap pelanggan.
          </p>
        </div>
        <div className="sp-card">
          <div className="sp-icon sp-icon-keahlian">
            <i className="fas fa-tools"></i>
          </div>
          <h3>Keahlian</h3>
          <p>
            Menangani segala jenis motor — sport, matic, naked, adventure, hingga moge —
            dengan teknik pengecatan otomotif terkini.
          </p>
        </div>
      </div>
    </>
  )
}