import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const Counter = (props) => {
    return (
        <div className="container-fluid bg-dark d-flex justify-content-center">
            <FontAwesomeIcon icon={faClock} className="clock-icon text-light" />
            <div className="number4 text-light">{props.number4 % 10}</div>
            <div className="number3 text-light">{props.number3 % 10}</div>
            <div className="number2 text-light">{props.number2 % 10}</div>
            <div className="number1 text-light">{props.number1 % 10}</div>
        </div>
    );
};

Counter.propTypes = {
    number1: PropTypes.number,
    number2: PropTypes.number,
    number3: PropTypes.number,
    number4: PropTypes.number,
};

let seconds = 0;
setInterval(function () {
    const fourthNumber = Math.floor(seconds / 1000);
    const thirdNumber = Math.floor(seconds / 100);
    const secondNumber = Math.floor(seconds / 10);
    const firstNumber = Math.floor(seconds / 1);
    seconds++;
    ReactDOM.render(<Counter number1={firstNumber} number2={secondNumber} number3={thirdNumber} number4={fourthNumber} />, document.querySelector("#app"));
}, 1000);

export default Counter;
