const ContactPage = () => (
  <section className="container page detail-grid">
    <div className="prose">
      <p className="kicker">Kontak</p>
      <h1>Butuh rekomendasi ukuran atau penawaran institusi?</h1>
      <p>
        Ceritakan kebutuhan Anda. Tim Kai&apos;st Medika siap membantu memilih bahan, warna, ukuran, serta paket
        yang paling sesuai untuk personal, koas, klinik, maupun rumah sakit.
      </p>
      <div className="card">
        <strong>Jam layanan</strong>
        <p>Senin–Sabtu, 09.00–18.00 WIB</p>
        <p>WhatsApp: +62 811 2222 3344</p>
      </div>
    </div>
    <form className="form-grid card">
      <input placeholder="Nama Lengkap" />
      <input placeholder="Email" />
      <input placeholder="Nomor WhatsApp" />
      <select><option>Kebutuhan: personal / institusi</option><option>Personal</option><option>Klinik / Rumah Sakit</option><option>Mahasiswa Koas</option></select>
      <textarea placeholder="Pesan" rows="4" />
      <button type="button" className="btn btn-primary">Kirim Pesan</button>
    </form>
  </section>
);

export default ContactPage;
