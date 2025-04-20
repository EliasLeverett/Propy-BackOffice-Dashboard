import React from 'react';
import MenuBar from './components/MenuBar';
import Dashboard from './components/Dashboard';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuBar />
      <h1>Propy BackOffice Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;