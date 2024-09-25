import "../../css/plantilla.css";
import { useAuth } from "../../auth/authContext.jsx";
import { useNavigate } from "react-router-dom";
import Avatar from "../../img/avatar.png"


const PlantillaDavid = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <>
            <aside className="ExplorerContainer">
                <article className="UsuarioContainer">

                    <section className="Tittle">AURORA</section>
                    <hr className="Divider" />
                    <section className="menu-item">
                        <div className="avatar"
                            style={{
                                backgroundImage: `url(${Avatar})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                        ></div>
                        <div className="UserContDatos">
                            <span className="TextDesc">Administrador</span>
                            <span className="TextName">Cristian Castillo</span>
                        </div>
                    </section>

                    <hr className="Divider" />
                </article>

                <article className="optionsContainer">

                    <button className="optionContainerBtn">
                        <div className="optionContainerBtnOne">
                            <span className="material-symbols-outlined">groups</span>
                            <div></div>
                            <span>Area</span>
                            <div className="arrow"><box-icon name='chevron-up' color='#ffff' ></box-icon></div>
                        </div>
                    </button>

                    <button className="optionContainerBtn">
                        <div className="optionContainerBtnOne">
                            <span className="material-symbols-outlined">folder</span>
                            <div></div>
                            <span>Proyectos</span>
                            <div className="arrow"><box-icon name='chevron-up' color='#ffff' ></box-icon></div>
                        </div>
                    </button>

                    <button className="optionContainerBtn">
                        <div className="optionContainerBtnOne">
                            <span className="material-symbols-outlined">monitoring</span>
                            <div></div>
                            <span>Control</span>
                            <div className="arrow"><box-icon name='chevron-up' color='#ffff' ></box-icon></div>
                        </div>
                    </button>

                    <button className="optionContainerBtn">
                        <div className="optionContainerBtnOne">
                            <span className="material-symbols-outlined">archive</span>
                            <div></div>
                            <span>Documentos</span>
                            <div className="arrow"><box-icon name='chevron-up' color='#ffff' ></box-icon></div>
                        </div>
                    </button>

                    <button className="optionContainerBtn">
                        <div className="optionContainerBtnOne">
                            <span className="material-symbols-outlined">language</span>
                            <div></div>
                            <span>Base de conocimiento</span>
                            <div className="arrow"><box-icon name='chevron-up' color='#ffff' ></box-icon></div>
                        </div>
                    </button>


                </article>

                <article className="settingsContainer">

                    <hr className="Divider" />
                    <br />

                    <button className="optionContainerBtn">
                        <div className="optionContainerBtnOne">
                            <span className="material-symbols-outlined">settings</span>
                            <div></div>
                            <span>Ajustes</span>
                        </div>
                    </button>

                    <button className="optionContainerBtn">
                        <div className="optionContainerBtnOne">
                            <span className="material-symbols-outlined">dark_mode</span>
                            <div></div>
                            <span>Tema Oscuro</span>
                            <label className="switch">
                                <input type="checkbox" id="toggleSwitch" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </button>

                    <br />
                    <hr className="Divider" />
                    <br />

                    <button className="optionContainerBtn">
                        <div className="optionContainerBtnOne">
                            <span className="material-symbols-outlined">help</span>
                            <div></div>
                            <span>Ayuda</span>
                        </div>
                    </button>

                    <button className="optionContainerBtn" id="logout" onClick={handleLogout}>
                        <div className="optionContainerBtnOne">
                            <span className="material-symbols-outlined">logout</span>
                            <div></div>
                            <span>Cerrar Sesion</span>
                        </div>
                    </button>



                </article>


            </aside>
        </>
    );
};

export default PlantillaDavid;