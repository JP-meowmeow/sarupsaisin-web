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
      // await axios.post(`http://localhost:8000/auth/reset-password/${token}`, { 
      await axios.post(`${process.env.VITE_API_URL}/auth/reset-password/${token}`, { 
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
      <div className="pt-16 mt-24 mb-24 border shadow-lg w-1/2 m-auto rounded-[64px] p-20 min-h-screen bg-[#FCFBF8] overflow-x-hidden">

      
     
    <div className="flex items-center justify-center">
      <div className="w-1/2 p-8 bg-white  ">
      <h2 className="text-2xl font-bold mb-4 font-kanit ">
                  Welcome to{" "}
                  <span className="text-[#F3747F]">สรุปสายศิลป์</span> <br />
                  <span className="font-noto-sans-jp text-2xl text-[#F3747F]">
                    サルプサイシンへようこそ！
                  </span>
                </h2>
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
            className="btn btn-l bg-[#F3747F] text-white w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
      <div className="w-1/2">
      <div className="h-full flex items-center justify-center">
                  <img
                    src="/src/images/logo black.png"
                    alt="Login background"
                    className="object-cover"
                  />
                </div>
      </div>
    </div>
    </div>
    <p className="text-4xl font-bold mb-10 font-noto-sans-jp text-center">
        “「唯一実現不可能な旅は、いつまでも始まらないものだ」”
        <br />
        <br />
        <span className="text-2xl">アンソニー・ロビンズ</span>
      </p>
    </div>
  );
}

export default ResetPassword;