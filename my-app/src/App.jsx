import "./App.css";
import Card from "./Components/Card";
function App() {
  return (
    <div className="app">
      <h1 className="main-heading">Welcome to the React Application</h1>
      <h3 className="subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        velit.
      </h3>
      <div className="cards-container">
        <Card
          title="Product 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Card
          title="Product 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Card
          title="Product 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Card
          title="Product 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."

        />
      </div>
    </div>
  );
}
export default App;
