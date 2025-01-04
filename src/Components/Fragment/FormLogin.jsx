import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="akustressloini@gmail.com"
          name="email"
        />
       <InputForm
          label="Password"
          type="password"
          placeholder="1234"
          name="password"
        />
       
        <Button className="bg-blue-600 w-full">Login</Button>
      </form>
    )
};

export default FormLogin;