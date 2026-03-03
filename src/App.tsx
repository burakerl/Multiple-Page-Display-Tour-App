
import Card from "./components/Card";
import { data } from "./components/CityList";


function App() {
  return (
    <>
    <div className="content">
      <h1>Popular Tour Places</h1>
      <div className="cards-area">
        {data.map((city) => (
          <Card
            key={city.id}
            id={city.id}
            title={city.title}
            image={city.image}
            desc={city.desc}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
