import React from 'react';
import DataReport from './components/DataReport';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Data Reporting Application</h1>
      <DataReport />
    </div>
  );
};

export default App;