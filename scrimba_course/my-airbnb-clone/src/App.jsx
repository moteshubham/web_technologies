import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import bnbData from "../data";

function App() {
  const cards = bnbData.map((item, key) => {
    return (
      <Card
        key={key} 
        item={item} // *else use down
        // title={item.title}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // price={item.price}
        // openSpots = {item.openSpots}
      />
    );
  });
 
  return (
    <>
      <Navbar />
      <Hero/>
      <section className="cards-list">
                {cards}
            </section>
    
    </>
  );
}

export default App;
