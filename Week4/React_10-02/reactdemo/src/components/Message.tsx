import React from "react";
let count = 0;

const Message = () => {
  count = count + 1;
  return <h1 className="display-heading-1">Message {count}</h1>;
};

export default Message;
