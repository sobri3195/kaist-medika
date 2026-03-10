import { Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { formatRupiah } from '../utils/format';

const CartPage = () => {
  const cartItem = products[0];
  return (
    <section className="container page">
      <h1>Cart</h1>
      <div className="card">
        <p>{cartItem.name}</p>
        <p>{formatRupiah(cartItem.price)}</p>
      </div>
      <div className="card">
        <p>Subtotal: {formatRupiah(cartItem.price)}</p>
        <Link to="/checkout" className="btn btn-primary">Lanjut Checkout</Link>
      </div>
    </section>
  );
};

export default CartPage;
