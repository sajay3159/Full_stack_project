import React from 'react';
import '../App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './services/reducer/indexs';
import Dropdown from './components/Dropdown';
import MyLineChart from '../components/MyLineChart';

const store = createStore(rootReducer);

const Apps: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Dropdown />
        <MyLineChart/>
      </div>
    </Provider>
  );
};

export default Apps;

