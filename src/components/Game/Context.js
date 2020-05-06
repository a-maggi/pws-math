import React, { useState } from "react";

const Context = React.createContext([{}, () => {}]); // Our empty Context ready.

const Provider = props => {
  const [state, setState] = useState({
    step: 3,
    nickname: "Agus",
    level: false
  }); // Our context is a state hook ;)
  return <Context.Provider value={[state, setState]}>{props.children}</Context.Provider>;
};

export { Context, Provider };