import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const ProtectedRoute = ({children}) => {
    const Navigate=useNavigate();
    const {user} = UserAuth();
if(!user){
    return <Navigate to='/'/>
}
else {
    return children;
}


}

export default ProtectedRoute