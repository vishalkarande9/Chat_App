import React, { useEffect, useRef, useState } from "react";
import classes from './Modal.module.css';


const Modal = props => {
    const [name,setName] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleInputChange = (event) => {
        setName(event.target.value);
        if(event.target.value.trim().length){
            setDisabled(false);
        } else{
            setDisabled(true);
        }
        
    }

    return(
        <div className={classes.modal}>
            <input className={classes.input} type="text" placeholder="Please Enter UserName" onChange={handleInputChange} value={name}></input>
            <button className={classes.button} onClick={() => props.addUser(name)} disabled={disabled}>Add User</button>
        </div>
    )
}

export default Modal;