import { blogs } from '../data/mockData';

const BlogPage = () => (
  <section className="container page blog-list">
    <p className="kicker">Edukasi</p>
    <h1>Tips uniform care & perlengkapan medis</h1>
    <p className="muted">
      Artikel singkat untuk membantu Anda memilih bahan, merawat jas dokter, dan menyiapkan kebutuhan shift
      dengan lebih praktis.
    </p>
    <div className="article-grid">
      {blogs.map((blog) => (
        <article key={blog.id}>
          <span>Panduan</span>
          <h2>{blog.title}</h2>
          <p>{blog.excerpt}</p>
        </article>
      ))}
    </div>
  </section>
);

export default BlogPage;
