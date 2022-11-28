import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
        <div>Home page</div>
        <div>
            <Link to='/contact'>Take me to contact page</Link>
        </div>
        </>
    )
}