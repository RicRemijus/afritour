import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className='innerWidth flexColCenter'>
        <h1>Ooops !</h1>
        <p>Sorry, an u expected error has occured.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default ErrorPage;