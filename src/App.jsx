import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    image: "",
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(null);

  function handleForm(e) {
    e.preventDefault();
    setSubmitted(form); // submit karne ke baad data store
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {/* FORM */}
      <form
        onSubmit={handleForm}
        className="bg-[#0b1320] p-8 rounded-2xl shadow-2xl w-[300px] h-[500px] text-white"
      >
        <h2 className="text-2xl font-bold text-center mb-4">User Form</h2>

        <input
          type="url"
          placeholder="Paste image URL"
          className="w-full p-2 mb-3 rounded-lg bg-[#1a1f36] outline-none"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-2 mb-3 rounded-lg bg-[#1a1f36] outline-none"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 mb-3 rounded-lg bg-[#1a1f36] outline-none"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="number"
          placeholder="Enter Age"
          className="w-full p-2 mb-3 rounded-lg bg-[#1a1f36] outline-none"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-2 mb-6 rounded-lg bg-[#1a1f36] outline-none"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 transition"
        >
          Submit
        </button>
      </form>

      {/* SHOW SUBMITTED DATA */}
      {submitted && (
        <div className="mt-6 p-4 w-[300px] bg-white rounded-lg shadow-lg text-black text-center">
          <img
            className="h-20 w-20 rounded-full mx-auto mb-3"
            src={submitted.image}
            alt="User"
          />
          <h1 className="font-bold">Name: {submitted.name}</h1>
          <h1>Email: {submitted.email}</h1>
          <h1>Age: {submitted.age}</h1>
          <h1>Password: {submitted.password}</h1>
        </div>
      )}
    </div>
  );
};

export default App;
