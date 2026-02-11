import * as React from "react";
import type { Note } from "../Models/Note.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const HandleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className=" font-semibold text-3xl m-4">Notes</h1>
      {notes.length === 0 ? (
        <h1 className="text-center text-gray-500 text-xl">No Notes Found</h1>
      ) : (
        notes.map((note) => {
          return (
            <Notes note={note} key={note.id} HandleDelete={HandleDelete} />
          );
        })
      )}
    </div>
  );
};

export default NotesList;
