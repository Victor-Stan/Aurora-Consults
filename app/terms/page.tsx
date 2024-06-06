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
                  Terms of Service
                </h2>
                <p className="mt-4 text-[#6B7280]">
                  Welcome to Aurora Consults! By accessing or using our
                  services, you agree to be bound by these terms of service and
                  our privacy policy.
                </p>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-[#1F2937]">
                  1. Acceptance of Terms
                </h3>
                <p className="mt-4 text-[#6B7280]">
                  These terms of service ("Terms") govern your access to and use
                  of the services, websites, and applications offered by Aurora
                  Consults (the "Services"). By accessing or using the Services,
                  you agree to be bound by these Terms and our privacy policy,
                  which is incorporated herein by reference.
                </p>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-[#1F2937]">
                  2. Use of the Services
                </h3>
                <p className="mt-4 text-[#6B7280]">
                  You may use the Services for your personal, non-commercial
                  use. You agree to use the Services in compliance with all
                  applicable laws, rules, and regulations. You are responsible
                  for maintaining the confidentiality of your account
                  information and for all activities that occur under your
                  account.
                </p>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-[#1F2937]">
                  3. Intellectual Property
                </h3>
                <p className="mt-4 text-[#6B7280]">
                  The Services, including all content, features, and
                  functionality, are owned by Aurora Consults and are protected
                  by copyright, trademark, and other intellectual property laws.
                  You may not modify, copy, distribute, transmit, display,
                  reproduce, or create derivative works from the Services.
                </p>
                <h3 className="mt-8 text-xl font-bold tracking-tight text-[#1F2937]">
                  4. Termination
                </h3>
                <p className="mt-4 text-[#6B7280]">
                  Aurora Consults reserves the right to suspend or terminate
                  your access to the Services at any time for any reason,
                  including if we reasonably believe that you have violated
                  these Terms. You may also cancel your account at any time.
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
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP.5ixeztzmJfLaKpYLMaIRngHaEK?rs=1&pid=ImgDetMain"
                  alt="Terms of Service"
                  className="rounded-lg"
                />
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
