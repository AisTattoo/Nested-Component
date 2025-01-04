const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          Sudah Punya Akun?{" "}
          <Link to="/login" className="font-bold text-blue-600">
            Log in
          </Link>
        </p>
        <p className="text-sm mt-5 text-center">
          Don't have an account?
          <Link to="/register" className="font-bold text-blue-600">
            Register
          </Link>
        </p>
        <p className="text-sm mt-5 text-center">
          Apa makanan favoritmu?
          <Link to="/makanan" className="font-bold text-blue-600 text-sm">
            Makanan Favorit
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
