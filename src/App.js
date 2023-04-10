import "./App.css";
import { Routes, Rout, Link, Route, Outlet } from "react-router";
import Chat from "./Chat/Chat";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div classNameName="wrapper">
          <div className="Forms">
            <div className="FormBlock">
              <form action="" className="Form">
                <label for="name" className="LabelName">
                  Введіть своє ім'я
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="name"
                  placeholder="Ім'я"
                />
                <label for="surname" className="LabelSurname">
                  Введіть своє прізвище
                </label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  className="surname"
                  placeholder="Прізвище"
                />
                <label for="username" className="LabelUserName">
                  Придумайте @username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="username"
                  placeholder="@username"
                />
                <label for="phone" className="LabelPhone">
                  Введіть свій номер телефону
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="phone"
                  placeholder="Номер телефону"
                />
                <label for="password" className="LabelPassword">
                  Придумайте пароль
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="password"
                  placeholder="Пароль"
                />
                <a href="/chats">Зареєструватися</a>
              </form>
            </div>

            <div className="BlockLoginForm">
              <form action="" className="LoginForm">
                <label for="username" className="LabelUserName">
                  Введіть свій @username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="username"
                  placeholder="@username"
                />
                <label for="password" className="LabelPassword">
                  Введіть свій пароль
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="password"
                  placeholder="Пароль"
                />
                <a href="/chats">Увійти</a>
              </form>
            </div>
          </div>
          <Routes>
            <Route path="/chats" element={<Chat />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
