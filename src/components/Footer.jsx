const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div>
        <img src="/logo-kaist-medika.svg" alt="Kai'st Medika" className="footer-logo" />
        <p>Scrub & lifestyle medis premium untuk tenaga kesehatan Indonesia.</p>
      </div>
      <div>
        <h4>Layanan</h4>
        <p>Katalog Produk</p>
        <p>Tracking Pesanan</p>
        <p>FAQ</p>
      </div>
      <div>
        <h4>Kontak</h4>
        <p>Jakarta, Indonesia</p>
        <p>hello@kaistmedika.id</p>
        <p>+62 811 2222 3344</p>
      </div>
      <div>
        <h4>Newsletter</h4>
        <p className="muted-light">Dapatkan update promo & koleksi terbaru.</p>
        <input placeholder="Email Anda" />
        <button className="btn btn-primary">Langganan</button>
      </div>
    </div>
  </footer>
);

export default Footer;
