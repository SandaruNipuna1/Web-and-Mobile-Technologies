import { useEffect, useState } from "react";
import "./App.css";
import "./css/styles.css";

import NavBar from "./components/NavBar";
import Pet from "./components/Pet";
import Cart from "./components/Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const [stock, setStock] = useState({
    "Golden Retriever": 5,
    "Persian Cat": 3,
    Parrot: 10,
  });

  function addToCart(petName) {
    if (stock[petName] > 0) {
      setCartCount(cartCount + 1);
      setStock({
        ...stock,
        [petName]: stock[petName] - 1,
      });
    } else {
      alert(`${petName} is out of stock!`);
    }
  }

  useEffect(() => {
    console.log("Cart count:", cartCount);
    console.log("Current stock:", stock);
  }, [cartCount, stock]);

  return (
    <div>
      <NavBar cartCount={cartCount} />

      <div className="container">
        <h1>🐾 Welcome to Pet Shop</h1>
        <p>Check pet availability and add to cart!</p>

        <Pet
          name="Golden Retriever"
          type="Dog"
          price={50000}
          stock={stock["Golden Retriever"]}
          onAddToCart={() => addToCart("Golden Retriever")}
        />

        <Pet
          name="Persian Cat"
          type="Cat"
          price={35000}
          stock={stock["Persian Cat"]}
          onAddToCart={() => addToCart("Persian Cat")}
        />

        <Pet
          name="Parrot"
          type="Bird"
          price={15000}
          stock={stock["Parrot"]}
          onAddToCart={() => addToCart("Parrot")}
        />

        <Cart cartCount={cartCount} />
      </div>
    </div>
  );
}

export default App;
