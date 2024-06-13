import React from 'react';

const Display = ({ currentOperand, previousOperand, operation }) => {
  return (
    <div className="bg-gray-200 text-right px-4 py-2 rounded-lg text-xl mb-4 min-h-12">
      <div className="text-sm text-gray-600">{previousOperand} {operation}</div>
      <div id="display">{currentOperand}</div>
    </div>
  );
};

export default Display;
