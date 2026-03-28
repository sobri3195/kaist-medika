import { Link } from 'react-router-dom';
import { formatRupiah } from '../utils/format';

const ProductCard = ({ product }) => (
  <article className="product-card">
    <img src={product.image} alt={product.name} />
    <span className="badge">{product.badge}</span>
    <h3>{product.name}</h3>
    <p className="muted">{product.category}</p>
    <strong>{formatRupiah(product.price)}</strong>
    {product.hashtags?.length ? (
      <div className="hashtag-list">
        {product.hashtags.map((tag) => (
          <span key={tag} className="hashtag-chip">{tag}</span>
        ))}
      </div>
    ) : null}
    <div className="card-actions">
      <button className="btn btn-outline">♡ Wishlist</button>
      <button className="btn btn-primary">+ Cart</button>
    </div>
    <Link to={`/produk/${product.slug}`} className="link-overlay" aria-label={product.name} />
  </article>
);

export default ProductCard;
