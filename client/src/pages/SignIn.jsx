import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const x= axios.post("/api/auth/signin" )
    const y= await x.json();
    if (x.status === 200) {
      localStorage.setItem("user", JSON.stringify(y));
      navigate("/");
    } else {
      alert(y.message);
    }
  };
  const handleGoogleLogin = async () => {
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              onChange={(e) =>setFormData({...formData, email: e.target.value})}
              type="email"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              onChange={(e) =>setFormData({...formData, password: e.target.value})}
              type="password"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
            Sign In
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            <span className="mx-2 text-gray-500 dark:text-gray-400">or</span>
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          </div>
          <button
            className="w-full flex items-center justify-center border border-black dark:border-white text-black dark:text-white p-2 rounded hover:text-blue-700 transition"
            onClick={handleGoogleLogin}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.6 0 6.9 1.2 9.5 3.3l7.1-7.1C35.1 2.9 29.9 0 24 0 14.6 0 6.8 5.4 2.8 13.2l8.4 6.6C12.9 13.1 17.9 9.5 24 9.5z"
              />

              <path
                fill="#4285F4"
                d="M46.1 24.5c0-1.6-.1-3.2-.3-4.7H24v9h12.5c-.6 3.4-2.5 6.3-5.3 8.3l8.3 6.4C43.5 37.6 46.1 31.1 46.1 24.5z"
              />
              <path
                fill="#FBBC05"
                d="M10.8 28.2c-.5-1.4-.8-2.8-.8-4.2s.3-2.8.8-4.2l-8.4-6.6C1.2 18.1 0 20.9 0 24c0 3.1 1.2 5.9 3.3 8l8.5-3.8z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.5 0 12-2.2 16-6 3.9-3.7 6-8.9 6-14.1 0-5.2-2.1-10.4-6-14.1l-8.4 6.6C35.1 35.9 29.9 38.5 24 38.5c-5.6 0-10.5-3.2-12.3-7.6l-8.4 6.6C6.8 42.6 14.6 48 24 48z"
              />
            </svg>
            Continue with Google
          </button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Don't have an account?
          <button onClick={()=>navigate("/register")}
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
