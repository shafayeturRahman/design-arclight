import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../stores/useStore';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { toggleLogin } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === import.meta.env.VITE_ADMIN_EMAIL ||
      formData.password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      toggleLogin();
      navigate('/dashboard');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4 bg-slate-900 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-2 text-center text-3xl font-extrabold ">
            Welcome Back
          </h2>
          <p className="text-center text-sm opacity-75">
            Please sign in to your account
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="input-label">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="input-field"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-field"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-theme hover:bg-cyan-500 duration-300 w-full py-3 rounded-md text-white text-center"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
