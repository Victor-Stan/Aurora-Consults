// Import necessary icons from react-icons
import { FaFacebook, FaTwitter, FaGoogle, FaMountain } from 'react-icons/fa';
import Link from 'next/link';
import { FC } from 'react';

const Component: FC = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link className="flex items-center justify-center" href="#">
          <FaMountain className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">Aurora Consults</span>
        </Link>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 dark:bg-gray-800">
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                Email address
              </label>
              <div className="mt-1">
                <input
                  autoComplete="email"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
                Password
              </label>
              <div className="mt-1">
                <input
                  autoComplete="current-password"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  id="password"
                  name="password"
                  required
                  type="password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label className="ml-2 block text-sm text-gray-900 dark:text-gray-300" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-400"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button
                className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-600 dark:focus:ring-offset-gray-800"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <Link
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <FaFacebook className="h-5 w-5" />
                </Link>
              </div>
              <div>
                <Link
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <FaTwitter className="h-5 w-5" />
                </Link>
              </div>
              <div>
                <Link
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <FaGoogle className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
