import { useState } from "react";
import FormNewPublication from "./FormNewPublication";

export default function CreatePublication({ id }) {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="new-publication">
      <button onClick={handleClick} className="button-create-publication">
        {showForm ? "cancel" : "Create new publication"}
      </button>
      {showForm ? <FormNewPublication UserId={id} /> : null}
    </div>
  );
}
