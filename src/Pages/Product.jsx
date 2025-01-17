import Button from "../Components/Elements/Button";
import CardProduct from "../Components/Fragment/CardProduct";
import CardProduct1 from "../Components/Fragment/CardProduct1";
import { Fragment } from "react";

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
    image: "/images/FrenchFrise.jpg",
    description: `Lengkapi perjalanan wisata rasa Anda dengan sepiring French fries yang renyah di luar, lembut di dalam, dan gurihnya tak tertandingi—cocok dinikmati bersama saus favorit untuk pengalaman kuliner yang sempurna!`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/Login";
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
              <CardProduct1.Footer price={product.price} />
            </CardProduct1>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPage;
