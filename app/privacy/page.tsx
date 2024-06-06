import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <section className="bg-[#F3F4F6] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">
                  Privacy Policy
                </h2>
                <p className="mt-4 text-[#6B7280]">
                  At Aurora Consults, we are committed to protecting your
                  privacy and the confidentiality of your personal information.
                  This privacy policy explains how we collect, use, and protect
                  your data.
                </p>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-[#1F2937]">
                  1. Information We Collect
                </h3>
                <p className="mt-4 text-[#6B7280]">
                  We may collect personal information such as your name, email
                  address, and phone number when you sign up for our services or
                  contact us. We may also collect information about your use of
                  our website and services, such as your IP address and browsing
                  history.
                </p>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-[#1F2937]">
                  2. How We Use Your Information
                </h3>
                <p className="mt-4 text-[#6B7280]">
                  We use your personal information to provide you with the
                  services you have requested, to communicate with you, and to
                  improve our website and services. We may also use your
                  information for marketing purposes, but we will always obtain
                  your consent before doing so.
                </p>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-[#1F2937]">
                  3. Data Security
                </h3>
                <p className="mt-4 text-[#6B7280]">
                  We take the security of your personal information seriously
                  and have implemented appropriate technical and organizational
                  measures to protect it from unauthorized access, use, or
                  disclosure.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Button>Learn More</Button>
                  <Link
                    href="/contact"
                    className="text-[#6366F1] hover:text-[#4338CA]"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div />
            </div>
          </div>
        </section>
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
      </main>
    </div>
  );
}
