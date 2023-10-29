import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function Provider({ children }) {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  const handleInputChange = (value) => {
    setInput(value);
  };

  const handleSubmit = () => {
    if (input === "") {
      return;
    } else {
      setArr([...arr, input]);
      setInput("");
    }
  };

  const handleDeleteBtn = (id) => {
    const updatedArr = arr.filter((str, i) => {
      return i !== id;
    });
    setArr(updatedArr);
  };

  const handleEditBtn = (id, text) => {
    const updatedArr = arr.map((str, i) => {
      if (id === i) {
        return (str = text);
      }
      return str;
    });
    setArr(updatedArr);
  };

  return (
    <TodoContext.Provider
      value={{
        input,
        setInput,
        arr,
        setArr,
        handleInputChange,
        handleSubmit,
        handleDeleteBtn,
        handleEditBtn,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
