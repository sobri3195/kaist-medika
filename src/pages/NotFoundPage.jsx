import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="container page empty">
    <h1>404</h1>
    <p>Halaman tidak ditemukan.</p>
    <Link to="/" className="btn btn-primary">Kembali ke Home</Link>
  </section>
);

export default NotFoundPage;
