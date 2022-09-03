import React from 'react';
import {CognitoUserPool} from 'amazon-cognito-identity-js';
const {
    REACT_APP_CLIENT_ID,
    REACT_APP_USER_POOL_ID,
  } = process.env;

const poolData = {
    UserPoolId:REACT_APP_USER_POOL_ID,
    ClientId:REACT_APP_CLIENT_ID
} 
 
export default new CognitoUserPool(poolData);