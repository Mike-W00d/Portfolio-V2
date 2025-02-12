import React from "react";

import LoginForm from "@/components/loginForm";

const LogIn = () => {
  return (
    <div className="flex h-screen flex-col items-center">
      <h1 className="py-4 text-3xl font-bold text-fedblue">Login Page </h1>
      <LoginForm />
    </div>
  );
};

export default LogIn;
