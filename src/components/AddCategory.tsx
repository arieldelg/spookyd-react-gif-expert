import { FormEvent, useState } from "react";
// import "./AddCategory.css";

type Props = {
  onNewCategory: (value: string) => string[];
};

const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value.length > 0) onNewCategory(value);
    setInputValue("");
  };

  return (
    <form onSubmit={(e) => handleSumbit(e)} aria-label="form">
      <label htmlFor="inputCategory">Add a category</label>
      <div className="containerInput">
        <input
          type="text"
          id="inputCategory"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default AddCategory;
