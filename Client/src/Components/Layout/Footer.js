import React, {useState} from 'react';
import classes from './Footer.module.css';

const Footer = props => {
    const [message,setMessage] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleInputChange = (event) => {
        setMessage(event.target.value);

        if(event.target.value.trim().length){
            setDisabled(false);
        } else{
            setDisabled(true);
        }
    }

    return (
        <footer className={classes.footer}>
            <input className={classes.input} type="text" placeholder="Please Enter Message" onChange={handleInputChange} value={message}></input>
            <button className={classes.button} 
                    onClick={() => {
                            setMessage("");
                            setDisabled(true);
                            return props.sendMessage(message)
                    }} disabled={disabled}>Send</button>
        </footer>
    )
}

export default Footer;