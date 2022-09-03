import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";


const PrincipalView = () => {
  const goTo = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){goTo('/home')}
  }, []);

  return (
    <div className="view-container">
      <div className="btn-box">
        <Button onClick={() => goTo("/login")} className="button-app" id="btn1">
          INICIAR SESIÓN
        </Button>
        <Button
          onClick={() => goTo("/sign-up")}
          className="button-app"
          id="btn2"
        >
          REGISTRARSE
        </Button>
      </div>
    </div>
  );
};

export default PrincipalView;
