import { categories } from '../data/mockData';

const CategoriesPage = () => (
  <section className="container page">
    <h1>Kategori Produk</h1>
    <div className="pill-grid">{categories.map((c) => <span key={c} className="pill">{c}</span>)}</div>
  </section>
);

export default CategoriesPage;
