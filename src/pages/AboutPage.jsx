const values = [
  ['Nyaman untuk shift panjang', 'Kami memilih bahan yang ringan, breathable, dan mudah dirawat untuk ritme kerja klinis.'],
  ['Tampilan profesional', 'Setiap potongan dibuat clean, rapi, dan mudah dipadukan dengan identitas institusi.'],
  ['Dukungan tim medis', 'Pembelian personal maupun seragam klinik didampingi konsultasi ukuran dan warna.'],
];

const AboutPage = () => (
  <section className="container page prose">
    <p className="kicker">Tentang brand</p>
    <h1>Tentang Kai&apos;st Medika</h1>
    <p>
      Kai&apos;st Medika adalah brand ecommerce seragam dan lifestyle medis premium untuk tenaga kesehatan Indonesia.
      Kami percaya seragam kerja yang tepat membantu dokter, perawat, koas, bidan, dan tim klinik bergerak lebih
      percaya diri saat melayani pasien.
    </p>
    <p>
      Dengan pendekatan fashion-meets-medical, koleksi kami menggabungkan material nyaman, detail fungsional,
      serta siluet profesional yang relevan untuk praktik harian, pendidikan klinik, hingga kebutuhan institusi.
    </p>
    <div className="adv-grid">
      {values.map(([title, description]) => (
        <article key={title}>
          <span className="feature-icon">✓</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default AboutPage;
