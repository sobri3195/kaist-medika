import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';

const CategoriesPage = () => (
  <section className="container page">
    <p className="kicker">Kategori</p>
    <h1>Belanja lebih cepat sesuai kebutuhan</h1>
    <p className="muted">Pilih kategori produk untuk kebutuhan praktik pribadi, koas, atau pengadaan seragam tim klinik.</p>
    <div className="pill-grid">{categories.map((c) => <Link to="/katalog" key={c} className="pill">{c}</Link>)}</div>
  </section>
);

export default CategoriesPage;
