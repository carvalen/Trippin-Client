import React, { useState, useEffect } from "react";
import Navbar from "../../components/Common/Navbar";
import { updateList, deleteList, createList } from "../../service/list.service";
import { getUser } from "../../service/auth.service";
import ListForm from "../List/ListForm";
import CreateListForm from "../List/CreateListForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Footer from "../../components/Common/Footer";
import "./Profile.css";

function Profile() {
  const [userState, setUserState] = useState({});
  const [editToggle, setEditToggle] = useState({ listId: "", status: false });
  const getUserInfo = async () => {
    const { data: user } = await getUser();
    setUserState(user);
  };
  const [createToggle, setCreateToggle] = useState(false);

  const getUserInfoCreate = async () => {
    const { data: user } = await getUser();
    setUserState(user);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const toggleEdit = (listId) => {
    setEditToggle({ listId, status: !editToggle.status });
  };
  const handleEdit = async (listId, updatedItems) => {
    let updatedList = userState.lists.find((list) => list._id === listId);
    updatedList = { ...updatedList, items: updatedItems };
    const { data } = await updateList(listId, updatedList);
    getUserInfo();
  };
  const handleDelete = async (listId) => {
    await deleteList(listId);
    const filteredUserLists = userState.lists.filter(
      (list) => list._id !== listId
    );
    setUserState({ ...userState, lists: filteredUserLists });
  };

  const toggleCreate = () => {
    setCreateToggle(!createToggle);
  };
  const handleCreate = async (newList) => {
    const list = { ...newList, items: newList.items.split(",") };

    const { data } = await createList(list);
    setUserState({ ...userState, lists: [...userState.lists, data] });
  };

  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="container-profile">
      <h2>Bienvenido a tu perfil {userState.username}</h2>
      <p>Estas son tus listas de cosas para llevar a tu próximo viaje:</p>

      {createToggle && (
        <CreateListForm onSubmit={handleCreate} toggleCreate={toggleCreate} />
      )}
      <div>
        ¿Te gustaría crear tu propia lista?
        <button onClick={() => toggleCreate()}>Crear</button>
      </div>

      <div>
        {userState.lists &&
          userState.lists.map((list) =>
            editToggle.listId === list._id && editToggle.status ? (
              <ListForm
                onSubmit={handleEdit}
                listInfo={list}
                toggleEdit={toggleEdit}
              />
            ) : (
              <div key={list._id}>
                <div>
                  <p>Viaje de tipo: {list.type}</p>
                  <p>Duración: {list.days} días</p>

                  <ul>
                    {list.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button onClick={() => toggleEdit(list._id)}>Editar</button>
                <button onClick={() => handleDelete(list._id)}>Eliminar</button>
                <div className="container">
                  <CopyToClipboard
                    text={`
    Type: ${list.type}
    Days: ${list.days}
    Items: ${list.items}
  `}
                    onCopy={onCopyText}
                  >
                    <div className="copy-area">
                      <button>Copiar</button>
                      <span
                        className={`copy-feedback ${isCopied ? "active" : ""}`}
                      >
                        {isCopied && "Copiado!"}
                      </span>
                    </div>
                  </CopyToClipboard>
                </div>
                <div align="center">
                  <hr />
                </div>
              </div>
            )
          )}
      </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
