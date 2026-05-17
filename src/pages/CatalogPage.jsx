import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/mockData';

const CatalogPage = () => (
  <section className="container page">
    <p className="kicker">Katalog lengkap</p>
    <h1>Koleksi siap pakai untuk tenaga kesehatan</h1>
    <p className="muted">
      Temukan scrub set, jas dokter, sepatu medis, aksesori, dan bundle institusi dengan desain profesional,
      bahan nyaman, serta pilihan ukuran yang mudah disesuaikan.
    </p>
    <div className="filters" aria-label="Filter katalog">
      <select><option>Semua kategori</option>{categories.map((category) => <option key={category}>{category}</option>)}</select>
      <select><option>Rentang harga</option><option>Di bawah Rp200.000</option><option>Rp200.000 - Rp500.000</option><option>Di atas Rp500.000</option></select>
      <select><option>Warna favorit</option><option>Navy</option><option>Sage</option><option>Putih</option><option>Charcoal</option></select>
      <select><option>Ukuran</option><option>S - M</option><option>L - XL</option><option>All Size</option></select>
      <select><option>Urutkan: Terbaru</option><option>Best Seller</option><option>Harga Terendah</option></select>
    </div>
    <div className="product-grid">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>
  </section>
);

export default CatalogPage;
