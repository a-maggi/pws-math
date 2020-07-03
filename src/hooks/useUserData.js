import { useContext } from "react";
import { Context } from "../Context";

const useUserData = () => {
  const [state, setState] = useContext(Context); // Our values from Context

  const setLevel = data => {
    setState(prevState => ({
      ...prevState,
      level: data
    }));
  }; // Our methods to update the state

  const setNickname = data => {
    setState(prevState => ({
      ...prevState,
      nickname: data
    }));
  }; // Our methods to update the state

  const setUuid = data => {
    setState(prevState => ({
      ...prevState,
      uuid: data
    }));
  }; // Our methods to update the state

  const setAvatar = data => {
    setState(prevState => ({
      ...prevState,
      avatar: data
    }));
  }; // Our methods to update the state

  const setScoring = data => {
    setState(prevState => ({
      ...prevState,
      scoring: data
    }));
  }; // Our methods to update the state

  // Now we return only the relevant part of the state for the component and the method to update it
  return {
    nickname: state.nickname,
    uuid: state.uuid,
    level: state.level,
    avatar: state.avatar,
    scoring: state.scoring,
    setNickname,
    setLevel,
    setUuid,
    setAvatar,
    setScoring
  };
};

export default useUserData;