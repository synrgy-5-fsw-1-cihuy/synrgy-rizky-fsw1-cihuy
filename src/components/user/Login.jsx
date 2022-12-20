import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Style.css";
import { useAlert } from "react-bootstrap-hooks-alert";

const URL = "https://back-end-car-rental-production.up.railway.app";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { warning } = useAlert();
  useEffect(() => {});

  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    if (form.email === null || form.email === "") {
      warning("Check Email");
    }

    if (form.password === null || form.password === "") {
      warning("Check Password");
    }

    if (form.email != null && form.password != null) {
      doLoginUser(form);
    }
    event.preventDefault();
  };

  async function doLoginUser(form) {
    const user = await axios
      .post(`${URL}/api/users/login`, form)
      .catch((error) => {
        if (error.response.data.error === "Password Salah. Please try again!") {
          warning("Password Salah");
          navigate("/login");
        }
        if (error.response.data.error === "User not found. Please register!") {
          warning("Email tidak terdaftar");
          navigate("/login");
        }
      });

    if (user != null) {
      localStorage.setItem("AUTH_TOKEN", user.data.data.token);
      localStorage.setItem("ROLE", user.data.data.role);
      localStorage.setItem("Name", user.data.data.name);
      if (user.data.data.role === "superadmin") {
        navigate("/admin");
      } else if (user.data.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/cars");
      }
    }
  }

  const handleSetForm = (type, event) => {
    if (type === "email") {
      setForm({
        email: event.target.value,
      });
    }

    if (type === "password") {
      setForm((prevState) => ({
        ...prevState,
        password: event.target.value,
      }));
    }
  };

  return (
    <>
      <div className="d-lg-flex mt-5 mt-lg-0 pt-5 pt-lg-0 px-4 px-lg-0">
        <div className="d-flex justify-content-center mx-auto my-auto">
          <div style={{ width: "400px" }}>
            <div>
              <a className="navbar-brand logo fs-4" href="/">
                Binar<span>Car</span>
              </a>
            </div>
            <div>
              <h1 className="font-24 my-4">Welcom Back!</h1>
            </div>
            <form onSubmit={(event) => handleSubmitForm(event)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="johndee@gmail.com"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(event) => handleSetForm("email", event)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="6+ karakter"
                  id="exampleInputPassword1"
                  onChange={(event) => handleSetForm("password", event)}
                />
              </div>
              <button
                type="submit"
                className="btn bg-primaryDarkBlue w-100 btn-sign"
              >
                Sign In
              </button>
            </form>
            <div className="text-sm-center text-start mt-4">
              <p className="font-16">
                Don't have an account?{" "}
                <Link to="/register">Sign Up for free</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-50 primaryDarkBlue d-flex justify-content-end hidden-sm">
          <div className="mt-5 pt-4">
            <div className="text-end">
              <img
                className="img-fluid"
                style={{ width: "75%" }}
                src="https://ik.imagekit.io/insch/image_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671469600075"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
