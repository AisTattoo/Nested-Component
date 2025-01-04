import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormMakanan = () => {
    return (
        <form action="">
        <InputForm
          label="Makanan"
          type="name"
          placeholder="masukkan makanan favoritmu"
          name="name"
        />
       <InputForm
          label="Asal Makanan"
          type="name"
          placeholder="Asal Makanan"
          name="name"
        />
        <Button className="bg-blue-600 w-full">Enter</Button>
      </form>
    )
};

export default FormMakanan;