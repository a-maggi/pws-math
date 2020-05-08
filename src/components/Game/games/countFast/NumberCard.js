import React, { Fragment, useState } from "react";

const NumberCard = ({ number, lowest, score, action, isClicked, setIsClicked }) => {
  const [cardStyle, setCardStyle] = useState();

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setStatusCard = async () => {
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
