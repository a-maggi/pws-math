import { useContext } from "react";
import { Context } from "../Context";

const useUserData = () => {
  const [state, setState] = useContext(Context); // Our values from Context

  const updateLevel = name => {
    setState(prevState => ({
      ...prevState,
      nickname: ""
    }));
  }; // Our methods to update the state

  const updateNickname = name => {
    setState(prevState => ({
      ...prevState,
      nickname: name
    }));
  }; // Our methods to update the state

  // Now we return only the relevant part of the state for the component and the method to update it
  return {
    nickname: state.nickname,
    updateNickname,
    updateLevel
  };
};

export default useUserData;