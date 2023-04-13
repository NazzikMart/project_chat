import "./App.css";
import { Routes, Rout, Route, Outlet } from "react-router";
import Chat from "./Chat/Chat";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isToogle, setIsToogle] = useState(true);

  if (isToogle === true) {
    return (
      <>
        <BrowserRouter>
          <div className="main">
            <section className="signup">
              <div className="container">
                <div className="signup-content">
                  <div className="signup-form">
                    <h2 className="form-title">Реєстрація</h2>
                    <form
                      method="POST"
                      className="register-form"
                      id="register-form"
                    >
                      <div className="form-group">
                        <label for="name">
                          <i className="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Ваше ім'я"
                        />
                      </div>
                      <div className="form-group">
                        <label for="email">
                          <i className="zmdi zmdi-email"></i>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Ваша електрона адреса"
                        />
                      </div>
                      <div className="form-group">
                        <label for="pass">
                          <i className="zmdi zmdi-lock"></i>
                        </label>
                        <input
                          type="password"
                          name="pass"
                          id="pass"
                          placeholder="Пароль"
                        />
                      </div>
                      <div className="form-group">
                        <label for="re-pass">
                          <i className="zmdi zmdi-lock-outline"></i>
                        </label>
                        <input
                          type="password"
                          name="re_pass"
                          id="re_pass"
                          placeholder="Повторіть пароль"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="checkbox"
                          name="agree-term"
                          id="agree-term"
                          className="agree-term"
                        />
                        <label for="agree-term" className="label-agree-term">
                          <span>
                            <span></span>
                          </span>
                          Я погоджуюся з усіма положеннями Умов використання
                          <a href="#" className="term-service"></a>
                        </label>
                      </div>
                      <div className="form-group form-button">
                        <Link
                          onClick={() => setIsToogle(!isToogle)}
                          to="/register"
                          name="signup"
                          id="signup"
                          className="form-submit"
                        >
                          Зареєструватися
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="signup-image">
                    <figure>
                      <img src="images/signup-image.jpg" alt="sing up image" />
                    </figure>
                    <a href="#" className="signup-image-link">
                      Я вже учасник
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="sign-in">
              <div className="container">
                <div className="signin-content">
                  <div className="signin-image">
                    <figure>
                      <img src="images/signin-image.jpg" alt="sing up image" />
                    </figure>
                    <a href="#" className="signup-image-link">
                      Створити аккаунт
                    </a>
                  </div>

                  <div className="signin-form">
                    <h2 className="form-title">Увійти</h2>
                    <form
                      method="POST"
                      className="register-form"
                      id="login-form"
                    >
                      <div className="form-group">
                        <label for="your_name">
                          <i className="zmdi zmdi-account material-icons-name"></i>
                        </label>
                        <input
                          type="text"
                          name="your_name"
                          id="your_name"
                          placeholder="Твоє ім'я"
                        />
                      </div>
                      <div className="form-group">
                        <label for="your_pass">
                          <i className="zmdi zmdi-lock"></i>
                        </label>
                        <input
                          type="password"
                          name="your_pass"
                          id="your_pass"
                          placeholder="Пароль"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="checkbox"
                          name="remember-me"
                          id="remember-me"
                          className="agree-term"
                        />
                        <label for="remember-me" className="label-agree-term">
                          <span>
                            <span></span>
                          </span>
                          Пам'ятай мене
                        </label>
                      </div>
                      <div className="form-group form-button">
                        <Link
                          onClick={() => setIsToogle(!isToogle)}
                          to="/login"
                          name="signin"
                          id="signin"
                          className="form-submit"
                          value="Авторизуватися"
                        >
                          {" "}
                          Авторизуватися
                        </Link>
                      </div>
                    </form>
                    <div className="social-login">
                      <span className="social-label">
                        Або увійдіть за допомогою
                      </span>
                      <ul className="socials">
                        <li>
                          <a href="#">
                            <i className="display-flex-center zmdi zmdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="display-flex-center zmdi zmdi-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="display-flex-center zmdi zmdi-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Routes>
              <Route path="/register" element={<Chat />} />
              <Route path="/login" element={<Chat />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <div>
        <Chat />
      </div>
    );
  }
}

export default App;
