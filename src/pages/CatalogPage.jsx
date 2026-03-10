import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const CatalogPage = () => (
  <section className="container page">
    <h1>Katalog Produk</h1>
    <div className="filters">
      <select><option>Kategori</option></select>
      <select><option>Harga</option></select>
      <select><option>Warna</option></select>
      <select><option>Ukuran</option></select>
      <select><option>Urutkan: Terbaru</option></select>
    </div>
    <div className="product-grid">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>
  </section>
);

export default CatalogPage;
