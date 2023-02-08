import React, { useState } from "react";
import "./Calculator.css";

//right now only coded for + operator but can be modified a bit for all operators as well

const Calculator = () => {
    //since I am updating the result with each value so there is no need to insert ref
    const [result, setResult] = useState("");

    function calculate(e) {
        //if the user clicks on AC clear the output
        if (e.target.innerHTML === 'AC') {
            setResult("");
            return;
        }
        if (e.target.innerHTML === '+' && result.charAt(result.length - 1) === '+') {
            alert("cannot insert operator after operator")
            return;
        }
        setResult(result + e.target.innerHTML);
    }

    function calculateResult() {
        //if there is no arithmetic operator invovlved just return
        if (!result.includes('+')) {
            return;
        }
        //if the last character is an operator then don't calculate
        if (result.charAt(result.length - 1) === '+') {
            alert("invalid operation")
            return;
        }
        //performing calculation (here if we are using multiple operators than we can make use if switch statement to determine which operation to execute)
        //if there are multiple +(operators) like 7+7+7+7...
        let res = result.split('+').reduce((sum, item) => {
            return sum + Number(item);
        }, 0);
        setResult(String(res));
    }

    return (
        <>
            {/* outer body of Calculator */}
            <div className="outer">
                {/* output screen of the Calculator */}
                <div className="output">
                    <p className="result">{result === "" ? 0 : result}</p>
                </div>
                {/* row1 */}
                <div className="row">
                    <div className="btn" onClick={calculate}>AC
                    </div>
                    <div className="btn">+/-
                    </div>
                    <div className="btn">%
                    </div>
                    <div className="btn op">/
                    </div>
                </div>
                {/* row2 */}
                <div className="row">
                    <div className="btn" value="7" onClick={calculate}>7
                    </div>
                    <div className="btn" value="8" onClick={calculate}>8
                    </div>
                    <div className="btn" value="9" onClick={calculate}>9
                    </div>
                    <div className="btn op">X
                    </div>
                </div>
                {/* row3 */}
                <div className="row">
                    <div className="btn" onClick={calculate}>4
                    </div>
                    <div className="btn" onClick={calculate}>5
                    </div>
                    <div className="btn" onClick={calculate}>6
                    </div>
                    <div className="btn op">-
                    </div>
                </div>
                {/* row4 */}
                <div className="row">
                    <div className="btn" onClick={calculate}>1
                    </div>
                    <div className="btn" onClick={calculate}>2
                    </div>
                    <div className="btn" onClick={calculate}>3
                    </div>
                    <div className="btn op" onClick={calculate}>+
                    </div>
                </div>
                {/* row5 */}
                <div className="row">
                    <div className="btn" style={{ width: '50%' }} onClick={calculate}>0
                    </div>
                    <div className="btn">.
                    </div>
                    <div className="btn op" onClick={calculateResult}>=
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;