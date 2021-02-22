import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const nayoks = ["Anwar", "Alamgir", "Salman", "Bappi", "Shuvo"];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
  ];

  // const nayokNames = nayoks.map((nayok) => nayok);
  // console.log(nayokNames);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>I am a React Person</p>

        <Counter></Counter>
        <Users />
        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}

          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrese = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrese} disabled={count === 0}>
        Decrease -{" "}
      </button>
      <button onClick={handleIncrement}>Increment + </button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.phone}</li>
        ))}
      </ul>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: "2px solid gold", margin: "10px", width: "400px" }}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job} </p>
    </div>
  );
}

export default App;
