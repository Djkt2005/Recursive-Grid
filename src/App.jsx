import React from 'react';
import Grid from './components/Grid';

function App() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-[#1a237e] tracking-tight">Recursive Grid</h1>
      <p className="text-gray-500 max-w-md text-center">
        Click a box to increment. Watch the ripples! <br />
        <span className="text-xs">When divisible by 3 → Right -1 | When divisible by 5 → Below +2</span>
      </p>
      <Grid />
    </div>
  );
}

export default App;
