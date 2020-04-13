import React from 'react';
import ReactDOM from 'react-dom';
import { Server } from 'miragejs';

import { businesses } from './mock/mockdata';
import { List } from './components/list/list';

new Server({
  routes() {
    this.namespace = '/api';

    this.get('/businesses', () => ({ businesses }));
  }
})

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
