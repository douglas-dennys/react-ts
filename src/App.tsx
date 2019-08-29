import React, { FC } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AppRouter from './routes';

const App: FC = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
