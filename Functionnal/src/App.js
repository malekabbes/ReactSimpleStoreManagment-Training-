// import { Navbar } from "react-bootstrap";
import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import ProductsComponent from "./Components/Products";
// import Product from "./Components/Product";
// import TestComponent from "./Components/TestComponent";
// import TestComponentFn from "./Components/TestComponent2";
function App() {
  return (
    <div className="App">
      {/* <h3>Class Driven</h3>
      <TestComponent />
      <h3>Functionnal Driven</h3>
      <TestComponentFn /> */}
      <NavbarComponent />
      <br></br>
      <ProductsComponent />
    </div>
  );
}

export default App;
