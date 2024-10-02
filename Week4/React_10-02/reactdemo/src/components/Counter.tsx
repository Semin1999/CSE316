import React from "react";

interface Props {
  count: number;
  onButtonClick: (count: number) => void;
}
const Counter = ({ count, onButtonClick }: Props) => {
  return (
    <>
      <h1>Counter Demo</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          onButtonClick(count + 1);
        }}
      >
        Up Count {count}
      </button>
    </>
  );
};

export default Counter;
