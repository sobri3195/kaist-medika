import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { blogs, categories, products, testimonials } from '../data/mockData';

const stats = [
  ['10K+', 'Pelanggan aktif'],
  ['4.9/5', 'Rata-rata ulasan'],
  ['34', 'Kota same day'],
];

const benefits = [
  {
    title: 'Fit profesional, tetap fleksibel',
    description: 'Pola tailored fit dengan ruang gerak nyaman untuk visite, tindakan, dan shift panjang.',
  },
  {
    title: 'Material premium anti-gerah',
    description: 'Kain breathable, quick dry, dan mudah dirawat agar tampilan tetap rapi seharian.',
  },
  {
    title: 'Siap untuk tim & institusi',
    description: 'Tersedia paket klinik, bordir nama, kurasi ukuran, dan konsultasi warna seragam.',
  },
];

const HomePage = () => (
  <div>
    <section className="hero container">
      <div className="hero-surface">
        <div className="hero-copy">
          <p className="kicker">Professional Wear, Compassionate Care.</p>
          <h1>Seragam medis premium untuk ritme kerja tenaga kesehatan modern.</h1>
          <p>
            Kai&apos;st Medika menghadirkan scrub, jas dokter, sepatu medis, dan bundle klinik yang nyaman,
            rapi, serta mudah dipadukan untuk praktik harian maupun kebutuhan institusi.
          </p>
          <div className="hero-cta">
            <Link to="/katalog" className="btn btn-primary">Belanja Koleksi</Link>
            <Link to="/kontak" className="btn btn-outline">Konsultasi Ukuran</Link>
          </div>
          <label className="search-wrap" htmlFor="hero-search">
            <span>🔎</span>
            <input id="hero-search" className="search" placeholder="Cari scrub navy, jas dokter, sepatu anti-slip..." />
          </label>
          <div className="stats-grid">
            {stats.map(([value, label]) => (
              <div key={label} className="stat-item">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <span className="hero-badge">Gratis konsultasi size chart</span>
          <img className="hero-illustration" src="/hero-medika.svg" alt="Ilustrasi tenaga kesehatan Kai'st Medika" loading="lazy" />
          <div className="hero-card">
            <strong>Shift-ready essentials</strong>
            <span>Scrub + cap + masker + sepatu ergonomis</span>
          </div>
        </div>
      </div>
    </section>

    <section className="container category-panel">
      <SectionTitle title="Belanja berdasarkan kebutuhan" subtitle="Pilih cepat sesuai profesi, aktivitas, dan standar seragam tim Anda." />
      <div className="pill-grid">{categories.slice(0, 8).map((c) => <Link to="/katalog" key={c} className="pill">{c}</Link>)}</div>
    </section>

    <section className="container split-section">
      <div>
        <SectionTitle title="Best seller pilihan nakes" subtitle="Item paling sering dipilih untuk praktik harian, koas, dan tim klinik." />
      </div>
      <Link to="/katalog" className="text-link">Lihat semua produk →</Link>
    </section>
    <section className="container">
      <div className="product-grid featured-products">{products.slice(0, 3).map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>

    <section className="container promo">
      <div>
        <span className="promo-eyebrow">Paket institusi</span>
        <h2>Diskon hingga 20% untuk bundle klinik & rumah sakit.</h2>
        <p>Kami bantu kurasi ukuran, warna, dan kebutuhan seragam tim agar onboarding lebih cepat.</p>
      </div>
      <Link to="/kontak" className="btn btn-light">Ajukan Penawaran</Link>
    </section>

    <section className="container split-section">
      <div>
        <SectionTitle title="Koleksi terbaru" subtitle="Drop baru dengan warna tenang, bahan ringan, dan detail fungsional." />
      </div>
      <Link to="/katalog" className="text-link">Eksplor koleksi →</Link>
    </section>
    <section className="container">
      <div className="product-grid">{products.slice(12, 17).map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>

    <section className="container">
      <SectionTitle title="Kenapa Kai'st Medika?" subtitle="Dirancang untuk tampil profesional tanpa mengorbankan kenyamanan kerja klinis." />
      <div className="adv-grid">
        {benefits.map((item) => (
          <article key={item.title}>
            <span className="feature-icon">✓</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="container testimonials">
      <SectionTitle title="Dipercaya dokter, perawat, dan koas" />
      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <blockquote key={t.name}><p>“{t.text}”</p><cite>{t.name}</cite></blockquote>
        ))}
      </div>
    </section>

    <section className="container blog-list">
      <SectionTitle title="Edukasi medis & uniform care" subtitle="Insight singkat untuk merawat seragam dan menyiapkan perlengkapan kerja." />
      <div className="article-grid">
        {blogs.map((b) => (
          <article key={b.id}><span>Artikel</span><h3>{b.title}</h3><p>{b.excerpt}</p></article>
        ))}
      </div>
    </section>
  </div>
);

export default HomePage;
