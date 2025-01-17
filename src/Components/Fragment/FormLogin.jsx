import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
      event.preventDefault();
      localStorage.setItem('email', event.target.email.value);
      localStorage.setItem('password', event.target.password.value);
      window.location.href = "/product";
  };


  return (
    <form onSubmit={handleLogin}>
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
      <Button className="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
