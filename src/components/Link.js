import cn from 'classnames';
import React from "react";
import { Link } from 'react-router-dom';

export default ({
  route = '#',
  params,
  children,
  className
}) => {
  let link = (
    <span className={cn(className)}>
      <span>{children}</span>
    </span>
  );
  
  link = <Link to={route} params={params}>{link}</Link>

  return link
}
