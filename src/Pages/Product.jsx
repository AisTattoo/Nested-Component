import Button from "../Components/Elements/Button";
import CardProduct from "../Components/Fragment/CardProduct";
import CardProduct1 from "../Components/Fragment/CardProduct1";


const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/burger.jpeg" />
                <CardProduct.Body title="Big Burger"> 
                   Rasakan sensasi wisata rasa dengan menikmati burger lezat yang menggugah selera—perpaduan sempurna antara roti empuk, daging juicy, dan topping segar yang akan membawa lidah Anda menjelajahi dunia cita rasa tak terlupakan!
                    </CardProduct.Body> 
                <CardProduct.Footer price="Rp 50.000"/>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/FrenchFrise.jpg" />
                <CardProduct.Body title="French Frise"> 
                "Lengkapi perjalanan wisata rasa Anda dengan sepiring French fries yang renyah di luar, lembut di dalam, dan gurihnya tak tertandingi—cocok dinikmati bersama saus favorit untuk pengalaman kuliner yang sempurna!"
                    </CardProduct.Body> 
                <CardProduct.Footer price="Rp 30.000"/>
            </CardProduct>
            <CardProduct1>
            <CardProduct1.Header image="/images/burger.jpeg" />
                <CardProduct1.Body title="Big Burger"> 
                   Rasakan sensasi wisata rasa dengan menikmati burger lezat yang menggugah selera—perpaduan sempurna antara roti empuk, daging juicy, dan topping segar yang akan membawa lidah Anda menjelajahi dunia cita rasa tak terlupakan!
                    </CardProduct1.Body> 
                <CardProduct1.Footer price="Rp 50.000"/>
            </CardProduct1>
            <CardProduct1>
                <CardProduct1.Header image="/images/FrenchFrise.jpg" />
                <CardProduct1.Body title="French Frise"> 
                "Lengkapi perjalanan wisata rasa Anda dengan sepiring French fries yang renyah di luar, lembut di dalam, dan gurihnya tak tertandingi—cocok dinikmati bersama saus favorit untuk pengalaman kuliner yang sempurna!"
                    </CardProduct1.Body> 
                <CardProduct1.Footer price="Rp 30.000"/>
            </CardProduct1>


        </div>
    );
};

export default ProductPage;