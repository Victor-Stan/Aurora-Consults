import Link from "next/link";
import { FaMountain } from "react-icons/fa";

export default function ResumeUpload() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link className="flex items-center justify-center" href="#">
          <FaMountain className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
            Aurora Consults
          </span>
        </Link>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 dark:bg-gray-800">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Upload Your Resume
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Securely upload and manage your resume.
              </p>
            </div>
            <form action="#" className="space-y-6" method="POST">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="resume"
                >
                  Resume
                </label>
                <div className="mt-1">
                  <input
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    id="resume"
                    name="resume"
                    required
                    type="file"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="description"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    id="description"
                    name="description"
                    placeholder="Provide a brief description of your resume"
                    required
                    rows={3}
                  />
                </div>
              </div>
              <div>
                <button
                  className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-600 dark:focus:ring-offset-gray-800"
                  type="submit"
                >
                  Upload Resume
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
