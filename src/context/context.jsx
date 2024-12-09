import { createContext, useState } from "react";

export const EasyContext = createContext(false);
export const EasyProvider = ({ children }) => {
  const [attempts, setAttempts] = useState(3);
  let [useVision, setUseVision] = useState(2);
  const [isEasyMode, setEasyMode] = useState(false);
  return (
    <EasyContext.Provider value={{ attempts, setAttempts, isEasyMode, setEasyMode, useVision, setUseVision }}>
      {children}
    </EasyContext.Provider>
  );
};
