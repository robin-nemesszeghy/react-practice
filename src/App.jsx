import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, { useState } from "react";
// import Counter from "./components/Counter";

function App() {
  const [isModalOpen, setShowModal] = useState(false);

  function onToDoDelete() {
    setShowModal(true);
  }

  function confirmModal() {
    setShowModal(false);
  }

  function cancelModal() {
    setShowModal(false);
  }

  return (
    <>
      <Title />
      <div>
        <input type="text" onChange={(event) => {}} />
        <button onClick={() => setShowModal(true)}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          onToDoDelete={onToDoDelete}
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step-by-step."
        />
        <Todo
          onToDoDelete={onToDoDelete}
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks."
        />
        <Todo
          onToDoDelete={onToDoDelete}
          title="Land a $100K Job"
          paragraph="Apply to 100 jobs."
        />
      </div>
      {isModalOpen && (
        <Modal
          confirmModal={confirmModal}
          cancelModal={cancelModal}
          title="Are you sure you want to delete this task?"
        />
      )}
    </>
  );
}

export default App;
