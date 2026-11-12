export default function HomePage() {
  return (
    <main className="video-hero">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      <nav className="nav-overlay">
        <div className="logo-text">YAKIR'S</div>
        <div className="nav-links">
          <a href="/rings" target="_blank" rel="noopener noreferrer">Rings</a>
          <a href="/earrings" target="_blank" rel="noopener noreferrer">Earrings</a>
          <a href="/necklaces" target="_blank" rel="noopener noreferrer">Necklaces</a>
          <a href="/bracelets" target="_blank" rel="noopener noreferrer">Bracelets</a>
          <a href="/about" target="_blank" rel="noopener noreferrer">About</a>
          <a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
        <div className="flex gap-4 text-gold">
          <span>🔍</span>
          <span>👤</span>
          <span>🛍️</span>
        </div>
      </nav>
    </main>
  );
}
