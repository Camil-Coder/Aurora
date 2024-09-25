import "../../css/plantilla.css";
import { useAuth } from "../../auth/authContext.jsx";
import { useNavigate } from "react-router-dom";
import Avatar from "../../img/avatar.png"
import Personas from "../../img/area2.png"



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
                            <img src={Personas} alt="" height={'25px'} />
                            <div></div>
                            <span>Area</span>
                            <span className="material-symbols-outlined">
                                keyboard_arrow_up
                            </span>
                        </div>
                    </button>
                </article>


            </aside>
        </>
    );
};

export default PlantillaDavid;
{/*                 <div >
                    <hr className="Divider" />
                    <div className="menu-item">
                        <i className="bi bi-gear" id="settings-icon"></i>
                        <div className="TextLight">Ajustes</div>
                    </div>
                    <div className="menu-item">
                        <i className="bi bi-moon" id="settings-icon"></i>
                        <div className="TextLight">Tema Oscuro</div>
                        <label className="switch">
                            <input type="checkbox" id="toggleSwitch" />
                            <span className="slider"></span>
                        </label>
                    </div>

                    <hr className="Divider" />
                    <div className="menu-item">
                        <i className="bi bi-question-circle" id="settings-icon"></i>
                        <div className="TextLight">Ayuda</div>
                    </div>
                    <div className="menu-item">
                        <i className="bi bi-box-arrow-left" id="settings-ExitIcon"></i>
                        <div className="TextExit">Cerrar Sesión</div>
                    </div>
                </div> */}