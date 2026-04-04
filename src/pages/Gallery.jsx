import { useState } from 'react'
import GalleryLightbox from '../components/GalleryLightbox'

// ═══ DATA GALLERY ═══
const GALLERY_ITEMS = [
  // REPAINT
  {
    type: 'image',
    src: '/assets/Repaint/rel-pict.jpg',
    label: 'Full Body Repaint',
    sub: 'Hasil pengecatan profesional',
    category: 'repaint',
  },
  {
    type: 'image',
    src: '/assets/Repaint/ninja-ss-green-metalik.jpg',
    label: 'Custom Paint — Ninja SS',
    sub: 'Green Metalik Finish',
    category: 'repaint',
  },
  {
    type: 'image',
    src: '/assets/Repaint/blue-purple-red.jpg',
    label: 'Color Blending',
    sub: 'Multi-tone Paint Design',
    category: 'repaint',
  },
  {
    type: 'image',
    src: '/assets/Repaint/vespa.jpg',
    label: 'Full Repaint — Vespa Classic',
    sub: 'Restorasi Classic Indonesia',
    category: 'repaint',
  },
  {
    type: 'image',
    src: '/assets/Repaint/kami-selalu-rindu-dengan-orderan.jpg',
    label: 'Touch Up & Polish',
    sub: 'Finishing Premium Quality',
    category: 'repaint',
  },
  {
    type: 'image',
    src: '/assets/Repaint/kualitas-premium.jpg',
    label: 'Kualitas Premium',
    sub: 'Hasil pengecatan tahan lama',
    category: 'repaint',
  },
  // RESTORASI
  {
    type: 'image',
    src: '/assets/Restorasi/restorasi-body-panel.jpeg',
    label: 'Restorasi Body Panel',
    sub: 'Perbaikan dan pemulihan',
    category: 'restorasi',
  },
  {
    type: 'image',
    src: '/assets/Video/workshop-process.jpg',
    label: 'Workshop Process',
    sub: 'Proses dan teknik kerja',
    category: 'restorasi',
  },
  // VIDEOS
  {
    type: 'video',
    src: '/assets/Video/ninja-blue-purple.mp4',
    label: 'Ninja SS Blue Purple',
    sub: 'Custom Paint Process',
    category: 'videos',
  },
  {
    type: 'video',
    src: '/assets/Video/clear-artic-mio-sporty.mp4',
    label: 'Clear Artic Process',
    sub: 'Yamaha Mio Sporty',
    category: 'videos',
  },
  {
    type: 'video',
    src: '/assets/Video/restorasi-vespa-px150.mp4',
    label: 'Vespa PX150 Restoration',
    sub: 'Full Restoration Project',
    category: 'videos',
  },
  {
    type: 'video',
    src: '/assets/Video/before-after-workshop.mp4',
    label: 'Before After Transformation',
    sub: 'Journey dari workshop kecil',
    category: 'videos',
  },
  {
    type: 'video',
    src: '/assets/Video/vid1blue.mp4',
    label: 'Blue Custom Video',
    sub: 'Design & Paint Application',
    category: 'videos',
  },
  {
    type: 'video',
    src: '/assets/Video/frame-black-clear-artic.mp4',
    label: 'Frame Black & Clear Artic',
    sub: 'Advanced Restoration Process',
    category: 'videos',
  },
  {
  type: 'image',
    src: '/assets/Restorasi/restorasi-ninja.png',
    label: 'Restorasi Kawasaki Ninja',
    sub: 'Pengecatan ulang body set dan pembersihan komponen mesin.',
    category: 'restorasi',
  },
  {
    type: 'image',
    src: '/assets/Restorasi/restorasi-rx-king.png',
    label: 'Restorasi RX King Kustom',
    sub: 'Restorasi rangka dan pengecatan tangki motif airbrush.',
    category: 'restorasi',
  },
]

const FILTERS = [
  { key: 'all', label: 'Semua' },
  { key: 'repaint', label: 'Repaint', icon: 'fa-palette' },
  { key: 'restorasi', label: 'Restorasi', icon: 'fa-wrench' },
  { key: 'videos', label: 'Videos', icon: 'fa-play' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextItem = () => setLightboxIndex((i) => (i + 1) % filtered.length)
  const prevItem = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)

  return (
    <>
      {/* ═══ GALLERY HERO ═══ */}
      <div className="gal-hero">
        <div className="section-tag" style={{ justifyContent: 'center', color: 'var(--accent-pale)' }}>
          Portofolio
        </div>
        <h1>Hasil Repaint &amp; Restorasi</h1>
        <p>Ribuan motor telah kami tangani — lihat sebagian hasil karya terbaik kami.</p>
      </div>

      {/* ═══ FILTER ═══ */}
      <div className="gal-filter">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`f-btn${activeFilter === f.key ? ' active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.icon && <i className={`fas ${f.icon}`}></i>} {f.label}
          </button>
        ))}
      </div>

      {/* ═══ GALLERY GRID ═══ */}
      <div className="gal-grid">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="gal-item"
            data-category={item.category}
            onClick={() => openLightbox(index)}
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0 }}
              />
            ) : (
              <img src={item.src} alt={item.label} loading="lazy" />
            )}
            <div className="gal-ov">
              <div className="gal-lbl">
                {item.type === 'video' && <i className="fas fa-play"></i>} {item.label}
              </div>
              <div className="gal-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ═══ LIGHTBOX ═══ */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextItem}
          onPrev={prevItem}
        />
      )}
    </>
  )
}