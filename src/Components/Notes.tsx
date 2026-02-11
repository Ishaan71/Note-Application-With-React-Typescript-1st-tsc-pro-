import * as React from "react";
import type { Note } from "../Models/Note.model";

interface INotesProps {
  note: Note;
  HandleDelete : (id:string)=> void
}

const Notes: React.FC<INotesProps> = ({ note, HandleDelete }) => {
  return (
    <div
      
      className=" border border-gray-300 p-4 m-2 rounded"
      style={{ backgroundColor: note.color }}
    >
      <h1 className="text-2xl font-semibold">{note.title}</h1>
      <h3 className="text-lg mt-2">{note.text}</h3>
      <h3 className="text-sm font-semibold mt-2 text-gray-500">{note.date}</h3>
      <button className="mt-2 bg-red-500 text-white px-2 py-1 rounded" onClick={() => HandleDelete(note.id)}>Delete</button>
    </div>
  );
};

export default Notes;
