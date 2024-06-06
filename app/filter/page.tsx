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
        <section className="bg-[#F3F4F6] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">
                  Find Your Dream Job
                </h2>
                <p className="mt-4 text-[#6B7280]">
                  Search through our extensive job listings and find the perfect
                  opportunity for you.
                </p>
                <form className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="job-title"
                      className="block text-sm font-medium text-[#6B7280]"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="job-title"
                      className="mt-1 block w-full rounded-md border-[#D1D5DB] bg-white px-3 py-2 text-[#1F2937] shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5]"
                      placeholder="Enter job title"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-[#6B7280]"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="mt-1 block w-full rounded-md border-[#D1D5DB] bg-white px-3 py-2 text-[#1F2937] shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5]"
                      placeholder="Enter location"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                    >
                      Search Jobs
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <img
                  src="https://th.bing.com/th/id/R.d6685ae3843eadf33d86ba4ebd0d149f?rik=n%2bpArohV6G7MrQ&riu=http%3a%2f%2funblast.com%2fwp-content%2fuploads%2f2020%2f05%2fJob-Hunting-Illustration.jpg&ehk=MVriC3RRC7zJFmfdfbBHfQwqtFzarphwqIj6yJSnz9E%3d&risl=&pid=ImgRaw&r=0"
                  alt="Job Search"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">
              Latest Job Openings
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  Software Engineer
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Develop and maintain web applications using modern
                  technologies.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    Remote
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
                  Marketing Coordinator
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Assist with the execution of marketing campaigns and
                  strategies.
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
                  Product Manager
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Define and execute the product roadmap for a growing business.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    On-site
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
                  Data Analyst
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Analyze data to uncover insights and drive business decisions.
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
                  Customer Service Representative
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Provide excellent customer support and resolve inquiries.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    Remote
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
                  Sales Representative
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Generate new leads and close sales for our growing
                  organization.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F46E5]">
                    On-site
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
              href="contact"
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
