import React, { useState, useEffect, useRef } from "react";
import { Button, Card, FormCheck, Image } from "react-bootstrap";
import IconCellSms from "../../../../assets/iconCellSms.png";
import "../index.css";

const Step4 = ({setNumberValue, numberValue}) => {

  //Hook ref
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();



  useEffect(() => {
    if (input1.current.value.length === 0) { input1.current.focus()}
  }, [numberValue]);

  return (
    <>
      <div>
        <p className="text-success-step">¡TU CUENTA HA SIDO CREADA!</p>
        <div className="div-image">
          <Image className="image-step-4" src={IconCellSms} />
        </div>
        <div>
          <input
            ref={input1}
            className="input-app"
            placeholder=""
            id="input-sms"
            value={numberValue.input1}
            maxLength="1"
            type="number"
            onChange={(e) => {
              if (e.target.value.length < 2 ) {
                setNumberValue({ ...numberValue, input1: e.target.value });
                if(e.target.value.length > 0){
                  input2.current.focus()
                }
              }
            }}
          />
          <input
            ref={input2}
            className="input-app"
            placeholder=""
            id="input-sms"
            value={numberValue.input2}
            maxLength="1"
            type="number"
            onChange={(e) => {
              if (e.target.value.length === 0) { input1.current.focus()}
              if (e.target.value.length < 2 ) {
                setNumberValue({ ...numberValue, input2: e.target.value });
                if(e.target.value.length > 0){
                  input3.current.focus()
                }
              }
            }}
          />
          <input
            ref={input3}
            className="input-app"
            placeholder=""
            id="input-sms"
            value={numberValue.input3}
            maxLength="1"
            type="number"
            onChange={(e) => {
              if (e.target.value.length === 0) { input2.current.focus()}
              if (e.target.value.length < 2) {
                setNumberValue({ ...numberValue, input3: e.target.value });
                if(e.target.value.length > 0){
                  input4.current.focus()
                }
                
              }
            }}
          />
          <input
            ref={input4}
            className="input-app"
            placeholder=""
            id="input-sms"
            value={numberValue.input4}
            maxLength="1"
            type="number"
            onChange={(e) => {
              if (e.target.value.length === 0) { input3.current.focus()}
              if (e.target.value.length < 2) {
                setNumberValue({ ...numberValue, input4: e.target.value });
             
              }
             
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Step4;
