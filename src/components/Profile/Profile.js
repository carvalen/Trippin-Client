import React, { useState, useEffect } from "react";
import Navbar from "../../components/Common/Navbar";
import { updateList } from "../../service/list.service";
import { getUser } from "../../service/auth.service";
import { useLocation, useHistory } from "react-router-dom";

function Profile() {
  const [state, setState] = useState({});
  const getUserInfo = async () => {
    const { data: user } = await getUser();
    setState(user);
  };

  useEffect(() => {
    getUserInfo();
    console.log("username", state.lists);
  }, []);

  return (
    <>
      <Navbar />
      <h2>Bienvenido a tu perfil {state.username}</h2>
      <div>
        
        {state.lists &&
          state.lists.map((e) => {
            return (
              <div>
                <ul>
                  <p>{e.type}</p>
                  <p>{e.days}</p>
                  <li>
                    {e.items.map((item) => (
                      <p>{item}<button type="submit">Editar</button><button type="submit">Eliminar</button></p>
                    ))}
                  </li>
                </ul>
              </div>
            );
          })}
        
      </div>
    </>
  );
}

export default Profile;
//servicio get list. getuser. boton edit.
//Hacer un nuevo componente welcome para la pagina principaly sustituirlo en app.js.
