import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";
const context = createContext({
  log: false,
  setLog: () => {},
  user: false,
  setUser: () => {},
});

export default function LoginProvider({
  children,
}) {
  const [log, setLog] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const tokenStr =
      localStorage.getItem("token");
    if (tokenStr) {
      setLog(true);
    }
  });
  return (
    <context.Provider
      value={{ log, setLog, user, setUser }}
    >
      {children}
    </context.Provider>
  );
}
export const useLogin = () => {
  const loginContext = useContext(context);
  return loginContext;
};
