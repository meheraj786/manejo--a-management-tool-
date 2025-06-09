import React from 'react'
import { useRouteError } from 'react-router'

const ErrorPage = () => {
  const error = useRouteError();
  return <h2>{error.statusText || error.message}</h2>;
};

export default ErrorPage