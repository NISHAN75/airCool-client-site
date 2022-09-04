import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Component/Pages/Shared/Loading';
import useAdmin from './useAdmin';
import useAuth from './useAuth';





const RequireAdmin = ({children}) => {
  const [auth] =useAuth()
  const [user,loading] =useAuthState(auth);
  const [admin , adminLoading] =useAdmin(user)
  const location = useLocation()
  if(loading || adminLoading){
    return <Loading></Loading>
  }
  
  if(!user ||  !admin){
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
  }
  return  children;
};

export default RequireAdmin;