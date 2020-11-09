import { useReducer, createContext } from "react";
import { record } from "./reducers/record";

const initialState = {
  state: { 
    record: {} 
},
};

const Context = createContext({});

const recordReducer = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(recordReducer(record), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };

// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [name, setName] = useState("William");
//   const [location, setLocation] = useState("Mars");

//   return (
//     <UserContext.Provider
//       value={{
//         record,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };