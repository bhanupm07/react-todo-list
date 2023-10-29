import { GoPencil, GoTrash } from "react-icons/go";
import { useContext, useState } from "react";
import { TodoContext } from "../context/todo-context";
import ListEdit from "./ListEdit";

export default function ListShow({ text, listKey }) {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDeleteBtn } = useContext(TodoContext);

  const handleEditBtn = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    handleDeleteBtn(listKey);
    setShowEdit(false);
  };

  let content = <p className="text">{text}</p>;
  if (showEdit)
    content = <ListEdit id={listKey} setShowEdit={setShowEdit} text={text} />;

  return (
    <div key={listKey}>
      <div className="single-list-div">
        {content}
        <div className="icons-div">
          <GoPencil className="icon" onClick={handleEditBtn} />
          <GoTrash className="icon" onClick={handleDeleteClick} />
        </div>
      </div>
      <hr />
    </div>
  );
}
