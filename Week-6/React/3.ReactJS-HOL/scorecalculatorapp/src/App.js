import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        name="Vasanth Kumar"
        school="Bharath University"
        total={445}
        goal="Get into IIT"
      />
    </div>
  );
}

export default App;
