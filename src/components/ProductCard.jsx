import { Link } from 'react-router-dom';
import { formatRupiah } from '../utils/format';

const ProductCard = ({ product }) => (
  <article className="product-card">
    <Link to={`/produk/${product.slug}`} className="product-media" aria-label={`Lihat detail ${product.name}`}>
      <img src={product.image} alt={product.name} loading="lazy" />
      <span className="badge">{product.badge}</span>
    </Link>
    <div className="product-body">
      <p className="muted product-category">{product.category}</p>
      <h3>{product.name}</h3>
      <p className="product-desc">{product.description}</p>
      <div className="price-row">
        <strong>{formatRupiah(product.price)}</strong>
        {product.oldPrice ? <span>{formatRupiah(product.oldPrice)}</span> : null}
      </div>
      {product.hashtags?.length ? (
        <div className="hashtag-list">
          {product.hashtags.slice(0, 3).map((tag) => (
            <span key={tag} className="hashtag-chip">{tag}</span>
          ))}
        </div>
      ) : null}
      <div className="card-actions">
        <button type="button" className="btn btn-outline">♡ Wishlist</button>
        <button type="button" className="btn btn-primary">+ Cart</button>
      </div>
    </div>
  </article>
);

export default ProductCard;
