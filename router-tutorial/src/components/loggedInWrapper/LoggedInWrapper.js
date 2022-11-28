import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import MyNav from "../navbar/Navbar";

export default function LoggedInWrapper(){
    const {isLoggedIn} = useContext(AuthContext);
    return(
        isLoggedIn ?  <>
        <MyNav />
        <Outlet />
        </> :
        <Navigate to='/login' replace={true}></Navigate>
       
    )
}