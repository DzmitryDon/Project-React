import { useState } from "react";
import { getUser } from "../Requests";

/* function useUser(Id) {
  const [compId, setCompId] = useState(undefined);
  const { setIsLoading } = useContext(LoadingContext);
  const comp = useCurrentComp(Id);
  const load = useLoad();
  
} */

export const HeaderUser = () => {
  const [showForm, setFormStatus] = useState(false);
  const [password, getFormPassword] = useState("");
  const [login, getFormLogin] = useState("");

  const handleLogin = () => setFormStatus(true);

  const handleLoginSubmit = async () => {
    const isUser = await getUser(login, password);
    console.log(isUser);
  };
  // console.log(login);
  return (
    <div className="header-user">
      <div className="header-user-text">Список дел </div>
      <button className="header-user-user" onClick={handleLogin}>
        Login
      </button>
      {showForm && (
        <form className="header-login">
          <input
            className="header-input"
            type="text"
            value={password}
            placeholder="Пароль"
            onChange={(e) => {
              getFormPassword(e.target.value);
            }}
          />

          <input
            className="header-input"
            type="text"
            value={login}
            placeholder="Логин"
            onChange={(e) => {
              getFormLogin(e.target.value);
            }}
          />
          <button
            className="header-submit"
            type="submit"
            onClick={handleLoginSubmit}
          >
            Подтверждаю
          </button>
        </form>
      )}
    </div>
  );
};
