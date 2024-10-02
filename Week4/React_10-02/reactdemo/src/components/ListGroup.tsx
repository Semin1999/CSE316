import React from "react";

interface Props {
  items: string[];
  heading: string;
  currentIndex: number;
  onSelect: (index: number) => void;
}

const ListGroup = ({ items, heading, currentIndex, onSelect }: Props) => {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              currentIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => onSelect(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
