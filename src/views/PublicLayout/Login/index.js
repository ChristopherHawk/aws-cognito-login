import React, { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import IconUser from "../../../assets/iconUser.png";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import "./index.css";
import UserPool from "../../../config/userPool";
import { useNavigate } from "react-router-dom";


const Login = () => {
  // Navigation hook
  const goTo = useNavigate();
  // State Hook
  const [alerts, setAlerts] = useState({
    hidden: true,
    class: "alert alert-warning",
    message: "",
    type: "error",
  });

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    if(localStorage.getItem('token')){goTo('/home')}
    if (alerts.hidden === false) {
      setTimeout(() => {
        setAlerts({ ...alerts, hidden: true });
      }, 3000);
    }
  }, [formData, alerts]);

  const loginFunction = async () => {
    const user = new CognitoUser({
      Username: formData.name,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: formData.name,
      Password: formData.password,
    });
    await user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        localStorage.setItem('token', data.accessToken.jwtToken);
        goTo('/home')
      },
      onFailure: (err) => {
        setAlerts({ ...alerts, hidden: false, message: err.message });
      }
    });
  };

  return (
    <div className="container-login">
      <div className="card-login">
        {!alerts.hidden && (
          <div className={alerts.class} role="alert">
            <svg
              style={{ color: "red" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-exclamation-diamond-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            {alerts.message}
          </div>
        )}
        <div className="img-box">
          <Image src={IconUser} />
        </div>
        <div className="input-box">
          <input
            value={formData.name}
            className="input-app"
            placeholder="Usuario"
            id="input1"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <input
            value={formData.password}
            className="input-app"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </div>
        <div>
          <p className="text-login-1">¿Olvidaste tu contraseña?</p>
          <p className="text-login-2">
            Aun no tienes cuenta, <b className="link" onClick={()=>goTo('/sign-up')}>Registrate.</b>
          </p>
          <Button
            disabled={!formData.name || !formData.password}
            onClick={loginFunction}
            className="button-app"
            id="btn-login"
          >
            INICIAR SESIÓN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
