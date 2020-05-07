import React, { Fragment, useState, useEffect, useContext } from "react";
import classNames from 'classnames';
import Context from './Context'

const NumberCard = ({ number, lowest, score, action, isClicked, setIsClicked }) => {
  console.log("lowest es " +lowest)
  console.log("number es " +number  )
  const [cardStyle, setCardStyle] = useState();

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setStatusCard = async (possAns) => {
    if (isClicked) return false;
    setIsClicked(true);
    if (number !== lowest){
      setCardStyle("error-card");
      await timeout(1000);
      setCardStyle("none");
      score(-10);
      setIsClicked(false);
    } else {
      setCardStyle("ok-card");
      await timeout(1000);
      setCardStyle("completed");
      score(10);
      action(number);
    }

  };

  return (
    <Fragment>
      <div className={"number-card " + cardStyle}
        onClick={() => setStatusCard(number)}
      >
        <div className={"card-block number " + cardStyle}>
          <p className={"card-text " + cardStyle}>{number}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default NumberCard;
