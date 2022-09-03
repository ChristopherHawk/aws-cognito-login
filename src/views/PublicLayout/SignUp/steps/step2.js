import React, { useState, useEffect, useContext } from "react";
import { Button, Card, FormCheck, Image } from "react-bootstrap";
import UserPool from "../../../../config/userPool";

import "../index.css";

const Step2 = ({ setStepNumber, stepNumber, formData, setFormData }) => {
  const [alerts, setAlerts] = useState({
    hidden: true,
    class: "alert alert-warning",
    message: "",
    type: "error",
  });


  // [Request Cognito Function]
  const onSubmitSignUp = (e) => {
    e.preventDefault();
    UserPool.signUp(
      formData.name,
      formData.password,
      [
        {
          Name: "phone_number",
          Value: formData.prefix + formData.phone,
        },
      ],
      null,
      (err, data) => {
        if (err) {
          setAlerts({ ...alerts, hidden: false, message: err.message });
        } else {
          setStepNumber(stepNumber + 1);
        }
      }
    );
  };
  const disabled =
    !formData.check1 ||
    !formData.check2 ||
    formData.password !== formData.confirm_password ||
    formData.password === "" ||
    formData.confirm_password === "";

  useEffect(() => {
    if(alerts.hidden === false){
      setTimeout(() => {
          setAlerts({...alerts, hidden:true})
      }, 3000);
    }
  }, [alerts]);

  return (
    <>
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
      <div>
        <input
          className="input-app"
          placeholder="Usuario"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <input
          className="input-app"
          placeholder="Teléfono"
          maxLength="10"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
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
        <input
        value={formData.confirm_password}
          className="input-app"
          type="password"
          placeholder="Repetir Contraseña"
          onChange={(e) => {
            setFormData({ ...formData, confirm_password: e.target.value });
          }}
        />
        <br />
        <br />
        <p className="text-sign-up2">ó ingresa con</p>
        <Button className="button-app" id="btn-step">
          Iniciar sesión con Google
        </Button>
        <Button className="button-app" id="btn-step">
          Iniciar sesión con Facebook
        </Button>
        <Button className="button-app" id="btn-step">
          Iniciar sesión con Twitch
        </Button>
        <br />
        <br />
        <div className="check-div">
          <FormCheck
          checked={formData.check1}
            onChange={(e) => {
              setFormData({ ...formData, check1: e.target.checked });
            }}
            id="check-step"
          />
          <p className="text-step-2">
            Acepto las condiciones de uso y políticas de privacidad Acepto el
            envío de comunicaciones comerciales
          </p>
        </div>
        <div className="check-div">
          <FormCheck
          checked={formData.check2}
            onChange={(e) => {
              setFormData({ ...formData, check2: e.target.checked });
            }}
            id="check-step"
          />
          <p className="text-step-2">
            Acepto el envío de comunicaciones comerciales
          </p>
        </div>
        <br />
        <br />
        <Button
          disabled={disabled}
          onClick={onSubmitSignUp}
          className="button-app"
          id="btn-step-3"
        >
          CREAR
        </Button>
      </div>
    </>
  );
};

export default Step2;
