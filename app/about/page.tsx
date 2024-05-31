
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-[#6366F1] text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-bold" prefetch={false}>
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
            <Link href="#" className="font-bold" prefetch={false}>
              Communication
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
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">About Aurora Consults</h2>
                <p className="mt-4 text-[#6B7280]">
                  Aurora Consults is a leading provider of career development services, offering a wide range of
                  programs and resources to help individuals achieve their professional goals.
                </p>
                <p className="mt-4 text-[#6B7280]">
                  Our team of experienced consultants and coaches work closely with clients to identify their strengths,
                  passions, and career aspirations, and then develop personalized strategies to help them succeed.
                </p>
                <p className="mt-4 text-[#6B7280]">
                  Whether you're a recent graduate, a mid-career professional, or someone looking to make a career
                  change, Aurora Consults has the expertise and resources to support you every step of the way.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Button>Learn More</Button>
                  <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                    Contact Us
                  </Link>
                </div>
              </div>
              <div>
                <img src="/placeholder.svg" alt="About Aurora Consults" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">Meet Our Team</h2>
              <p className="mt-4 text-[#6B7280]">
                Our team of experienced professionals is dedicated to helping you achieve your career goals.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                <div className="flex flex-col items-center">
                  <Avatar className="h-20 w-20">
                    <img src="/placeholder.svg" alt="Team Member 1" />
                    <AvatarFallback>TM1</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-medium">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Career Coach</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                <div className="flex flex-col items-center">
                  <Avatar className="h-20 w-20">
                    <img src="/placeholder.svg" alt="Team Member 2" />
                    <AvatarFallback>TM2</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-medium">Jane Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Career Consultant</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                <div className="flex flex-col items-center">
                  <Avatar className="h-20 w-20">
                    <img src="/placeholder.svg" alt="Team Member 3" />
                    <AvatarFallback>TM3</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-medium">Michael Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Career Advisor</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                <div className="flex flex-col items-center">
                  <Avatar className="h-20 w-20">
                    <img src="/placeholder.svg" alt="Team Member 4" />
                    <AvatarFallback>TM4</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-medium">Emily Davis</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Career Specialist</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                      <div className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F3F4F6] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <img src="/placeholder.svg" alt="Our Mission" className="rounded-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">Our Mission</h2>
                <p className="mt-4 text-[#6B7280]">
                  At Aurora Consults, our mission is to empower individuals to achieve their career goals and reach
                  their full potential. We believe that everyone deserves the opportunity to find fulfilling work and to
                  build a successful and rewarding career.
                </p>
                <p className="mt-4 text-[#6B7280]">
                  Through our comprehensive range of programs and services, we strive to provide our clients with the
                  tools, resources, and support they need to navigate the ever-changing job market, develop their
                  skills, and make informed decisions about their professional futures.
                </p>
                <p className="mt-4 text-[#6B7280]">
                  Our team of experienced consultants and coaches is dedicated to helping our clients overcome
                  challenges, identify their strengths, and unlock their full potential. We are committed to fostering a
                  supportive and inclusive environment where everyone feels empowered to pursue their dreams and achieve
                  their goals.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Button>Learn More</Button>
                  <Link href="#" className="text-[#6366F1] hover:text-[#4338CA]" prefetch={false}>
                    Contact Us
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
              href="#"
              className="hover:text-gray-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:transition-all after:duration-300 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
              prefetch={false}
            >
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
          <p className="text-sm text-[#D1D5DB]">&copy; 2024 Aurora Consults. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}