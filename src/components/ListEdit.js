import { useContext, useState } from "react";
import { TodoContext } from "../context/todo-context";

export default function ListEdit({ id, setShowEdit, text }) {
  const { handleEditBtn } = useContext(TodoContext);
  const [editText, setEditText] = useState(text);

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmission = (e) => {
    if (e.key === "Enter") {
      handleEditBtn(id, editText);
      setShowEdit(false);
    }
  };

  return (
    <div>
      <input
        value={editText}
        onChange={handleEditChange}
        onKeyDown={handleEditSubmission}
        className="edit-input"
      />
    </div>
  );
}
