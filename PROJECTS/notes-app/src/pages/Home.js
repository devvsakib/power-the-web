import React, { useEffect, useState } from "react";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Search from "./components/Search";
import Header from "./components/Toggle";

import './Home.css'
function Home() {
	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

	const [notes, setNotes] = useState(
	  JSON.parse(localStorage.getItem("notes-app")) || []
	);
  
	const addNote = (color) => {
	  const tempNotes = [...notes];
  
	  tempNotes.push({
		id: Date.now() + "" + Math.floor(Math.random() * 78),
		text: "",
		time: Date.now(),
		color,
	  });
	  setNotes(tempNotes);
	};
  
	const deleteNote = (id) => {
	  const tempNotes = [...notes];
  
	  const index = tempNotes.findIndex((item) => item.id === id);
	  if (index < 0) return;
  
	  tempNotes.splice(index, 1);
	  setNotes(tempNotes);
	};
  
	const updateText = (text, id) => {
	  const tempNotes = [...notes];
  
	  const index = tempNotes.findIndex((item) => item.id === id);
	  if (index < 0) return;
  
	  tempNotes[index].text = text;
	  setNotes(tempNotes);
	};
  
	useEffect(() => {
	  localStorage.setItem("notes-app", JSON.stringify(notes));
	}, [notes]);
  
	return (
		<div className="Home-top">
			<div className={`${darkMode && 'dark-mode'}`}>
			<div className="Home">
				<h1>NOTES KEEP</h1>
				<div className="Home-header">
					<Search classname="search-bar" handleSearchNote={setSearchText} />
					<Header classname="toggle-button"handleToggleDarkMode={setDarkMode} />
				</div>
				<div className="Home-container">
					<Sidebar addNote={addNote} />
					<NoteContainer
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					deleteNote={deleteNote}
					updateText={updateText}
					/>
				</div>
			</div>
		</div>
		</div>
	);
  }
  
  export default Home;
  
