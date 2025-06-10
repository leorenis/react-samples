import React from 'react';
import { LockClosedIcon } from "@heroicons/react/24/solid";

const SignIn = () => {
  return (
    <div className="mt-20 mx-auto w-full max-w-sm px-6">
      <div className="flex items-center justify-center mb-6 gap-2">
        <LockClosedIcon className="h-5 w-5 text-blue-600" />
        <h4 className="text-lg font-semibold text-gray-800">
          Autenticação
        </h4>
      </div>
      <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Acessar
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          Ainda não tem uma conta? <a href="/auth/signup" className="text-blue-600 hover:underline">Cadastre-se</a>
        </p>
      </div>
      <footer className="text-center text-xs text-gray-400 mt-6">
        <p>Copyright © My company</p>
      </footer>
    </div>
  );
};

export default SignIn;
