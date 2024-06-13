import React from 'react';

const Button = ({ label, onClick, className = "" }) => {
    return (
        <button
            className={`bg-gray-300 p-4 rounded-lg ${className}`}
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    );
};

export default Button;
