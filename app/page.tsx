
import Link from "next/link"
import { FaMountain } from "react-icons/fa";

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-[#6366F1] text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-bold" prefetch={false}>
            <div className="h-6 w-6" />
            <FaMountain />
            <span>Aurora Consults</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link href="/filter" className="hover:text-gray-300" prefetch={false}>
              Job Search
            </Link>
            <Link href="/programs" className="hover:text-gray-300" prefetch={false}>
              Programs
            </Link>
            <Link href="/dashboard" className="hover:text-gray-300" prefetch={false}>
              Dashboard
            </Link>
            <Link href="/contact" className="hover:text-gray-300" prefetch={false}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:text-gray-300" prefetch={false}>
              Login
            </Link>
            <Link
              href="/registration"
              className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium hover:bg-[#4338CA]"
              prefetch={false}
            >
              Register
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[#F3F4F6] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">Manage Your Profile</h2>
                <p className="mt-4 text-[#6B7280]">
                  Create and update your user profile, including uploading important documents.
                </p>
                <Link
                  href="/profile"
                  className="mt-6 inline-flex items-center rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white hover:bg-[#4338CA]"
                  prefetch={false}
                >
                  Go to Profile
                  <div className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div>
                <img src="https://th.bing.com/th/id/R.d225d5349fced6307a4bcc5e24d49c9b?rik=CEBR9JH6kGqRVg&pid=ImgRaw&r=0" alt="User Management" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F3F4F6] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <img src="https://th.bing.com/th/id/OIP.7yd3MdQAMZlMDh4Kfw8_GwHaF7?rs=1&pid=ImgDetMain" alt="Job Search" className="rounded-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">Find Your Dream Job</h2>
                <p className="mt-4 text-[#6B7280]">
                  Search and apply for the best job opportunities with our AI-powered job matching.
                </p>
                <Link
                  href="/filter"
                  className="mt-6 inline-flex items-center rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white hover:bg-[#4338CA]"
                  prefetch={false}
                >
                  Browse Jobs
                  <div className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F3F4F6] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">Explore Educational Programs</h2>
                <p className="mt-4 text-[#6B7280]">
                  Search and apply for the best educational programs with our AI-powered recommendations.
                </p>
                <Link
                  href="/programs"
                  className="mt-6 inline-flex items-center rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white hover:bg-[#4338CA]"
                  prefetch={false}
                >
                  Browse Programs
                  <div className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div>
                <img src="https://th.bing.com/th/id/OIP.mLl3zDgp2hd5peMbqVBdIQHaFk?rs=1&pid=ImgDetMain" alt="Program Search" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F3F4F6] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <img src="https://th.bing.com/th/id/R.3719f6c550e674a8f6a14ce981a47777?rik=suYaEGqzQRog6g&pid=ImgRaw&r=0" alt="Admin Dashboard" className="rounded-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">Manage Your Business</h2>
                <p className="mt-4 text-[#6B7280]">
                  Access the powerful admin dashboard to manage users, content, and analytics.
                </p>
                <Link
                  href="/dashboard"
                  className="mt-6 inline-flex items-center rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white hover:bg-[#4338CA]"
                  prefetch={false}
                >
                  Go to Dashboard
                  <div className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F3F4F6] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">Stay Connected</h2>
                <p className="mt-4 text-[#6B7280]">
                  Communicate with your team and stay up-to-date with the latest notifications.
                </p>
                <Link
                  href="/messaging"
                  className="mt-6 inline-flex items-center rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white hover:bg-[#4338CA]"
                  prefetch={false}
                >
                  Go to Messages
                  <div className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div>
                <img src="https://th.bing.com/th/id/OIP.Ov5wvkwQzGeP3fJSfU1LKAHaEy?rs=1&pid=ImgDetMain" alt="Communication" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#6366F1] text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6" />
            <span className="text-lg font-bold">Aurora Consults</span>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <Link href="/about" className="hover:text-gray-300" prefetch={false}>
              About
            </Link>
            <Link href="/terms" className="hover:text-gray-300" prefetch={false}>
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-gray-300" prefetch={false}>
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-gray-300" prefetch={false}>
              Contact
            </Link>
          </nav>
          <p className="text-sm text-[#D1D5DB]">&copy; 2024 Aurora Consults. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}