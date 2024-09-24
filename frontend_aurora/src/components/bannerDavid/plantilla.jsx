import "../../css/explorer.css";
import { useAuth } from "../../auth/authContext.jsx";
import { useNavigate } from "react-router-dom";
import Banner from "./banner.jsx";


const PlantillaDavid = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");  // Redirige a la página de login
    };

    return (
        <>
            <Banner></Banner>
        </>
/*         <div className="MainContainer">
           
        </div> */
    );
};

export default PlantillaDavid;
