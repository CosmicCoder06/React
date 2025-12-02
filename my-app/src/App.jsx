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
          // title="Product 1"
          image="https://images.samsung.com/is/image/samsung/p6pim/in/feature/164976585/in-feature-galaxy-s-539720470?$FB_TYPE_A_MO_JPG$"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          // link="https://www.samsung.com/in/smartphones/galaxy-s25/"
        />
        <Card
          // title="Product 2"
          image="https://images.samsung.com/in/smartphones/galaxy-s24/images/galaxy-s24-highlights-color-carousel-global-mo.jpg?imbypass=true"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          // link="https://www.samsung.com/in/smartphones/galaxy-s24/"
        />
        <Card
          // title="Product 3"
          image="https://img.global.news.samsung.com/in/wp-content/uploads/2024/01/Galaxy-S24-Series_dl1.jpg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          // link="https://www.samsung.com/in/smartphones/galaxy-s24-ultra/"
        />
        <Card
          // title="Product 4"
          image="https://www.livemint.com/lm-img/img/2024/01/11/600x338/Samsung_Galaxy_S23_series_1675280781761_1704973663009.jpeg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          // link="https://www.samsung.com/in/smartphones/galaxy-s23/"
        />
      </div>
    </div>
  );
}
export default App;
