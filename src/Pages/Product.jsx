import Button from "../Components/Elements/Button";
import CardProduct from "../Components/Fragment/CardProduct";
import CardProduct1 from "../Components/Fragment/CardProduct1";
import { Fragment, useState } from "react";

const products = [
  {
    id: 1,
    name: "Big Burger",
    price: "Rp 50.000",
    image: "/images/burger.jpeg",
    description: `Rasakan sensasi wisata rasa dengan menikmati burger lezat yang menggugah selera—perpaduan sempurna antara roti empuk, daging juicy, dan topping segar yang akan membawa lidah Anda menjelajahi dunia cita rasa tak terlupakan!`,
  },
  {
    id: 2,
    name: "French Fries",
    price: "Rp 30.000",
    image: "/images/FrenchFries.jpg",
    description: `Lengkapi perjalanan wisata rasa Anda dengan sepiring French fries yang renyah di luar, lembut di dalam, dan gurihnya tak tertandingi—cocok dinikmati bersama saus favorit untuk pengalaman kuliner yang sempurna!`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/Login";
  };

  const handleAddToCart = (id) => {
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center space-y-5 justify-between"
            >
              <CardProduct>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.name}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} />
              </CardProduct>

              <CardProduct1>
                <CardProduct1.Header image={product.image} />
                <CardProduct1.Body name={product.name}>
                  {product.description}
                </CardProduct1.Body>
                <CardProduct1.Footer 
                  price={product.price} 
                  id={product.id}
                  handleAddToCart={handleAddToCart} 
                />
              </CardProduct1>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4">
        <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = products.find(p => p.id === item.id);
              return (
                <tr key={item.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{item.qty}</td>
                  <td>{`Rp ${(parseInt(product.price.replace(/Rp\s|\.|,/g, ''), 10) * item.qty).toLocaleString()}`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ProductPage;