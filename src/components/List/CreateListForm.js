 import React, {useState} from 'react';

 export default function CreateListForm({ onSubmit, toggleCreate }) {
   const [ formState, setFormState ] = useState({type:"", days:"", items:""});
   const handleChange = async (e) => {
     const newFormState = {...formState}
    newFormState[e.target.name] = e.target.value;
     setFormState(newFormState);
   }

   const handleSubmit = async (e) => {
     e.preventDefault();
    onSubmit(formState);
     toggleCreate();
   }

   return (
    <div>

      <form onSubmit={handleSubmit}>
        
          <div> 
            <label>Tipo de viaje:</label>
            <input
             type="text"
              name="type"
              value={formState.type}
              onChange={handleChange}
           />
           <label>Duración:</label>
            <input
              type="text"
             name="days"
             value={formState.days}
             onChange={handleChange}
           />
            <label>Item:</label>
            <input
              type="text"
             name="items"
              value={formState.items}
          onChange={handleChange}
           />
         </div>
       
       <button type="submit">Guardar</button>
      </form>
     <hr />
   </div>
  )
 }