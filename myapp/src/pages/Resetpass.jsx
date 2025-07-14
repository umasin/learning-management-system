import React, { useState } from 'react'; import { Mail, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react'; import { Link } from 'react-router-dom';

const ResetPasswordPage = () => { const [email, setEmail] = useState(''); const [error, setError] = useState(''); const [success, setSuccess] = useState(false); const [isLoading, setIsLoading] = useState(false);
const handleSubmit = async (e) => { e.preventDefault();
// Email validation
if (!email) {
  setError('Email is required');
  return;
} else if (!/\S+@\S+\.\S+/.test(email)) {
  setError('Please enter a valid email');
  return;
}
setError('');
setIsLoading(true);
// Simulate API call
await new Promise((resolve) => setTimeout(resolve, 2000));
setIsLoading(false);
setSuccess(true);
};
return ( <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"> <div className="relative w-full max-w-md bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-2xl"> <h2 className="text-2xl font-bold text-white text-center mb-6">Reset Password</h2>
{success ? (
      <div className="flex flex-col items-center space-y-3 text-center text-white">
        <CheckCircle className="w-10 h-10 text-green-400" />
        <p>We have sent a password reset link to your email address.</p>
        <Link to="/signin" className="text-purple-300 hover:text-purple-200 font-semibold">
          Return to Sign In
        </Link>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-white/80 text-sm font-medium">
            Enter your registered email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {return setEmail(e.target.value);}}
              className={`w-full bg-white/5 border ${error ? 'border-red-400' : 'border-white/20'}rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
              placeholder="your@email.com"/>
            {error && (
              <div className="flex items-center space-x-1 mt-1">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm">{error}</span>
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <span>Send Reset Link</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    )}
  </div>
</div>
); };
export default ResetPasswordPage;