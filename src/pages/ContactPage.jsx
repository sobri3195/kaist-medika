const ContactPage = () => (
  <section className="container page">
    <h1>Kontak</h1>
    <p>Hubungi tim Kai'st Medika untuk konsultasi ukuran, pembelian grosir, atau kerja sama institusi.</p>
    <form className="form-grid">
      <input placeholder="Nama Lengkap" />
      <input placeholder="Email" />
      <input placeholder="Nomor WhatsApp" />
      <textarea placeholder="Pesan" rows="4" />
      <button className="btn btn-primary">Kirim Pesan</button>
    </form>
  </section>
);

export default ContactPage;
