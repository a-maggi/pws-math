import React, { Fragment, useState } from "react";

const Equation = ({ possAns, answer, index, action, isClicked, setIsClicked }) => {
  const [cardStyle, setCardStyle] = useState("none");


  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setStatusCard = async (possAns) => {
    if (isClicked) return false;
    setIsClicked(true);
    if (possAns !== answer)
      setCardStyle("error-card");
    else
      setCardStyle("ok-card");

    timeout(1000).then(() => {
      setCardStyle("none");
      action(possAns, answer, index);
    });

  };

  return (
    <Fragment>
      <div className={"number-card " + cardStyle}
        onClick={() => setStatusCard(possAns)}
      >
        <div className={"card-block number " + cardStyle}>
          <p className={"card-text " + cardStyle}>{possAns}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Equation;
