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
              className="font-bold text-white"
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
              Our Programs
            </h2>
            <p className="mt-4 text-[#6B7280]">
              Explore our range of programs designed to help you achieve your
              career goals.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Career Coaching
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Get personalized guidance and support to navigate your career
                  path.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    Virtual
                  </span>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Resume Building
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Craft a winning resume that showcases your skills and
                  experience.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    In-person
                  </span>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Interview Preparation
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Develop the skills and confidence to ace your next job
                  interview.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    Hybrid
                  </span>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Networking Workshops
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Build meaningful connections and expand your professional
                  network.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    In-person
                  </span>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Professional Development
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Enhance your skills and stay ahead of the curve in your
                  industry.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    Virtual
                  </span>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Entrepreneurship Bootcamp
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Gain the skills and knowledge to start and grow your own
                  business.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    In-person
                  </span>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">
              University Programs
            </h2>
            <p className="mt-4 text-[#6B7280]">
              Explore our range of university programs designed to help students
              succeed.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Undergraduate Degree Programs
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Earn a bachelor's degree in a variety of fields.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    In-person
                  </span>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Graduate Degree Programs
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Advance your education with a master's or doctoral degree.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    In-person
                  </span>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Online Degree Programs
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Earn your degree from the comfort of your own home.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    Online
                  </span>
                  <Link
                    href="#"
                    className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Apply
                  </Link>
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
