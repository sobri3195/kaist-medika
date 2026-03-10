const AuthPage = () => (
  <section className="container page auth-grid">
    <div>
      <h1>Login</h1>
      <form className="form-grid"><input placeholder="Email" /><input placeholder="Password" type="password" /><button className="btn btn-primary">Masuk</button></form>
    </div>
    <div>
      <h1>Register</h1>
      <form className="form-grid"><input placeholder="Nama" /><input placeholder="Email" /><input placeholder="Password" type="password" /><button className="btn btn-outline">Daftar</button></form>
    </div>
  </section>
);

export default AuthPage;
