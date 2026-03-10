import { blogs } from '../data/mockData';

const BlogPage = () => (
  <section className="container page blog-list">
    <h1>Blog & Edukasi</h1>
    {blogs.map((blog) => (
      <article key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.excerpt}</p>
      </article>
    ))}
  </section>
);

export default BlogPage;
