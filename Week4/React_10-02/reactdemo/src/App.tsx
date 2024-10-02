import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Message from "./components/Message";
import MessageP from "./MessageP";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import UserList from "./components/UserList";

function App() {
  const handleCountUpdate = (newCount: number) => {
    setCount(newCount);
    console.log("count updated: " + newCount);
  };
  const cities = ["Chicago", "New York", "Seoul", "Busan", "San Francisco"];

  const [count, setCount] = useState(0);
  const [alertVisible, setAlertVisibility] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    console.log("item: " + cities[index]);
  };

  return (
    <>
      <h1>Hello React</h1>
      <UserList></UserList>
      <h1>List Group</h1>
      <ListGroup
        items={cities}
        heading="Cities"
        currentIndex={selectedIndex}
        onSelect={handleSelect}
      />
      <h2>Message</h2>
      <Message />
      <MessageP />
      <h2>Counter: </h2>
      <Counter count={count} onButtonClick={handleCountUpdate}></Counter>
      <h2>Alert</h2>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Emergency!</Alert>
      )}
      <button
        className="btn btn-danger"
        onClick={() => setAlertVisibility(true)}
      >
        View Alert
      </button>
    </>
  );
}

export default App;
