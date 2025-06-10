import React from 'react';
import { UserPlusIcon } from "@heroicons/react/24/solid";

const SignUp = () => {
  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-md rounded-md">
      <div className="text-center mb-6">
        <UserPlusIcon className="h-6 w-6 text-blue-600 mx-auto" />
        <h4 className="text-2xl font-semibold text-gray-800 mt-2">Registre-se</h4>
      </div>

      <form className="space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstNameId" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              id="firstNameId"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="lastNameId" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              id="lastNameId"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="inputEmail" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="inputEmail"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="inputPassword" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="inputConfirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="inputConfirmPassword"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign up
          </button>
        </div>
      </form>

      <blockquote className="text-center text-sm text-gray-400 mt-6">
        <p>Copyright © My company</p>
      </blockquote>
    </div>
  );
};

export default SignUp 
