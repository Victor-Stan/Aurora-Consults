import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-[#6366F1] text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold"
            prefetch={false}
          >
            <div className="h-6 w-6" />
            <span>Aurora Consults</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link
              href="/filter"
              className="hover:text-gray-300"
              prefetch={false}
            >
              Job Search
            </Link>
            <Link
              href="/programs"
              className="hover:text-gray-300"
              prefetch={false}
            >
              Programs
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-gray-300"
              prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hover:text-gray-300"
              prefetch={false}
            >
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
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">
              Contact Us
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Get in Touch
                </h3>
                <form className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#6B7280]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6366F1] focus:ring-[#6366F1] sm:text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#6B7280]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6366F1] focus:ring-[#6366F1] sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#6B7280]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6366F1] focus:ring-[#6366F1] sm:text-sm"
                      placeholder="Enter your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Our Location
                </h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-[#1F2937]">
                      Head Office
                    </h4>
                    <p className="text-[#6B7280]">
                      123 Main Street, Helsinki, Finland 12345
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#1F2937]">
                      Phone
                    </h4>
                    <p className="text-[#6B7280]">+358 9 123 4567</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#1F2937]">
                      Email
                    </h4>
                    <p className="text-[#6B7280]">info@auroraconsults.com</p>
                  </div>
                </div>
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
            <Link
              href="/about"
              className="hover:text-gray-300"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-300"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-gray-300"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <p className="text-sm text-[#D1D5DB]">
            &copy; 2024 Aurora Consults. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
