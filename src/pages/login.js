import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from './api/auth/[...nextauth]';

import { signIn, signOut } from 'next-auth/react';

const Login = () => {
  const handleGoogleSignIn = async () => {
    signIn('google');
  };

  const handleFacebookSignIn = async () => {
    signIn('facebook');
  };
  return (
    <div className="bg-[#FCFCFC] h-screen flex justify-center items-center">
      <div className="bg-white max-w-md items-center text-center flex flex-col px-7 rounded-xl">
        <h1>Selamat datang do Omah.com</h1>
        <h2>
          Masuk atau daftar untuk mendapatkan pengalaman terbaik dari Rumah.com.
        </h2>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        <button onClick={handleFacebookSignIn}>Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
