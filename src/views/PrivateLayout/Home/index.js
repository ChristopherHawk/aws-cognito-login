import React, { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import IconUser from "../../../assets/iconUser.png";
import AWS from "aws-sdk";
import "./index.css";
import { useNavigate } from "react-router-dom";
const {
  REACT_APP_SECRET_ACCESS_KEY,
  REACT_APP_ACCESS_KEY_ID,
  REACT_APP_REGION,
  REACT_APP_USER_POOL_ID,
} = process.env;

const Home = () => {
  //Hook
  const goTo = useNavigate();
  // States
  const [users, setUsers] = useState();
  const [menuStep, setMenuStep] = useState({
    btn1: "icon-active",
    btn2: "icon-inactive",
    btn3: "icon-inactive",
    btn4: "icon-inactive",
    btn5: "icon-inactive",
  });
  const getUser = () => {
    new Promise((resolve, reject) => {
      AWS.config.update({
        region: REACT_APP_REGION,
        accessKeyId: REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
      });
      var cognitoidentityserviceprovider =
        new AWS.CognitoIdentityServiceProvider();
      cognitoidentityserviceprovider.listUsers(
        { UserPoolId: REACT_APP_USER_POOL_ID },
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            setUsers(data.Users);
          }
        }
      );
    });
  };

  const logout = () => {
    localStorage.clear();
    goTo("/");
  };

  useEffect(async () => {
    await getUser();
  }, [menuStep]);

  if (!users) return "loading";
  return (
    <div className="home-div">
      <div className="bar-top"></div>
      <p className="title-user-list">Jugadores destacados</p>
      {users.map((item, key) => (
        <div key={key} className="user-list-box">
          <Image className="user-avatar" src={IconUser} />
          <div>
            <p className="user-info">
              {item.Username}
              <br />
              novato IV
            </p>
          </div>
          <button className="btn-follow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              style={{ marginRight: "5px", marginTop: -3 }}
              fill="currentColor"
              className="bi bi-person-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fill-rule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            Seguir
          </button>
        </div>
      ))}
      <div className="bottom-menu">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              onClick={() =>
                setMenuStep({
                  btn1: "icon-active",
                  btn2: "icon-inactive",
                  btn3: "icon-inactive",
                  btn4: "icon-inactive",
                  btn5: "icon-inactive",
                })
              }
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id={menuStep.btn1}
                fill="currentColor"
                className="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() =>
                setMenuStep({
                  btn1: "icon-inactive",
                  btn2: "icon-active",
                  btn3: "icon-inactive",
                  btn4: "icon-inactive",
                  btn5: "icon-inactive",
                })
              }
              className="nav-link"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id={menuStep.btn2}
                fill="currentColor"
                className="bi bi-trophy"
                viewBox="0 0 16 16"
              >
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
              </svg>
            </a>
          </li>
          <li
            onClick={() =>
              setMenuStep({
                btn1: "icon-inactive",
                btn2: "icon-inactive",
                btn3: "icon-active",
                btn4: "icon-inactive",
                btn5: "icon-inactive",
              })
            }
            className="nav-item"
          >
            <a className="nav-link" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id={menuStep.btn3}
                fill="currentColor"
                className="bi bi-plus-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() =>
                setMenuStep({
                  btn1: "icon-inactive",
                  btn2: "icon-inactive",
                  btn3: "icon-inactive",
                  btn4: "icon-active",
                  btn5: "icon-inactive",
                })
              }
              className="nav-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id={menuStep.btn4}
                fill="currentColor"
                className="bi bi-controller"
                viewBox="0 0 16 16"
              >
                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() =>
                setMenuStep({
                  btn1: "icon-inactive",
                  btn2: "icon-inactive",
                  btn3: "icon-inactive",
                  btn4: "icon-inactive",
                  btn5: "icon-active",
                })
              }
              className="nav-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id={menuStep.btn5}
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="btn-box">
        <Button onClick={logout} className="button-app">
          CERRAR SESION
        </Button>
      </div>
    </div>
  );
};

export default Home;
