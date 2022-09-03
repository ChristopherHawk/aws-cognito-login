import React, { useState, useEffect, useContext } from "react";
import { Button, FormCheck } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";

const SignUp = () => {
  //Hook navigation
  const goTo = useNavigate();


  const [stepNumber, setStepNumber] = useState(1);
  const [stepClass, setStepClass] = useState({
    step1: "step-card",
    step2: "step-card-inactive",
    step3: "step-card-inactive",
    step4: "step-card-inactive",
  });
  //Form data 
  const [formData, setFormData] = useState({
    name:'',
    password:'',
    confirm_password:'',
    check1:false,
    check2:false,
    prefix:'+57',
    phone:''
  })
    // Verification code
    const [numberValue, setNumberValue] = useState({
      input1: null,
      input2: null,
      input3: null,
      input4: null,
    });
  //step sign up
  const changeStepStatus = () => {
    if (stepNumber === 2) {
      setStepClass({
        step1: "step-card-inactive",
        step2: "step-card",
        step3: "step-card-inactive",
        step4: "step-card-inactive",
      });
    }
    if (stepNumber === 3) {
      setStepClass({
        step1: "step-card-inactive",
        step2: "step-card-inactive",
        step3: "step-card",
        step4: "step-card-inactive",
      });
    }
    if (stepNumber === 4) {
      setStepClass({
        step1: "step-card-inactive",
        step2: "step-card-inactive",
        step3: "step-card-inactive",
        step4: "step-card",
      });
    }
  };

  // redirect on submit
  const submitFunction = () => {
    if (stepNumber <= 4) {
      setStepNumber(stepNumber + 1);
    }
    if (stepNumber === 4) {
      goTo("/home");
    }
  };

  useEffect(() => {
    if(localStorage.getItem('token')){goTo('/home')}
    changeStepStatus();
  }, [stepNumber, formData]);

  return (
    <div className="container-success">
      <div className="card-success">
        <div className="step-box">
          <div className={stepClass.step1}>1</div>
          <div className={stepClass.step2}>2</div>
          <div className={stepClass.step3}>3</div>
          <div className={stepClass.step4}>4</div>
        </div>
        <br />
        <br />
        {stepNumber === 1 && <Step1 formData={formData} setFormData={setFormData} />}
        {/* register */}
        {stepNumber === 2 && <Step2 formData={formData} setFormData={setFormData} setStepNumber={setStepNumber} stepNumber={stepNumber} />}
        {stepNumber === 3 && <Step3 />}
        {stepNumber === 4 && <Step4  numberValue={numberValue} setNumberValue={setNumberValue} />}

        {stepNumber !== 2 && (
          <Button
            onClick={submitFunction}
            className="button-app"
            id="btn-step-4"
            disabled={formData.phone === ''}
          >
            {stepNumber === 1 ? "CONTINUAR" : "COMPLETA PERFIL"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SignUp;
