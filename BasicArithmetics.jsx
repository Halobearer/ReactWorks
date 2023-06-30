import React, {useState} from "react";

function Calculator() {
    const [addition, setAddition] = useState(0);
    const [multiply, setMultiply] = useState(0);
    const [minus, setMinus] = useState(0);
    const [divide, setDivision] = useState(0);
    const [operator, setOperator] = useState("");
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [view, setView] = useState("");

    //TODO:Add a Calculator History.........
    //TODO:Calculator should allow and work with negative numbers as first input
    function handleClick(number) {
        if (operator === "") {
            setNum1(Number(num1.toString() + number.toString()));
            setView(view + number.toString());
        } else {
            setNum2(Number(num2.toString() + number.toString()));
            setView(view + number.toString())
        }
    }

    function handleClearClick() {
        setNum1(0);
        setNum2(0);
        setOperator("");
        setResult(0);
        setView("")
    }

    function handleOperation(operation) {
        if (operator !== "" && num2 !== 0) {
            EqualsButton();
            setNum1(result);
            setNum2(0);
        }
        setOperator(operation);
        setNum2(0);
        setView(view + operation);
    }

    function EqualsButton() {
        let result = 0;
        switch (operator) {
            case "+":
                result = num1 + num2;
                setAddition(result)
                break;
            case "*":
                result = num1 * num2;
                setMultiply(result);
                break;
            case "-":
                result = num1 - num2;
                setMinus(result);
                break;
            case "/":
                result = num1 / num2;
                setDivision(result);
                break;
            default:
                result = 0;
        }

        setResult(result);
        setNum1(result);
        setNum2(0);
        setOperator("");
        setView(String(result));
    }

    return (
        <React.Fragment>
            <div className="Calculator" style={{
                height: "145px",
                //backgroundColor:"black",
                margin: "39px auto",
                paddingTop: "90px",
                width: "170px",
                border: "7px solid black",
                boxShadow: "17px -18px 8px rgba(0, 0, 0, 0.15)",
                backgroundColor: "grey",
                filter: "drop-shadow(32px -34px 11px rgba(0, 0, 0, 0.1))",
                borderRadius: "20px"
            }}>

                <div className="View-Bar" style={{
                    height: "40px",
                    width: "140px",
                    border: "1px solid black",
                    margin: "-45px auto",
                    borderRadius: "5px"
                }}>
                    <p className="Display"> {view}</p>
                </div>

                <div className="result" style={{
                    margin: "12px auto",
                    transform: "translateY(-48px)",
                    position: "relative",
                    left: "58px"
                }}>{result}</div>
                <div className="Buttons" style={{
                    margin: "45px auto",
                    border: "2px solid black",
                    width: "136px",
                    height: "109px",
                    borderRadius: "9px",
                    backgroundColor: "antiquewhite",
                }}>

                    <button onClick={() => handleClick(1)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px",
                        border: "1px solid black"
                    }}>1
                    </button>
                    <button onClick={() => handleClick(2)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>2
                    </button>
                    <button onClick={() => handleClick(3)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>3
                    </button>
                    <button onClick={() => handleOperation("+")} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>+
                    </button>
                    <br/>
                    <button onClick={() => handleClick(4)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>4
                    </button>
                    <button onClick={() => handleClick(5)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>5
                    </button>
                    <button onClick={() => handleClick(6)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>6
                    </button>
                    <button onClick={() => handleOperation("-")} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>-
                    </button>
                    <br/>
                    <button onClick={() => handleClick(7)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>7
                    </button>
                    <button onClick={() => handleClick(8)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>8
                    </button>
                    <button onClick={() => handleClick(9)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>9
                    </button>
                    <button onClick={() => handleOperation("*")} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>*
                    </button>
                    <br/>
                    <button onClick={handleClearClick} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>C
                    </button>
                    <button onClick={() => handleClick(0)} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>0
                    </button>
                    <button onClick={() => handleOperation("/")} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }}>/
                    </button>
                    <button onClick={EqualsButton} type={"button"} style={{
                        fontSize: "13px",
                        height: "24px",
                        width: "27px"
                    }
                    }>=
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Calculator