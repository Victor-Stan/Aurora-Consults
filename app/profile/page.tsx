import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-[#6366F1] text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-bold"
            prefetch={false}
          >
            <div className="h-6 w-6" />
            <span>Aurora Consults</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Job Search
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Programs
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Dashboard
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Login
            </Link>
            <Link
              href="#"
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
                  Create and Update Your Profile
                </h2>
                <p className="mt-4 text-[#6B7280]">
                  Manage your personal information, upload documents, and more.
                </p>
                <form className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" />
                  </div>
                  <div>
                    <Label htmlFor="resume">Resume</Label>
                    <Input id="resume" type="file" />
                  </div>
                  <Button type="submit" className="w-full bg-[#6366F1]">
                    Save Profile
                  </Button>
                </form>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  alt="User Profile"
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
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
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
