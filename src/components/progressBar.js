import React from "react";
import "../styles/progressBar.css";

const Range = (props) => {
  return <div className="range" style={{ width: `${props.percentage}%` }} />
};

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Range percentage={props.percentage} />
    </div>
  );
};

const ProgressBarContainer = () => {
  const percentage = 50;
  return (
    <div>
      <div className="progress-container">
        <ProgressBar percentage={percentage} />
      </div>
    </div>
  );
};

export default ProgressBarContainer;