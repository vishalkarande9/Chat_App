import React, { useState, useEffect} from "react";
import io from "socket.io-client";
import classes from './App.module.css';
import Header from './Components/Layout/Header';
import Overlay from './Components/UI/Overlay';
import Modal from './Components/UI/Modal';
import Footer from './Components/Layout/Footer';

const socket = io.connect("http://localhost:5000");

function App() {
	const [ name, setName ] = useState("");
	const [showModal, setShowModal] = useState(true);
	const [ chat, setChat ] = useState([]);

	useEffect(
		() => {
			socket.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
		})

	const sendMessageHandler = (message) => {
		socket.emit("message", { name: name, message: message})
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))
	}

	const addUserHandler = (name) => {
		setName(name);
		setShowModal(false);
	}

	return (
		<React.Fragment>
			{showModal?<Overlay />:null}
			{showModal?<Modal addUser={addUserHandler}/>:null}
			<Header name={name} />
			<div className={classes.chat}>
				{renderChat()}
			</div>
			<Footer sendMessage={sendMessageHandler}/>
		</React.Fragment>
	)
}

export default App
