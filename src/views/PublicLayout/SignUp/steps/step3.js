import React, { useState, useEffect } from "react";
import { Button, Card, FormCheck, Image } from "react-bootstrap";
import IconUser2 from "../../../../assets/iconUser2.png";
import "../index.css";

const Step3 = () => {
  return (
    <>
      <div>
      <p className='text-success-step'>¡TU CUENTA HA SIDO CREADA!</p>
        <div className="img-box-success-step">
          <Image src={IconUser2} />
        </div>
      </div>
    </>
  );
};

export default Step3;
