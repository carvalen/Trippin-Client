import React from "react";
import { useList } from "../../context/ListContext";

function NewList() {
  const initialState = { item: "" };
  const [state, setState] = React.useState(initialState);
  const { createlist } = useList();
  return (
      
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createlist(state);
        setState(initialState);
      }}
    >
      <label>Item</label>
      <input
        type="text"
        name="title"
        value={state.title}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      
      <button type="submit">Añadir</button>
    </form>
  );
}
export default NewList;