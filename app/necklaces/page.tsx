export default function NecklacesPage() {
  return (
    <main className="video-hero">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/necklaces.mp4" type="video/mp4" />
      </video>
      <nav className="nav-overlay">
        <a href="/" target="_blank" className="logo-text">YAKIR'S</a>
        <div className="nav-links">
          <a href="/rings" target="_blank">Rings</a>
          <a href="/earrings" target="_blank">Earrings</a>
          <a href="/necklaces" target="_blank">Necklaces</a>
          <a href="/bracelets" target="_blank">Bracelets</a>
        </div>
      </nav>
    </main>
  );
}
