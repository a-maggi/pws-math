import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
  }, []);

  return (
    <div className="subtext">{_formatCount(seconds)}</div>
  )
};

const _formatCount = (seconds) =>
  moment().startOf('day')
    .seconds(seconds)
    .format('mm:ss');

export default Timer;
