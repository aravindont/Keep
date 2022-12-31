import React, { useState } from "react";
import Footer from "./components/Footer";
import FormArea from "./components/FormArea";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function delNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header />
      <FormArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          title={note.title}
          content={note.content}
          id={index}
          delNote={delNote}
        />
      ))}
      <Footer />
    </>
  );
}
export default App;