import { useState } from 'react'

const WA_NUMBER = '+62    895397200528' // Ganti dengan nomor WhatsApp aktual

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    motor: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitWhatsApp = () => {
    const { name, phone, service, motor, message } = form

    if (!name || !phone || !service || !motor || !message) {
      alert('Mohon isi semua field yang wajib (*)')
      return
    }

    const text = `*PERMINTAAN KONSULTASI*

Nama: ${name}
No. HP: ${phone}
Layanan: ${service}
Jenis Motor: ${motor}

*Pesan:*
${message}

---
Pesan dari website Mulyo Abadi Work Paint`

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')

    // Reset form
    setForm({ name: '', phone: '', service: '', motor: '', message: '' })
  }

  return (
    <>
      {/* ═══ CONTACT HERO ═══ */}
      <div className="con-hero">
        <div className="section-tag" style={{ justifyContent: 'center', color: 'var(--accent-pale)' }}>
          Hubungi Kami
        </div>
        <h1>Konsultasi Gratis</h1>
        <p>Hubungi langsung via WhatsApp untuk mendapatkan penawaran terbaik.</p>
      </div>

      {/* ═══ CONTACT SECTION ═══ */}
      <section className="con-sec">
        <div className="con-grid">

          {/* LEFT: INFO */}
          <div className="con-info">
            <h2>Informasi Kontak</h2>

            <div className="con-item">
              <div className="con-icon"><i className="fas fa-phone"></i></div>
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">
                    +62 895 3972 00528 (Aktif)
                  </a>
                </p>
              </div>
            </div>

            <div className="con-item">
              <div className="con-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h4>Lokasi</h4>
                <p>Cobaan, RT 03/RW 13, Desa Bangsri, Kec. Bangsri, Kab. Jepara, Jawa Tengah</p>
                <small>Alamat lengkap tersedia saat konsultasi</small>
              </div>
            </div>

            <div className="con-item">
              <div className="con-icon"><i className="fas fa-clock"></i></div>
              <div>
                <h4>Jam Kerja</h4>
                <p>Senin - Minggu: 09.00 - 17.00 WIB</p>
                <p>Jumat &amp; Hari Libur: Tutup</p>
              </div>
            </div>

            <div className="con-item">
              <div className="con-icon"><i className="fab fa-instagram"></i></div>
              <div>
                <h4>Media Sosial</h4>
                <p>
                  <a href="https://instagram.com/mulyoabadiworkpaint" target="_blank" rel="noreferrer">
                    @mulyoabadiworkpaint
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="con-form">
            <h2>Kirim Pesan</h2>

            <div className="form-group">
              <label htmlFor="name">Nama Lengkap *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nama Anda"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">No. Telepon / WhatsApp *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="0812-345-6789"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Jenis Layanan *</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">-- Pilih Layanan --</option>
                <option value="Full Body Repaint">Full Body Repaint</option>
                <option value="Restorasi Body Penyok">Restorasi Body Penyok</option>
                <option value="Custom Paint & Airbrush">Custom Paint &amp; Airbrush</option>
                <option value="Touch Up & Poles">Touch Up &amp; Poles</option>
                <option value="Lainnya">Lainnya / Konsultasi</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="motor">Jenis / Tipe Motor *</label>
              <input
                type="text"
                id="motor"
                name="motor"
                placeholder="Contoh: Honda Supra X 125"
                value={form.motor}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan / Detail Pesanan *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Jelaskan detail pesanan Anda..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="button"
              className="btn-primary"
              onClick={submitWhatsApp}
            >
              <i className="fab fa-whatsapp"></i> Kirim via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* ═══ WHY CONTACT ═══ */}
      <section
        className="why-sec"
        style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
          color: 'white',
          padding: '60px 20px',
          textAlign: 'center',
        }}
      >
        <div className="sec-wrap">
          <h2 style={{ color: 'white', marginBottom: '40px' }}>Keuntungan Menghubungi Kami</h2>
          <div className="why-grid">
            {[
              { icon: 'fa-check-circle', title: 'Konsultasi Gratis', desc: 'Dapatkan saran profesional tanpa biaya apapun' },
              { icon: 'fa-clock', title: 'Respons Cepat', desc: 'Kami siap menjawab pertanyaan dalam waktu singkat' },
              { icon: 'fa-star', title: 'Layanan Terpercaya', desc: '10+ tahun melayani ribuan pelanggan puas' },
            ].map((item) => (
              <div
                key={item.title}
                className="why-card"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '30px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <i className={`fas ${item.icon}`} style={{ fontSize: '40px', marginBottom: '15px', display: 'block' }}></i>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}