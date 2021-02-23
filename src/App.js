import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    {name: 'Photoshop', prices: '$99.90'},
    {name: 'Illustrator', prices: '$60.95'},
    {name: 'PDF Reader', prices: '$6.56'}


]
  return (
    <div className="App">
      <header className="App-header">
        <p>My First React Paragraph</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        {/* <Product name={products[0].name} prices={products[0].prices}></Product> */}
        {/* <Person name="Rake khan" job="Banker"></Person>
        <Person name="Rake khan" job="Web Developer"></Person>
        <Person name="Rake khan" job="SQL Eng"></Person>
        <Person name="Rake khan" job="Banker"></Person>
        <Person name="Rake khan" job="Web Developer"></Person>
        <Person name="Rake khan" job="SQL Eng"></Person> */}
      </header>
    </div>
  );
}
// multi property pass
function Product(props) {
  const productStyle={
    border: '2px solid white',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '300px',
    float: 'left',
    margin: '10px'
  }
 //destructuring
const {name, prices} = props.product;
console.log(name, prices)

  return ( 
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{prices}</h5>
      <button>Buy Now</button>
    </div>
  )
}
// single property pass
// function Person(props) {
//   const personStyle = {
//     border: "2px solid yellow",
//     margin: "10px",
//     borderRadius: "10px",
//     padding: "10px",
//     width: "500px",
//   };
//   return (
//     <div style={personStyle}>
//       <h3 style={{ color: "red" }}>My Name : {props.name}</h3>
//       <p>My Profession : {props.job}</p>
//     </div>
//   );
// }

export default App;
