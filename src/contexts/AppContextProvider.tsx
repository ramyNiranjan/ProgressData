import React, { createContext, useState, useContext } from "react";

interface AppContextProps {
  children: React.ReactNode;
}
interface ContextProps {
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<ContextProps>({
  disabled: false,
  setDisabled: () => {},
});

const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <AppContext.Provider
      value={{
        disabled,
        setDisabled,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function useAppState() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppContext");
  }
  return context;
}

export { AppContextProvider, useAppState };
