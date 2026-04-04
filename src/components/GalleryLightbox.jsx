import { useEffect, useRef } from 'react';

export default function GalleryLightbox({ items, currentIndex, onClose, onNext, onPrev }) {
  const item = items[currentIndex];
  const videoRef = useRef(null);

  // Efek untuk menghentikan video jika Lightbox ditutup
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = ""; // Membersihkan resource video
      }
    };
  }, []);

  // Menutup jika area gelap di klik
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('lb-backdrop')) {
      onClose();
    }
  };

  return (
    <div className="lb-backdrop" onClick={handleBackdropClick}>
      <button className="lb-close" onClick={onClose}>&times;</button>
      
      <button className="lb-nav prev" onClick={onPrev}>
        <i className="fas fa-chevron-left"></i>
      </button>

      <div className="lb-content">
        {item.type === 'video' ? (
          <video 
            ref={videoRef}
            src={item.src} 
            controls 
            autoPlay 
            className="lb-asset"
          />
        ) : (
          <div className="lb-img-container">
            <img 
              src={item.src} 
              alt={item.label} 
              className="lb-asset zoom-in" 
            />
          </div>
        )}
        
        <div className="lb-info">
          <h3>{item.label}</h3>
          <p>{item.sub}</p>
        </div>
      </div>

      <button className="lb-nav next" onClick={onNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
} 