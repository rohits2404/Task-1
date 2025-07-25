import { useState, useCallback } from 'react';
import { Button } from './ui/button';

const Calculator = () => {

    const [state, setState] = useState({
        display: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false,
        memory: 0,
        isRadians: true,
    });

    const inputNumber = useCallback((num) => {
        if (state.waitingForNewValue) {
        setState(prev => ({
            ...prev,
            display: num,
            waitingForNewValue: false,
        }));
        } else {
        setState(prev => ({
            ...prev,
            display: prev.display === '0' ? num : prev.display + num,
        }));
        }
    }, [state.waitingForNewValue]);

    const inputDecimal = useCallback(() => {
        if (state.waitingForNewValue) {
        setState(prev => ({
            ...prev,
            display: '0.',
            waitingForNewValue: false,
        }));
        } else if (!state.display.includes('.')) {
        setState(prev => ({
            ...prev,
            display: prev.display + '.',
        }));
        }
    }, [state.waitingForNewValue, state.display]);

    const clear = useCallback(() => {
        setState(prev => ({
        ...prev,
        display: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false,
        }));
    }, []);

    const allClear = useCallback(() => {
        setState({
        display: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false,
        memory: 0,
        isRadians: true,
        });
    }, []);

    const performOperation = useCallback((nextOperation) => {
        const inputValue = parseFloat(state.display);

        if (state.previousValue === null) {
        setState(prev => ({
            ...prev,
            previousValue: inputValue,
            operation: nextOperation,
            waitingForNewValue: true,
        }));
        } else if (state.operation) {
        const currentValue = state.previousValue || 0;
        let result = currentValue;

        switch (state.operation) {
            case '+':
            result = currentValue + inputValue;
            break;
            case '-':
            result = currentValue - inputValue;
            break;
            case '×':
            result = currentValue * inputValue;
            break;
            case '÷':
            result = inputValue !== 0 ? currentValue / inputValue : 0;
            break;
            case '^':
            result = Math.pow(currentValue, inputValue);
            break;
            case 'mod':
            result = currentValue % inputValue;
            break;
            default:
            return;
        }

        setState(prev => ({
            ...prev,
            display: String(result),
            previousValue: result,
            operation: nextOperation,
            waitingForNewValue: true,
        }));
        }
    }, [state]);

    const calculate = useCallback(() => {
        performOperation('=');
        setState(prev => ({
        ...prev,
        operation: null,
        previousValue: null,
        waitingForNewValue: true,
        }));
    }, [performOperation]);

    const performScientificFunction = useCallback((func) => {
        const value = parseFloat(state.display);
        let result;

        switch (func) {
        case 'sin':
            result = Math.sin(state.isRadians ? value : (value * Math.PI) / 180);
            break;
        case 'cos':
            result = Math.cos(state.isRadians ? value : (value * Math.PI) / 180);
            break;
        case 'tan':
            result = Math.tan(state.isRadians ? value : (value * Math.PI) / 180);
            break;
        case 'asin':
            result = Math.asin(value);
            if (!state.isRadians) result = (result * 180) / Math.PI;
            break;
        case 'acos':
            result = Math.acos(value);
            if (!state.isRadians) result = (result * 180) / Math.PI;
            break;
        case 'atan':
            result = Math.atan(value);
            if (!state.isRadians) result = (result * 180) / Math.PI;
            break;
        case 'log':
            result = Math.log10(value);
            break;
        case 'ln':
            result = Math.log(value);
            break;
        case 'sqrt':
            result = Math.sqrt(value);
            break;
        case 'square':
            result = value * value;
            break;
        case 'factorial':
            result = value >= 0 && value <= 170 && Number.isInteger(value) 
            ? Array.from({ length: value }, (_, i) => i + 1).reduce((acc, cur) => acc * cur, 1)
            : NaN;
            break;
        case 'inverse':
            result = 1 / value;
            break;
        case 'pi':
            result = Math.PI;
            break;
        case 'e':
            result = Math.E;
            break;
        case 'exp':
            result = Math.exp(value);
            break;
        case 'abs':
            result = Math.abs(value);
            break;
        default:
            return;
        }

        setState(prev => ({
        ...prev,
        display: isNaN(result) ? 'Error' : String(result),
        waitingForNewValue: true,
        }));
    }, [state.display, state.isRadians]);

    const toggleMode = useCallback(() => {
        setState(prev => ({
        ...prev,
        isRadians: !prev.isRadians,
        }));
    }, []);

    const formatDisplay = (value) => {
        if (value === 'Error' || value === 'Infinity' || value === '-Infinity') return value;

        if (Math.abs(parseFloat(value)) >= 1e10 || (Math.abs(parseFloat(value)) < 1e-6 && parseFloat(value) !== 0)) {
        return parseFloat(value).toExponential(6);
        }

        if (value.includes('.')) {
        const [integer, decimal] = value.split('.');
        const formattedInteger = Math.abs(parseInt(integer)) > 999 
            ? parseInt(integer).toLocaleString() 
            : integer;
        return formattedInteger + '.' + decimal.substring(0, 8);
        }

        return Math.abs(parseInt(value)) > 999 ? parseInt(value).toLocaleString() : value;
    };

    return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Calculator Container */}
                <div className="bg-gray-800/80 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-black/50">
                    {/* Window Controls */}
                    <div className="p-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30">
                        <div className="flex space-x-2 p-3">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>

                    {/* Display */}
                    <div className="p-6">
                        <div className="bg-gray-900 rounded-xl p-5 border border-gray-700/50 shadow-inner">
                            <div className="flex justify-between items-center mb-2 text-xs text-gray-500 font-mono">
                                <span>{state.isRadians ? 'RAD' : 'DEG'} | M: {state.memory}</span>
                                <span>
                                    {state.previousValue !== null && state.operation && state.operation !== '=' 
                                        ? `${formatDisplay(String(state.previousValue))} ${state.operation}`
                                        : 'READY'
                                    }
                                </span>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl md:text-5xl font-light text-gray-100 overflow-hidden truncate">
                                    {formatDisplay(state.display)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button Grid */}
                    <div className="p-5 pt-0 space-y-3">
                        {/* Scientific Function Rows */}
                        <div className="grid grid-cols-5 gap-2">
                            {['sin', 'cos', 'tan', 'log', 'ln'].map(func => (
                                <Button
                                variant="default" size="default"
                                    key={func}
                                    onClick={() => performScientificFunction(func)}
                                    className="h-12 bg-gradient-to-b from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-blue-400 border border-gray-600 rounded-lg shadow-md hover:shadow-blue-500/20 transition-all"
                                >
                                    {func}
                                </Button>
                            ))}
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            {['sin⁻¹', 'cos⁻¹', 'tan⁻¹', '√', 'xʸ'].map(func => (
                                <Button
                                variant="default" size="default"
                                    key={func}
                                    onClick={() => func === 'xʸ' ? performOperation('^') : performScientificFunction(func.replace('⁻¹', ''))}
                                    className="h-12 bg-gradient-to-b from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-blue-400 border border-gray-600 rounded-lg shadow-md hover:shadow-blue-500/20 transition-all"
                                >
                                    {func}
                                </Button>
                            ))}
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            {['π', 'e', 'x!', 'eˣ', 'RAD'].map(func => (
                                <Button
                                variant="default" size="default"
                                    key={func}
                                    onClick={func === 'RAD' ? toggleMode : () => performScientificFunction(func === 'x!' ? 'factorial' : func.toLowerCase())}
                                    className={`h-12 ${func === 'RAD' ? 'bg-gradient-to-b from-purple-600 to-purple-700 text-white' : 'bg-gradient-to-b from-gray-700 to-gray-800 text-blue-400'} border border-gray-600 rounded-lg shadow-md hover:shadow-purple-500/20 transition-all`}
                                >
                                    {func === 'RAD' ? (state.isRadians ? 'RAD' : 'DEG') : func}
                                </Button>
                            ))}
                        </div>

                        {/* Main Calculator Buttons */}
                        <div className="grid grid-cols-5 gap-2">
                            <Button variant="default" size="default" onClick={allClear} className="h-14 bg-gradient-to-b from-red-600 to-red-700 text-white border border-red-700 rounded-lg shadow-lg hover:shadow-red-500/30 transition-all">
                                AC
                            </Button>
                            <Button variant="default" size="default" onClick={clear} className="h-14 bg-gradient-to-b from-gray-600 to-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-lg hover:shadow-gray-500/20 transition-all">
                                C
                            </Button>
                            <Button variant="default" size="default" onClick={() => setState(prev => ({ ...prev, display: prev.display.slice(0, -1) || '0' }))} className="h-14 bg-gradient-to-b from-gray-600 to-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-lg hover:shadow-gray-500/20 transition-all">
                                ⌫
                            </Button>
                            <Button variant="default" size="default" onClick={() => performOperation('mod')} className="h-14 bg-gradient-to-b from-blue-600 to-blue-700 text-white border border-blue-600 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all">
                                mod
                            </Button>
                            <Button variant="default" size="default" onClick={() => performOperation('÷')} className="h-14 bg-gradient-to-b from-blue-600 to-blue-700 text-white border border-blue-600 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all">
                                ÷
                            </Button>
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            {[7, 8, 9, 'x²', '×'].map(item => (
                                <Button
                                variant="default" size="default"
                                    key={item}
                                    onClick={typeof item === 'number' ? () => inputNumber(item.toString()) : 
                                            item === 'x²' ? () => performScientificFunction('square') : 
                                            () => performOperation(item)}
                                    className={`h-14 ${typeof item === 'number' ? 'bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 hover:from-gray-700 hover:to-gray-800' : 
                                               item === '×' ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white' : 
                                               'bg-gradient-to-b from-gray-700 to-gray-800 text-blue-400'} border ${typeof item === 'number' ? 'border-gray-700' : 'border-blue-600'} rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all`}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            {[4, 5, 6, '1/x', '−'].map(item => (
                                <Button
                                variant="default" size="default"
                                    key={item}
                                    onClick={typeof item === 'number' ? () => inputNumber(item.toString()) : 
                                            item === '1/x' ? () => performScientificFunction('inverse') : 
                                            () => performOperation(item)}
                                    className={`h-14 ${typeof item === 'number' ? 'bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 hover:from-gray-700 hover:to-gray-800' : 
                                               item === '−' ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white' : 
                                               'bg-gradient-to-b from-gray-700 to-gray-800 text-blue-400'} border ${typeof item === 'number' ? 'border-gray-700' : 'border-blue-600'} rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all`}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            {[1, 2, 3, '|x|', '+'].map(item => (
                                <Button
                                variant="default" size="default"
                                    key={item}
                                    onClick={typeof item === 'number' ? () => inputNumber(item.toString()) : 
                                            item === '|x|' ? () => performScientificFunction('abs') : 
                                            () => performOperation(item)}
                                    className={`h-14 ${typeof item === 'number' ? 'bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 hover:from-gray-700 hover:to-gray-800' : 
                                               item === '+' ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white' : 
                                               'bg-gradient-to-b from-gray-700 to-gray-800 text-blue-400'} border ${typeof item === 'number' ? 'border-gray-700' : 'border-blue-600'} rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all`}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            <Button variant="default" size="default" onClick={() => setState(prev => ({ ...prev, display: prev.display.startsWith('-') ? prev.display.substring(1) : '-' + prev.display }))} className="h-14 bg-gradient-to-b from-gray-700 to-gray-800 text-gray-200 border border-gray-600 rounded-lg shadow-lg hover:shadow-gray-500/20 transition-all">
                                +/−
                            </Button>
                            <Button variant="default" size="default" onClick={() => inputNumber('0')} className="h-14 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 border border-gray-700 rounded-lg shadow-lg hover:shadow-gray-500/20 transition-all">
                                0
                            </Button>
                            <Button variant="default" size="default" onClick={inputDecimal} className="h-14 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200 border border-gray-700 rounded-lg shadow-lg hover:shadow-gray-500/20 transition-all">
                                .
                            </Button>
                            <Button variant="default" size="default" onClick={() => setState(prev => ({ ...prev, display: String(Math.random()) }))} className="h-14 bg-gradient-to-b from-gray-700 to-gray-800 text-blue-400 border border-gray-600 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all">
                                Rand
                            </Button>
                            <Button onClick={calculate} variant="default" size="default" className="h-14 bg-gradient-to-b from-green-600 to-green-700 text-white border border-green-600 rounded-lg shadow-lg hover:shadow-green-500/30 transition-all hover:scale-[1.02]">
                                =
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Calculator;
