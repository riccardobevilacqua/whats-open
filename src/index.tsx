import React from 'react';
import ReactDOM from 'react-dom';

import { List } from './components/list/list';

const App: React.FunctionComponent = () => {
  return (
    <>
      <List />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
