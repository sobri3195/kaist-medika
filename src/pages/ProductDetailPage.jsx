import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';
import { formatRupiah } from '../utils/format';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) return <section className="container page empty">Produk tidak ditemukan.</section>;

  return (
    <section className="container page detail-grid">
      <img src={product.image} alt={product.name} className="detail-image" />
      <div>
        <span className="badge">{product.badge}</span>
        <h1>{product.name}</h1>
        <p>{formatRupiah(product.price)}</p>
        <p>{product.description}</p>
        <p><strong>Bahan:</strong> {product.material}</p>
        <p><strong>Warna:</strong> {product.colors.join(', ')}</p>
        <p><strong>Ukuran:</strong> {product.sizes.join(', ')}</p>
        <p><strong>Size Chart:</strong> S (46), M (50), L (54), XL (58) cm lingkar dada.</p>
        <div className="card-actions">
          <button className="btn btn-primary">Tambah ke Cart</button>
          <button className="btn btn-outline">Tambah Wishlist</button>
        </div>
        <Link className="btn btn-outline" to="/checkout">Checkout Sekarang</Link>
      </div>
      <div className="full-width">
        <h2>Produk Terkait</h2>
        <div className="product-grid">{products.filter((p) => p.id !== product.id).slice(0, 3).map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
