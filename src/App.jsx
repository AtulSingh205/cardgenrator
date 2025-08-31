import React, { useState } from "react";
import Card from "./component/Card";

const App = () => {
  const [form, setForm] = useState({
    image: "",
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState([]);

  function handleForm(e) {
    e.preventDefault();
    setSubmitted([...submitted,form]); 
    setForm({image:"",name:"",email:"",age:"",password:""})
  }
  function removecard(name){
    setSubmitted(submitted.filter((itm)=>itm.name!==name))
  }

  return (
    <div className="h-screen gap-5 w-full flex  items-center justify-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">

      <form
        onSubmit={handleForm}
        className="bg-[#0b1320] p-8 rounded-2xl shadow-2xl w-[300px] h-[500px] text-white  sticky top-0 "
      >
        <h2 className="text-2xl font-bold text-center mb-4">User Form</h2>

        <input
          type="url"
          placeholder="Paste image URL"
          value={form.image}
          className="w-full p-2 mb-3 rounded-lg bg-[#1a1f36] outline-none"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <input
          type="text"
          placeholder="Enter Name"
          value={form.name}
          className="w-full p-2 mb-3 rounded-lg bg-[#1a1f36] outline-none"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 mb-3 rounded-lg bg-[#1a1f36] outline-none"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="number"
          placeholder="Enter Age"
          className="w-full p-2 mb-3 rounded-lg bg-[#1a1f36] outline-none"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-2 mb-6 rounded-lg bg-[#1a1f36] outline-none"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 transition"
        >
          Submit
        </button>
      </form>

      <Card submitted={submitted} setSubmitted={setSubmitted}  removecard={removecard}/>
    </div>
    )
};

export default App;
