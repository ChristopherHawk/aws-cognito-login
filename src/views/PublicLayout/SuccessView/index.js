import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import IconUser2 from "../../../assets/iconUser2.png";
import './index.css'

const SuccessView = () => {

    return(
        <div className='container-success'>
        <div className='card-success'>
            <p className='text-success'>Volver a empezar</p>
            <p className='text-success2'>¡TU PERFIL ESTÁ HECHO!</p>
        <div className="img-box-success">
          <Image src={IconUser2} />
        </div>
        <Button className="button-app" id="btn-login">
            FINALIZAR
          </Button>
        </div>
        </div>
    )
}

export default SuccessView