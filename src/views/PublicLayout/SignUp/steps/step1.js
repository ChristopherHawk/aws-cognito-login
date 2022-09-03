import React, { useState, useEffect } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import IconCell from "../../../../assets/iconCell.png";
import "../index.css";

const Step1 = ({formData, setFormData}) => {

 const goTo =  useNavigate()
  return (
      <>
        <Image className="img-sign-up" src={IconCell} />
        <p className="text-sign-up">
          Ingresa tu número de celular para continuar
        </p>

        <div className="input-number-box">
          <select className="form-select">
            <option defaultValue="1">COL</option>
            <option defaultValue="2">VE</option>
            <option defaultValue="3">AR</option>
          </select>
          <select onChange={(e) => {
              setFormData({ ...formData, prefix: e.target.value });
            }} className="form-select">
            <option defaultValue="+57">+57</option>
            <option defaultValue="+52">+52</option>
            <option defaultValue="+55">+55</option>
          </select>
          <input
            className="input-app"
            placeholder="Inserte un número de celular"
            id="inputSignUp1"
            maxLength="10"
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
        </div>
        <div>
          <p className="text-sign-up2">¿Ya tienes cuenta?</p>
          <p className="text-sign-up3" onClick={() => goTo('/login')} >
            Iniciar sesión con usuario y contraseña
          </p>

      </div>
    </>
  );
};

export default Step1;
