import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function AuthRoute(props){
  const { user } = useContext(AuthContext);

  
  return (
    user ? <Navigate to={props.ifNotAuth} /> : props.component
  );
}

export default AuthRoute;