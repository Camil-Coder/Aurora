import Banner from "../bannerDavid/banner";
import { useState } from "react";


const Home = () => {
    const [showContainer, setShowContainer] = useState(false);

    const handleShowContainer = () => {
        setShowContainer(true);
    };

    return (
        <>
            <BotonBanner
                icon="menu"
                texto="Opciones"
                opciones={['Usuarios', 'Proyectos', 'Tareas']}
                onOptionSelect={handleOptionSelect}
            />
        </>
    );
};


export default Home;