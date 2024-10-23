import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('Passwords do not match');
    }

    setIsLoading(true);
    try {
      await axios.post(`http://localhost:8000/auth/reset-password/${token}`, { 
        password 
      });
      toast.success('Password reset successful!');
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=''>
      <div className="pt-16 mt-24 mb-24 border shadow-lg w-1/2 m-auto rounded-[64px] p-20">
      </div>
      <div>

     
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              className="input input-bordered w-full mb-2"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ResetPassword;