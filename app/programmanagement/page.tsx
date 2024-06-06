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
              href="/register"
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
              Program Management
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#1F2937]">
                    Existing Programs
                  </h3>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Update Programs
                  </Link>
                </div>
                <p className="mt-2 text-[#6B7280]">
                  Edit and update details of existing program offerings.
                </p>
              </div>
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#1F2937]">
                    Program Enrollments
                  </h3>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Enrollments
                  </Link>
                </div>
                <p className="mt-2 text-[#6B7280]">
                  Monitor and manage student enrollments in programs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">
              Create New Program
            </h2>
            <div className="mt-8 grid gap-6">
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <form>
                  <div className="grid gap-4">
                    <div>
                      <label
                        htmlFor="program-name"
                        className="block text-sm font-medium text-[#1F2937]"
                      >
                        Program Name
                      </label>
                      <input
                        type="text"
                        id="program-name"
                        name="program-name"
                        className=" p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5] sm:text-sm"
                        placeholder="Enter program name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="program-description"
                        className="block text-sm font-medium text-[#1F2937]"
                      >
                        Program Description
                      </label>
                      <textarea
                        id="program-description"
                        name="program-description"
                        rows={3}
                        className=" p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5] sm:text-sm"
                        placeholder="Enter program description"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="program-duration"
                        className="block text-sm font-medium text-[#1F2937]"
                      >
                        Program Duration
                      </label>
                      <input
                        type="text"
                        id="program-duration"
                        name="program-duration"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5] sm:text-sm p-1"
                        placeholder="Enter program duration"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="program-price"
                        className="block text-sm font-medium text-[#1F2937]"
                      >
                        Program Price
                      </label>
                      <input
                        type="number"
                        id="program-price"
                        name="program-price"
                        className="mt-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5] sm:text-sm"
                        placeholder="Enter program price"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                      >
                        Create Program
                      </button>
                    </div>
                  </div>
                </form>
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
