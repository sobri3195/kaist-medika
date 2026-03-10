import { faqs } from '../data/mockData';

const FAQPage = () => (
  <section className="container page">
    <h1>FAQ</h1>
    {faqs.map((f) => (
      <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
    ))}
  </section>
);

export default FAQPage;
