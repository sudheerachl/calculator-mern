import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker'; // Import the ColorPicker component

function App() {
  // Define an array of colors to pass to the ColorPicker component
  const colors = ['#FF5733', '#33FF57', '#3366FF', '#FFFF33', '#FF33FF'];

  return (
    <div className="App">
      <ColorPicker colors={colors} /> {}
    </div>
  );
}

export default App;
