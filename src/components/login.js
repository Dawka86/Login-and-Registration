export default function Login() {
  return (
    <form className="login_container">
      <h1 className="h3 mt-3 mb-3 fw-normal title">Please sign in</h1>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3 checkbox_text">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p className="mt-3 mb-3 date_text">© 2024</p>
    </form>
  );
}
