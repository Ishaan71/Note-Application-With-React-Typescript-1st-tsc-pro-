import * as React from "react";
import type { Note } from "../Models/Note.model";
import { useState } from "react";

interface ICreateNotesProps {
  setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({setNotes}) => {

  type FormDataType = {
    title : string;
    text : string;
    color : string
  }
  const [FormData, setFormData] = useState<FormDataType>({
    title : "",
    text : "",
    color : "#dfdfdf"
  })
  const HandleChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name , value} = e.target
    setFormData((prev)=>({...prev , [name] : value}))

  }
  const HandleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!FormData.title || !FormData.text)
       return alert("Please fill all the fields")
    const newNote: Note ={
      id:new Date().toString(),
      date:new Date().toDateString(),
      ...FormData
    }
    setNotes((prev)=>([...prev , newNote]))
    setFormData({

      title : "",
      text : "",
      color : "#dfdfdf"
    })
  }
  return (
    <form onSubmit={HandleSubmit} className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={FormData.title}
          onChange={HandleChange}
          placeholder="Enter title"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        
        <label className="block text-gray-700 font-semibold mb-2">
          Text
        </label>
        <textarea
          rows={3}
          name = "text"
          value={FormData.text}
          onChange={HandleChange}
          placeholder="Enter your notes"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="mb-4">
        
        <label className="block text-gray-700 font-semibold mb-2">
          Color
        </label>
        <input
          type="color"
          className="w-16 h-10 border border-gray-300 rounded cursor-pointer"
          defaultValue="#dfdfdf"
          name="color"
          onChange={HandleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateNotes;
