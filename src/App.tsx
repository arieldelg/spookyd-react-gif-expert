import { useState } from "react";
import { AddCategory, Gifgrid } from "./components/index";

function App() {
  const [categories, setCategories] = useState([""]);
  const handleCategory = (value: string): string[] => {
    const lowerCase = value.toLocaleLowerCase();
    const check = categories.includes(lowerCase);
    if (!check) setCategories((prev) => [lowerCase, ...prev]);
    return categories;
  };

  return (
    <main>
      <h1>Hola</h1>
      <AddCategory onNewCategory={(value) => handleCategory(value)} />
      {categories.map((element) => (
        <Gifgrid categories={element} key={element} />
      ))}
    </main>
  );
}

export default App;
