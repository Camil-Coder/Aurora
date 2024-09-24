import "../../css/explorer.css";

const Banner = () => {
    return (
        <>
            <div className="ExplorerContainer">
                <div className="UsuarioContainer">
                    <div className="Tittle">AURORA</div>

                    <hr className="Divider" />
                    <div className="menu-item">
                        <i className="icon">👤</i> {/* Reemplaza "��" con un icono válido o símbolo */}
                        <div className="UserContDatos">
                            <span className="TextDesc">Administrador</span>
                            <span className="TextName">David Felipe Ramirez Martin</span>
                        </div>
                    </div>

                    <hr className="Divider" />

                    <div className="menu-item">
                        <i className="bi bi-people" id="settings-icon"></i>
                        <span className="TextLight">Área</span>
                    </div>

                    <div className="menu-item">
                        <i className="bi bi-folder" id="settings-icon"></i>
                        <span className="TextLight">Proyectos</span>
                    </div>

                    <div className="menu-item">
                        <i className="bi bi-bar-chart-steps" id="settings-icon"></i>
                        <span className="TextLight">Control</span>
                    </div>

                    <div className="menu-item">
                        <i className="bi bi-file-earmark-text" id="settings-icon"></i>
                        <span className="TextLight">Documentos</span>
                    </div>

                    <div className="menu-item">
                        <i className="bi bi-archive" id="settings-icon"></i>
                        <span className="TextLight">Base de Conocimiento</span>
                    </div>
                </div>

                <div className="OptionsContainer">
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
                </div>
            </div>
        </>
    );
};

export default Banner;
