import React, { useState } from 'react'

function Calculator() {
    const [operator, setOperator] = useState(['+', '-', 'x', '÷'])

    return (
        <div id="wrapper">
            <div id="calculator">
                {/* <!-- Screen and clear key --> */}
                <div className="top">
                    <span className="clear">C</span>
                    <div className="screen"></div>
                </div>

            </div>
        </div>
    )
}
export default Calculator
