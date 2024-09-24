import React, { useState } from 'react';
import FlechaIzquierda from "../../img/FlechaIzquierda.png"
import LogoAmericas from "../../img/LogoAmericas.png"
import "../../css/login.css"

const LoginPage = () => {
  const [contra, setContra] = useState(false);

  const enmascararContra = () => {
    setContra(!contra);
  };

  return (
    <>
      <main className='containerLogin'>
        <article className='containerLoginSonOne'>
          <form className='FormLoginSonOne'>
            <section>
              <h1>Login</h1>
              <p>Ingrese los detalles de su cuenta</p>
            </section>
            <section className='FormLoginSonOneblock'>

              <div className="FormLoginSonOneblockOne">
                <label>
                  <input className="input" type="text" placeholder="Usuario" maxLength={20} required />
                  <hr />
                  <i className="bx bxs-user" />
                </label>
              </div>

              <div className="FormLoginSonOneblockTwo">
                <label>
                  <input className="input" type={contra ? "text" : "password"} placeholder="Contraseña"
                    maxLength={25} required />
                  <hr />
                  <i className={`bx ${contra ? 'bxs-show' : 'bxs-hide'}`} onClick={enmascararContra}
                    style={{
                      cursor: 'pointer', color: '#fff', position: 'absolute', right: '10px',
                      top: '50%', transform: 'translateY(-50%)'
                    }} />
                </label>
              </div>

            </section>
            <section className='FormLoginSonOneButton'>
              <button type="submit">
                <img src={FlechaIzquierda} alt="LogoIngresar" width="20px" />
                <div className='vacio'></div>
                <p>Entrar</p>
              </button>
            </section>

          </form>
        </article>
        <article className='containerLoginSonTwo'>
          <section className='LoginSonTwoName'>
            <div className='LoginSonTwoNameBox'>
              <h1>Bienvenido a AURORA</h1>
              <p>Inicia sesión para acceder a tu cuenta</p>
            </div>
          </section>
          <section className='LoginSonTwoLogo'>
            <img src={LogoAmericas} alt="LogoAmericasBps" width="800px" />
          </section>
        </article>
      </main>
    </>
  );
};

export default LoginPage;