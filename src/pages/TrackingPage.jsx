const TrackingPage = () => (
  <section className="container page">
    <h1>Tracking Pesanan</h1>
    <div className="form-grid">
      <input placeholder="Masukkan nomor pesanan" />
      <button className="btn btn-primary">Lacak Pesanan</button>
    </div>
    <div className="card empty">Belum ada data pelacakan. Silakan masukkan nomor pesanan Anda.</div>
  </section>
);

export default TrackingPage;
