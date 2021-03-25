// import React, {useState} from 'react';

// export default function CreateListForm({ onSubmit, listInfoCreate, toggleCreate }) {
//   const [ formState, setFormState ] = useState();
//   const handleChange = async (e) => {
//     const newFormState = [...formState]
//     newFormState[e.target.name] = e.target.value;
//     setFormState(newFormState);
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     onSubmit(listInfoCreate._id, formState);
//     toggleCreate(listInfoCreate._id);
//   }

//   const deleteItem = (item) =>{
//     setFormState((formState) => formState.filter(ele => ele !== item));
//   } 
//   //toggle->form añadir 
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {listInfoCreate.items.map((item, idx) => (
//           <div key={idx}> 
//             <label>Tipo de viaje:</label>
//             <input
//               type="text"
//               name={idx}
//               value={formState[idx]}
//               onChange={handleChange}
//             />
//             <label>Duración:</label>
//             <input
//               type="text"
//               name={idx}
//               value={formState[idx]}
//               onChange={handleChange}
//             />
//             <label>Item:</label>
//             <input
//               type="text"
//               name={idx}
//               value={formState[idx]}
//               onChange={handleChange}
//             />
//             <button onClick={() => deleteItem(item)}>X</button>
//           </div>
//         ))}
//         <button type="submit">Guardar</button>
//       </form>
//       <hr />
//     </div>
//   )
// }