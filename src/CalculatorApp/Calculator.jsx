import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import History from './History';

const Calculator = () => {
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [operation, setOperation] = useState(null);
    const [history, setHistory] = useState([]);

    const appendNumber = (number) => {
        if (number === '.' && currentOperand.includes('.')) return;
        setCurrentOperand(currentOperand + number);
    };

    const chooseOperation = (op) => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            calculate();
        }
        setOperation(op);
        setPreviousOperand(currentOperand);
        setCurrentOperand('');
    };

    // Calculate the result
    const calculate = () => {
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        let result;
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        setCurrentOperand(result.toString());
        setOperation(null);
        setPreviousOperand('');
        updateHistory(`${prev} ${operation} ${current} = ${result}`);
    };

    // Clear all States 
    const clearAll = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setOperation(null);
        setHistory([]);
    };


    const deleteLast = () => {
        setCurrentOperand(currentOperand.toString().slice(0, -1));
    };

    const updateHistory = (entry) => {
        setHistory([...history, entry]);
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen font-mono">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <Display currentOperand={currentOperand} previousOperand={previousOperand} operation={operation} />
                <div className="grid grid-cols-4 gap-2">
                    <Button label="Clear All" onClick={clearAll} className="col-span-3 bg-gray-400" />
                    <Button label="DEL" onClick={deleteLast} className="bg-orange-400" />
                    <Button label="7" onClick={appendNumber} />
                    <Button label="8" onClick={appendNumber} />
                    <Button label="9" onClick={appendNumber} />
                    <Button label="/" onClick={chooseOperation} className="bg-orange-400" />
                    <Button label="4" onClick={appendNumber} />
                    <Button label="5" onClick={appendNumber} />
                    <Button label="6" onClick={appendNumber} />
                    <Button label="*" onClick={chooseOperation} className="bg-orange-400" />
                    <Button label="1" onClick={appendNumber} />
                    <Button label="2" onClick={appendNumber} />
                    <Button label="3" onClick={appendNumber} />
                    <Button label="-" onClick={chooseOperation} className="bg-orange-400" />
                    <Button label="0" onClick={appendNumber} className="col-span-2" />
                    <Button label="." onClick={appendNumber} />
                    <Button label="+" onClick={chooseOperation} className="bg-orange-400" />
                    <Button label="=" onClick={calculate} className="col-span-4 bg-green-400" />
                </div>

                {history && history.length > 0 &&
                    <History history={history} />
                }

            </div>
        </div>
    );
};

export default Calculator;
