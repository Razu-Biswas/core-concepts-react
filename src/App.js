import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const friends = [
    "kabul",
    "habul",
    "sobul",
    "dobul",
    "jogul",
    "sogul",
    "dogul",
  ];
  const products = [
    { name: "Photoshop", prices: "$99.90" },
    { name: "Illustrator", prices: "$60.95" },
    { name: "PDF Reader", prices: "$6.56" },
    { name: "PDM Reader", prices: "$1.56" },
  ];
  // use map
  // const friendsName = friends.map(friend => friend);
  // console.log(friendsName)
  // const productNames = products.map(product => product.name)
  // console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <p>My First React Paragraph</p>
        <ul>
          {friends.map((friend) => (
            <li>{friend}</li>
          ))}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
          {/* no dynamic */}
          {/* <li>{friends[0]}</li>
          <li>{friends[1]}</li>
          <li>{friends[2]}</li>
          <li>{friends[3]}</li> */}
        </ul>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        {/* non dynamic system */}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {/* <Product name={products[0].name} prices={products[0].prices}></Product> */}

        <Person name="Rake khan" job="Banker"></Person>
        <Person name="Rake khan" job="Web Developer"></Person>
        <Person name="Rake khan" job="SQL Eng"></Person>
        <Person name="Rake khan" job="Banker"></Person>
        <Person name="Rake khan" job="Web Developer"></Person>
        <Person name="Rake khan" job="Data Science Eng:"></Person>
      </header>
    </div>
  );
}

//state component
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return (
    <div>
      <h1>Count: ${count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
          {
             users.map(user => <li>{user.email}</li>)
           }
        </ul>
    </div>
  );
}

// multi property pass
function Product(props) {
  const productStyle = {
    border: "2px solid white",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "300px",
    float: "left",
    margin: "10px",
  };
  //destructuring
  const { name, prices } = props.product;
  // console.log(name, prices)

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{prices}</h5>
      <button>Buy Now</button>
    </div>
  );
}
// single property pass
function Person(props) {
  const personStyle = {
    backgroundColor: "skyblue",
    border: "4px solid yellow",
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
    width: "500px",
  };
  return (
    <div style={personStyle}>
      <h3 style={{ color: "red" }}>My Name : {props.name}</h3>
      <p>My Profession : {props.job}</p>
    </div>
  );
}

export default App;
