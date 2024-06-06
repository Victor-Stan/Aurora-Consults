import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
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
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-24 h-24 border">
                  <img src="/placeholder.svg" alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">
                    John Doe
                  </h2>
                  <p className="mt-2 text-[#6B7280]">Admin</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                    <UserIcon className="w-8 h-8 text-[#4F46E5]" />
                    <div className="text-xl font-bold text-[#1F2937]">
                      Personal Info
                    </div>
                    <div className="text-[#6B7280]">
                      <p>Name: John Doe</p>
                      <p>Email: john.doe@example.com</p>
                      <p>Phone: 555-1234</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                    <BriefcaseIcon className="w-8 h-8 text-[#4F46E5]" />
                    <div className="text-xl font-bold text-[#1F2937]">
                      Professional Info
                    </div>
                    <div className="text-[#6B7280]">
                      <p>Role: Admin</p>
                      <p>Department: Management</p>
                      <p>Joined: 2018</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                    <AwardIcon className="w-8 h-8 text-[#4F46E5]" />
                    <div className="text-xl font-bold text-[#1F2937]">
                      Achievements
                    </div>
                    <div className="text-[#6B7280]">
                      <p>Employee of the Year (2021)</p>
                      <p>Certified Project Manager</p>
                      <p>Volunteer of the Month (2020)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex gap-4">
                <Button className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2">
                  Edit Profile
                </Button>
                <Button
                  variant="secondary"
                  className="rounded-md border border-[#4F46E5] px-4 py-2 text-sm font-medium text-[#4F46E5] shadow-sm hover:bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                >
                  View Activities
                </Button>
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

function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
