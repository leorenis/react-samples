import { LockClosedIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="mt-12 mx-auto w-full max-w-sm px-4">
      <div className="text-center mb-6">
        <LockClosedIcon className="h-6 w-6 text-gray-700 mx-auto" />
        <h4 className="text-xl font-semibold text-gray-800 mt-2">
          Autenticação
        </h4>
      </div>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Acessar
          </button>
        </div>
        <div className="text-right">
          <Link
            to="/auth/signup"
            className="text-blue-600 hover:underline text-sm"
          >
            Ainda não tenho uma conta
          </Link>
        </div>
      </form>
      <blockquote className="text-center text-sm text-gray-400 mt-6">
        <p>Copyright © My company</p>
      </blockquote>
    </div>
  )
}

export default SignIn;