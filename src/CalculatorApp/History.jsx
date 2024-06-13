import React from 'react';

const History = ({ history }) => {
    return (
        <div className="text-sm text-gray-600 mt-4" id="history">
            <p>History</p>
            {history.map((entry, index) => (
                <div key={index}>{entry}</div>
            ))}
        </div>
    );
};

export default History;
