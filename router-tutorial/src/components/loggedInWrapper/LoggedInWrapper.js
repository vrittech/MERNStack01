import { Outlet } from "react-router-dom";
import MyNav from "../navbar/Navbar";

export default function LoggedInWrapper(){
    return(
        <>
        <MyNav />
        <Outlet />
        </>
    )
}