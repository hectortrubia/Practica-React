import HomePage from './pages/Home';
import './App.css';
import React from 'react';
import DataProvider from './components/context/dataProvider';
import Data1Provider from './components/context/data1Provider';
import Data2Provider from './components/context/data2Provider';


function App() {
  return (

    <DataProvider>
    <Data1Provider>
    <Data2Provider>    
    <React.Fragment>
    
      <HomePage></HomePage>

      </React.Fragment>
      </Data2Provider>
      </Data1Provider>
      </DataProvider>
  
  );
}

export default App;
