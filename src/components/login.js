import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const currentDate = new Date();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Hasla roznia sie od siebie!");
      return;
    }

    try {
      const response = await axios.post(`/login`, { email, password });
      if (response.status === 200) {
        setMessage("Logowanie zakonczylo sie poprawnie");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMessage("Blad email juz istnieje!");
      } else {
        setMessage("blad nie wiadomo skad?");
      }
    }
  };

  return (
    <div className="pic_background">
      <form className="login_container" onSubmit={handleSubmit}>
        <h1 className="h3 mt-3 mb-3 fw-normal title">Please login</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder=""
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder=""
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="checkbox mb-3 checkbox_text">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit ">
          Login
        </button>
        <p className="mt-3 mb-3 date_text"> © {currentDate.getFullYear()}</p>
        <p>
          <Link to="/submit">If you are not registered?</Link>
        </p>
        <p>
          <Link to="/">Back to main page</Link>
        </p>
      </form>
      <p>{message}</p>
    </div>
  );
}
