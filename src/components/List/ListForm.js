import React, {useState} from 'react'
import {updateList} from "../../service/list.service";
import {useHistory} from "react-router-dom";

export default function ListForm() {
    const initialState = { type:"", days:"", items:"" }
    const [state, setState] = React.useState(initialState)
    // const { state } = useLocation();
    // const { type, days, items } = state[0];
    const { push } = useHistory();
    const updateListHandle = async (e)=> {
    const {data} = await updateList (state);
        setState({...state, [type.name]: type.value })
        push("/profile");
    }
    return (
        <div>
            <form onSubmit={updateListHandle}>
       <label>Item</label>
      <input
        type="text"
        name="items"
        value={state.items}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
        ></input>
        <input
        type="text"
        name="days"
        value={state.days}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }></input>

       </form>
        </div>
    )
}
