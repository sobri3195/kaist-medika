import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { blogs, categories, products, testimonials } from '../data/mockData';

const stats = [
  ['10K+', 'Pelanggan Aktif'],
  ['4.9/5', 'Rating Kepuasan'],
  ['34', 'Kota Terjangkau Same Day'],
];

const HomePage = () => (
  <div>
    <section className="hero container">
      <div className="hero-surface">
        <p className="kicker">Slogan: Professional Wear, Compassionate Care.</p>
        <h1>Tampil Profesional, Nyaman Seharian bersama Kai'st Medika</h1>
        <p>
          Brand ecommerce medis premium Indonesia untuk scrub kedokteran, jas dokter, dan perlengkapan kerja
          tenaga kesehatan modern.
        </p>
        <div className="hero-cta">
          <Link to="/katalog" className="btn btn-primary">Belanja Sekarang</Link>
          <Link to="/katalog" className="btn btn-outline">Lihat Katalog</Link>
        </div>
        <input className="search" placeholder="Cari scrub, jas dokter, surgical cap..." />
        <div className="stats-grid">
          {stats.map(([value, label]) => (
            <div key={label} className="stat-item">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container">
      <SectionTitle title="Kategori Unggulan" subtitle="Dirancang untuk dokter, perawat, koas, bidan, dan institusi kesehatan." />
      <div className="pill-grid">{categories.slice(0, 6).map((c) => <span key={c} className="pill">{c}</span>)}</div>
    </section>

    <section className="container">
      <SectionTitle title="Best Seller" />
      <div className="product-grid">{products.slice(0, 3).map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>

    <section className="container promo">Promo Spesial: Diskon hingga 20% untuk pembelian bundle klinik & rumah sakit.</section>

    <section className="container">
      <SectionTitle title="New Arrivals" />
      <div className="product-grid">{products.slice(3, 6).map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>

    <section className="container">
      <SectionTitle title="Keunggulan Kai'st Medika" />
      <ul className="adv-grid">
        {['Nyaman Dipakai Seharian', 'Material Premium', 'Desain Profesional', 'Cocok untuk Tenaga Kesehatan Indonesia', 'Pengiriman Seluruh Indonesia'].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>

    <section className="container testimonials">
      <SectionTitle title="Testimoni Pelanggan" />
      {testimonials.map((t) => (
        <blockquote key={t.name}><p>“{t.text}”</p><cite>{t.name}</cite></blockquote>
      ))}
    </section>

    <section className="container blog-list">
      <SectionTitle title="Edukasi Medis" subtitle="Insight seputar scrub, koas, dan tampil profesional di lingkungan klinis." />
      {blogs.map((b) => (
        <article key={b.id}><h3>{b.title}</h3><p>{b.excerpt}</p></article>
      ))}
    </section>
  </div>
);

export default HomePage;
