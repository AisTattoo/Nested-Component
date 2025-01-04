import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action="">
        <InputForm
          label="Fullname"
          type="test"
          placeholder="masukkan nama anda"
          name="fullname"
        />
         <InputForm
          label="Email"
          type="email"
          placeholder="akustressloini126@gmail.com"
          name="email"
        />
       <InputForm
          label="Password"
          type="password"
          placeholder="1234"
          name="password"
        />
        <InputForm
          label="Confirm Password"
          type="email"
          placeholder="1234"
          name="ConfirmPassword"
        />
        <Button className="bg-blue-600 w-full">Register</Button>
      </form>
    )
};

export default FormRegister;