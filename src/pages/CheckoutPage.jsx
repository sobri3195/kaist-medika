const CheckoutPage = () => (
  <section className="container page">
    <h1>Checkout</h1>
    <form className="form-grid">
      <h2>Alamat Pengiriman Indonesia</h2>
      <input placeholder="Nama Penerima" />
      <input placeholder="Nomor HP" />
      <input placeholder="Provinsi" />
      <input placeholder="Kota / Kabupaten" />
      <input placeholder="Kecamatan" />
      <textarea rows="3" placeholder="Alamat Lengkap" />
      <select><option>Opsi Pengiriman (placeholder)</option></select>
      <select><option>Opsi Pembayaran (placeholder)</option></select>
      <button className="btn btn-primary">Bayar Sekarang</button>
    </form>
  </section>
);

export default CheckoutPage;
