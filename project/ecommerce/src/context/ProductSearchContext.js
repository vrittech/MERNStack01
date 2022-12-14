import { createContext, useState } from "react";

export const ProductSearchContext = createContext(null)

export default function ProductSearchContextProvider({children}) {
    const [searchedString, setSearchString] = useState("");
  
    const handleSearchStringChange = (searchString) => {
      setSearchString(searchString);
    };
  
   
  
    return (
      <ProductSearchContext.Provider
        value={{
          searchedString,
          handleSearchStringChange,
         
        }}
      >
        {children}
      </ProductSearchContext.Provider>
    );
  }