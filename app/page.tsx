import Link from "next/link";
import { Button } from "@/components/ui/button";  
import { FaMountain, FaBars, FaUser, FaFileAlt, FaFilter, FaSearch, FaRobot, FaEnvelope, FaBell, FaWindowMaximize, FaChartPie } from 'react-icons/fa';

export default function Component() {
  return (
    <>
      <header className="bg-white shadow dark:bg-gray-900">
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          <Link className="flex items-center gap-2 font-bold text-gray-900 dark:text-white" href="#">
            <FaMountain className="h-6 w-6" />
            <span>Aurora Consults</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">
              Job Search
            </Link>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">
              Program Search
            </Link>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="#">
              Login
            </Link>
            <Link
              className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
              href="#"
            >
              Register
            </Link>
          </nav>
          <div className="md:hidden">
            <Button size="icon" variant="outline">
              <FaBars className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Welcome to Aurora Consults
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Find your dream job or educational program with our AI-powered platform.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="bg-primary-500 text-slate-400 px-6 py-3 rounded-md hover:bg-primary-600 transition-colors font-semibold"
                    href="#"
                  >
                    Find Jobs
                  </Link>
                  <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                    Explore Programs
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="Hero Image"
                  className="rounded-2xl"
                  height={400}
                  src="https://img.freepik.com/premium-vector/job-seeker-illustration-concept_225067-151.jpg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">User Management</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaUser className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration and Login</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Create an account and securely log in to access our platform.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Get Started
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaUser className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Profile Creation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Build your professional profile and showcase your skills.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Create Profile
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaFileAlt className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Document Upload</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Securely upload and manage your important documents.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Upload Documents
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Job Search & Application
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaSearch className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Job Listings</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Browse our extensive job listings for nurses.</p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  View Jobs
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaFilter className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Search and Filter</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Easily search and filter job listings to find the perfect fit.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Search Jobs
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaRobot className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI-Powered Job Matching</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our AI algorithm will match you with the best job opportunities.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Program Search & Application
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaSearch className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Program Listings</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore various educational programs for career advancement.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  View Programs
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaFilter className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Search and Filter</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Find the right program by filtering based on your preferences.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Search Programs
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaRobot className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI-Powered Matching</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our AI will help you find the best educational opportunities.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Communication</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaEnvelope className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Employers</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Directly reach out to employers for job opportunities.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Contact Now
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaBell className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Notifications</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Receive updates on job applications and new opportunities.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Enable Notifications
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaWindowMaximize className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Messaging</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Use our platform to communicate directly with potential employers.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Start Messaging
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Reporting and Analytics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaChartPie className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Performance Metrics</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Track your job search and application performance.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  View Metrics
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaChartPie className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Job Application Reports</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Generate reports on your job application status and history.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  Generate Reports
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                <FaChartPie className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Access a comprehensive dashboard for job search analytics.
                </p>
                <Link className="text-primary-500 hover:text-primary-600 transition-colors" href="#">
                  View Dashboard
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 flex justify-between">
          <p>&copy; 2024 Aurora Consults. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link className="hover:text-primary-500" href="#">Privacy Policy</Link>
            <Link className="hover:text-primary-500" href="#">Terms of Service</Link>
            <Link className="hover:text-primary-500" href="#">Contact Us</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
