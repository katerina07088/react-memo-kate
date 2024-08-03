import { createContext, useState } from "react";

export const EasyContext = createContext(false);
export const EasyProvider = ({ children }) => {
  const [attempts, setAttempts] = useState(3);
  const [isEasyMode, setEasyMode] = useState(false);
  return (
    <EasyContext.Provider value={{ attempts, setAttempts, isEasyMode, setEasyMode }}>{children}</EasyContext.Provider>
  );
};
