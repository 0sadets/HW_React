import { createContext, useState, useContext } from "react";

export const ItemContext = createContext({
  isChosedItems: [],
  setChosed: () => null,
  clearItem: () => {},
});

export const ItemProvider = ({ children }) => {
  const [isChosedItems, setIsChosedItems] = useState([]);
  const setChosed =(item)=>{
    setIsChosedItems((prevItems) => [...prevItems, item]);
  }
  const clearItem = () => {
    setIsChosedItems([]);
  };

  
  const value = {
    isChosedItems,
    setChosed,
    clearItem,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};
