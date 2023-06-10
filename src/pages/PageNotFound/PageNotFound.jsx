import React from 'react';
import { PageNotFd, Wrap } from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <div>
      <PageNotFd>
        <Wrap>
          <h1>404</h1>
          <p>Page not found...</p>
        </Wrap>
      </PageNotFd>
    </div>
  );
};

export default PageNotFound;
