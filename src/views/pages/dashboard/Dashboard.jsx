import React from 'react';

function Dashboard() {
  return (
    <div>
      <h3>
        I am Dashboard
        {' '}
        {process.env.REACT_APP_ENVIRONMENT}
      </h3>
    </div>
  );
}

export default Dashboard;
