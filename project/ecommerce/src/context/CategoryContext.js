import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext([]);

export default function CategoryProvider({children}) {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    const response = await fetch("http://localhost:8000/api/v1/categories");
    const {data} = await response.json();
    const {categories} = data;
   setActiveCategory(categories[0]._id)
    setCategories(categories);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        handleCategoryChange,
        activeCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
