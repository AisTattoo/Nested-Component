import Button from "../Elements/Button";

const CardProduct1 = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-gradient-to-r from-purple-500 to-indigo-500 border border-gray-800 rounded-full shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl mx-2">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image } = props;
    return (
        <a href="#" className="block overflow-hidden rounded-full">
            <img 
                src={image} 
                alt="product" 
                className="w-full h-48 object-cover transition duration-300 transform hover:scale-110 rounded-full" 
            />
        </a>
    );
};

const Body = (props) => {
    const { children, title } = props;
    return (
        <div className="px-6 py-4 text-center">
            <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-white hover:underline">
                    {title}
                </h5>
                <p className="text-sm text-gray-200 mt-2">
                    {children}
                </p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price } = props;
    return (
        <div className="flex flex-col items-center justify-center px-7 py-4 bg-gray-900 rounded-full">
            <span className="text-xl font-bold text-yellow-400 mb-2">{price}</span>
            <Button className="bg-yellow-500 px-5 py-2 text-gray-900 font-medium rounded-full shadow hover:bg-yellow-400 hover:shadow-lg">
                Add to Cart
            </Button>
        </div>
    );
};

CardProduct1.Header = Header;
CardProduct1.Body = Body;
CardProduct1.Footer = Footer;

export default CardProduct1;
