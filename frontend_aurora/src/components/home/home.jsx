import Banner from "../bannerDavid/banner";
import { useState } from "react";
import Usuarios from "../usuarios/usuarios";
import Areas from "../areas/areas";
import Roles from "../roles/roles";

const Home = () => {
    const [showContainer, setShowContainer] = useState(false);
    const [opcion, setOpcion] = useState('');

    const handleOptionSelect = (option) => {
        setShowContainer(true);
        setOpcion(option);
    };

    const renderComponent = () => {
        switch (opcion) {
            case 'Usuarios':
                return <Usuarios />;
            case 'Areas':
                return <Areas />;
            case 'Roles':
                return <Roles />;
            default:
                return <p>Seleccione una opción del menú</p>; 
        }
    };

    return (
        <>
            <Banner onOptionSelect={handleOptionSelect} />
            <main>
                {showContainer ? renderComponent() : <p>Elige una opción para mostrar el contenido</p>}
            </main>
        </>
    );
};

export default Home;
