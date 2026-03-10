import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const WishlistPage = () => (
  <section className="container page">
    <h1>Wishlist</h1>
    <div className="product-grid">
      {products.slice(0, 2).map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  </section>
);

export default WishlistPage;
