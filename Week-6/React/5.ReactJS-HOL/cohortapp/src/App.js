import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails
        title="React Bootcamp"
        status="ongoing"
        date="20 July 2025"
      />
      <CohortDetails
        title="SQL Server Cohort"
        status="completed"
        date="10 July 2025"
      />
    </div>
  );
}

export default App;
