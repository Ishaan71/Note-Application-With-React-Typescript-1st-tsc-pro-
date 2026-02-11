import React, { useEffect } from "react";
import { useState } from "react";
import type { Note } from "./Models/Note.model";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import NoteList from "./Components/NotesList";
import CreateNotes from "./Components/CreateNotes";

const App = () => {
  const strNotes = localStorage.getItem("notes")
  const [Notes, setNotes] = useState<Note[]>( strNotes ? JSON.parse(strNotes) : []);
  useEffect(() => {
   
    localStorage.setItem("notes", JSON.stringify(Notes));
  }, [Notes])
  

  return (
    <>
      <Header />
      <NoteList notes={Notes} setNotes={setNotes} />
      <CreateNotes setNotes ={setNotes} />
    </>
  );
};

export default App;
