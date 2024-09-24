import React, { useState, useEffect } from 'react';
import FlechaIzquierda from "../../../public/FlechaIzquierda.png"
import "./login.css"

const LoginPage = () => {


  return (
    <>
      <main className='containerLogin'>
        <section className='containerLoginSonOne'>
          <form className='FormLoginSonOne'>
            <section>
              <h1>login</h1>
              <p>Ingrese los detalles de su cuenta</p>
            </section>
            <section className='FormLoginSonOneblock'>

              <div className="FormLoginSonOneblockOne">
                <label>
                  <input 
                    className="input" type="text" placeholder="Usuario"  required></input>
                    <hr />
                  <i className="bx bxs-user" />
                </label>
              </div>
  
              <div className="FormLoginSonOneblockTwo">
                <label>
                  <input 
                    className="input" type="password" placeholder="Contraseña" required></input>
                    <hr />
                  <i className="bx bxs-lock-alt" />
                </label>
              </div>

            </section>
            <button className='FormLoginSonOneButton' type="submit">
              <img src={FlechaIzquierda} alt="LogoIngresar" width="20px" />
              <div className='vacio'></div>
              <p>Entrar</p>
            </button>
          </form>
        </section>
        <section className='containerLoginSonTwo'></section>
      </main>
    </>
  );
};

export default LoginPage;