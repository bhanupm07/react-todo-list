import { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import ListShow from "./ListShow";

export default function SearchAndList() {
  const { input, arr, handleInputChange, handleSubmit } =
    useContext(TodoContext);

  const renderedList = arr.map((text, i) => {
    return <ListShow text={text} key={i} listKey={i} />;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder="Create a new todo..."
        className="input-el"
        value={input}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <div className="lists-div">{renderedList}</div>
    </form>
  );
}
