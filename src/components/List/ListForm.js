import React, {useState} from 'react';

export default function ListForm({ onSubmit, listInfo, toggleEdit }) {
  const [ formState, setFormState ] = useState(listInfo.items);
  const handleChange = async (e) => {
    const newFormState = [...formState]
    newFormState[e.target.name] = e.target.value;
    setFormState(newFormState);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(listInfo._id, formState);
    toggleEdit(listInfo._id);
  }
  const deleteItem = (item) =>{
    setFormState((formState) => formState.filter(ele => ele !== item));
  } 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {listInfo.items.map((item, idx) => (
          <div key={idx}> 
            {/* <label>Para llevar:</label> */}
            <input
              type="text"
              name={idx}
              value={formState[idx]}
              onChange={handleChange}
            />
            <button onClick={() => deleteItem(item)}>X</button>
          </div>
        ))}
        <button type="submit">Guardar</button>
      </form>
      <hr />
    </div>
  )
}
