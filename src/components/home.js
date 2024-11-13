import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_background">
      <div className="px-4 py-5 my-5 text-center background_opacity">
        <span className="material-symbols-outlined">javascript</span>
        <span className="material-symbols-outlined">html</span>
        <span className="material-symbols-outlined">css</span>
        <h1 className="display-5 fw-bold text-body-emphasis">Example login page.</h1>
       
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 descriptive_text">
          "I have created a sample user login and registration page where user data is encrypted using bcrypt and stored in a PostgreSQL database. This page is built using React with the help of Bootstrap for styling."
          </p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center p-3">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4 gap-3 button_decoration"
              >
                Login
              </button>
            </Link>

            <Link to="/submit">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4 button_decoration"
              >
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
