import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Style.css";
import { useAlert } from "react-bootstrap-hooks-alert";

const URL = "https://back-end-car-rental-production.up.railway.app";

const Login = () => {
  //   const [token, setToken] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { warning, success } = useAlert();
  useEffect(() => {});

  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    if (form.name === null || form.name === "") {
      warning("Check Nama");
    }

    if (form.email === null || form.email === "") {
      warning("Check Email");
    }

    if (form.password === null || form.password === "") {
      warning("Check Password");
    }

    if (form.name != null && form.email != null && form.password != null) {
      doRegisterUser(form);
    }
    event.preventDefault();
  };

  async function doRegisterUser(form) {
    const user = await axios
      .post(`${URL}/api/users/register`, form)
      .catch((error) => {
        if (error.response) {
          warning("Email telah terdaftar");
        }
      });
    if (user.data.message === "User created!") {
      var delayInMilliseconds = 1000;
      success("Berhasil Mendaftar");
      setTimeout(function () {
        navigate("/login");
      }, delayInMilliseconds);
    }
  }

  const handleSetForm = (type, event) => {
    if (type === "name") {
      setForm({
        name: event.target.value,
      });
    }
    if (type === "email") {
      setForm((prevState) => ({
        ...prevState,
        email: event.target.value,
      }));
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
              <h1 className="font-24 my-4">Sign Up</h1>
            </div>
            <form onSubmit={(event) => handleSubmitForm(event)}>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="john Dee"
                  id="name"
                  aria-describedby="name"
                  required
                  onChange={(event) => handleSetForm("name", event)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="johndee@gmail.com"
                  id="email"
                  aria-describedby="email"
                  required
                  onChange={(event) => handleSetForm("email", event)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="6+ karakter"
                  id="password"
                  required
                  onChange={(event) => handleSetForm("password", event)}
                />
              </div>
              <button
                type="submit"
                className="btn bg-primaryDarkBlue w-100 btn-sign"
              >
                SignUp
              </button>
            </form>
            <div className="text-sm-start text-center mt-4">
              <p className="font-16">
                Already have an account? <Link to="/login"> Sign In here</Link>
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
