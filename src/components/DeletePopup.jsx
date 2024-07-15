import { actionTypes } from "../store/useReducer";
import del from "../assets/delete.png";
import { useState } from "react";

function DeletePopup(props) {
    const [open, setOpen] = useState(false);
    const closeModal = (e) => {
      e.stopPropagation();
      setOpen(false);
    };
  
    const onButtonClick = (e) => {
      e.stopPropagation();
      props.dispatch({
        type: actionTypes.DELETE_EMPLOYEE,
        payload: props.id,
      });
    };
  
    return (
      <div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="delete"
        >
          <img src={del} />
        </div>
        {open && (
          <div className="pop">
            <div className="DeleteBox">
              <h2 ClassName="head">Are you sure?</h2>
              <button onClick={closeModal}>X</button>
              <h3>Do you really want to delete employee?</h3>
              <button className="delete-emp" onClick={onButtonClick}>
                Confirm
              </button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  export default DeletePopup;