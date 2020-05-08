import React from 'react'
import './style.scss';

import { Provider } from "./Context";
import Main from "./main";

export default () => {

  return (
    <Provider>
      <Main></Main>
    </Provider>
  );
};
