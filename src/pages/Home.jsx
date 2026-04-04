import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/assets/hero-img-mulyo-abadi.png')" }}
      >
        <div className="hero-grid"></div>
        <div className="hero-ring"></div>
        <div className="hero-ring2"></div>
        <div className="hero-moto-bg">
          <i className="fas fa-motorcycle"></i>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <i></i> Spesialis Repaint &amp; Restorasi Motor
          </div>
          <h1>
            Kembalikan <em>Kilau</em>
            <br />Motor Anda
          </h1>
          <p>
            Mulyo Abadi Work Paint hadir untuk merepaint dan merestorasi body part motor
            Anda — dari penyok, kusam, hingga goresan dalam, kami kembalikan tampilan
            motor seperti baru dari dealer.
          </p>
          <div className="hero-btns">
            <Link className="btn-w" to="/contact">
              <i className="fas fa-motorcycle"></i> Konsultasi Gratis
            </Link>
            <Link className="btn-g" to="/gallery">
              Lihat Hasil Kerja
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-num">1000+</div>
          <div className="stat-label">Unit Direpaint</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">10+</div>
          <div className="stat-label">Tahun Pengalaman</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">500+</div>
          <div className="stat-label">Pelanggan Puas</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">100%</div>
          <div className="stat-label">Garansi Hasil</div>
        </div>
      </div>

      {/* ═══ SERVICES ═══ */}
      <section className="services-sec">
        <div className="section-header">
          <div className="section-tag">Layanan Kami</div>
          <h2 className="section-title">Apa yang Kami Kerjakan</h2>
          <p className="section-lead">
            Spesialis repaint dan restorasi body part motor dengan hasil setara ATPM —
            rapi, rata, warna presisi, dan tahan lama.
          </p>
        </div>
        <div className="services-grid">
          <div className="svc-card">
            <div className="svc-icon"><i className="fas fa-palette"></i></div>
            <h3>Full Body Repaint</h3>
            <p>Pengecatan ulang menyeluruh seluruh panel bodi motor. Warna presisi, hasil mulus, tampilan seperti baru keluar dari dealer.</p>
          </div>
          <div className="svc-card">
            <div className="svc-icon"><i className="fas fa-wrench"></i></div>
            <h3>Restorasi Body Penyok</h3>
            <p>Perataan dan perbaikan panel body yang penyok akibat benturan atau kecelakaan, dikerjakan teknisi berpengalaman.</p>
          </div>
          <div className="svc-card">
            <div className="svc-icon"><i className="fas fa-pen-fancy"></i></div>
            <h3>Custom Paint &amp; Airbrush</h3>
            <p>Desain grafis custom, livery racing, motif spesial, atau airbrush artwork unik sesuai karakter dan selera Anda.</p>
          </div>
          <div className="svc-card">
            <div className="svc-icon"><i className="fas fa-magic"></i></div>
            <h3>Touch Up &amp; Poles</h3>
            <p>Perbaikan goresan, baret, dan cat terkelupas secara lokal. Poles dan finishing untuk mengembalikan kilap bodi motor.</p>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="process-sec">
        <div className="section-header">
          <div className="section-tag">Cara Kerja</div>
          <h2 className="section-title">Proses Pengerjaan Kami</h2>
          <p className="section-lead">
            Setiap motor diproses dengan alur terstandar untuk memastikan hasil terbaik dan tepat waktu.
          </p>
        </div>
        <div className="process-steps">
          <div className="proc-step">
            <div className="proc-num">01</div>
            <h4>Konsultasi &amp; Cek Motor</h4>
            <p>Survei kondisi bodi, diskusi warna dan desain, serta estimasi biaya dan waktu pengerjaan.</p>
          </div>
          <div className="proc-step">
            <div className="proc-num">02</div>
            <h4>Persiapan &amp; Dempul</h4>
            <p>Pembongkaran panel, pengamplasan, pendempulan penyok dan goresan hingga permukaan rata sempurna.</p>
          </div>
          <div className="proc-step">
            <div className="proc-num">03</div>
            <h4>Proses Pengecatan</h4>
            <p>Aplikasi cat primer, base coat warna pilihan, dan clear coat untuk kilap dan perlindungan optimal.</p>
          </div>
          <div className="proc-step">
            <div className="proc-num">04</div>
            <h4>Finishing &amp; Serah Terima</h4>
            <p>Poles akhir, quality check menyeluruh, dan serah terima motor kepada pemilik dengan kondisi prima.</p>
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="whyus-sec">
        <div className="whyus-grid">
          <div className="whyus-vis">
            <video
              src="/assets/Video/clear-artic-mio-sporty.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="vis-badge">
              <div className="vb-num">1000+</div>
              <div className="vb-txt">Unit motor telah kami<br />repaint &amp; restorasi</div>
            </div>
          </div>
          <div>
            <div className="section-tag" style={{ justifyContent: 'flex-start' }}>Kenapa Kami</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Mengapa Pilih<br />Mulyo Abadi?
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '28px' }}>
              Kami bukan sekadar bengkel cat biasa. Standar pengerjaan tinggi dan material premium kami — hasilnya bicara sendiri.
            </p>
            <div className="why-list">
              {[
                { n: '01', title: 'Cat & Material Otomotif Premium', desc: 'Cat khusus otomotif grade tinggi — warna akurat, daya rekat kuat, tahan UV dan cuaca ekstrem.' },
                { n: '02', title: 'Teknisi Ahli 10+ Tahun', desc: 'Tim kami terlatih profesional dalam teknik body repair dan pengecatan motor roda dua berbagai tipe.' },
                { n: '03', title: 'Garansi Hasil Kerja', desc: 'Setiap pekerjaan kami sertai garansi resmi. Ada masalah dalam periode garansi? Kami tanggungan penuh.' },
                { n: '04', title: 'Pengerjaan Tepat Waktu', desc: 'Estimasi waktu yang jelas dan komitmen penyelesaian sesuai jadwal yang telah disepakati bersama.' },
              ].map((item) => (
                <div className="why-item" key={item.n}>
                  <div className="why-n">{item.n}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <div className="cta-ban">
        <h2>Motor Anda Butuh Repaint?</h2>
        <p>Konsultasikan kondisi motor Anda sekarang — survei dan estimasi biaya GRATIS!</p>
        <Link className="btn-w" to="/contact">
          <i className="fas fa-motorcycle"></i> Konsultasi Sekarang →
        </Link>
      </div>
    </>
  )
}