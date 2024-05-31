/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WJ3lCRy16b7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

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
                <h2 className="text-3xl font-bold tracking-tight text-[#1F2937]">Stay Connected</h2>
                <p className="mt-4 text-[#6B7280]">
                  Communicate with the Aurora Consults admin and stay up-to-date with the latest notifications.
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 shrink-0">
                          <img src="/placeholder.svg" alt="Admin Avatar" />
                          <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Aurora Consults Admin</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">New message from admin</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">2h ago</div>
                    </div>
                    <div className="mt-4 prose prose-sm">
                      <p>
                        Hello, we wanted to let you know about some exciting updates to our programs and services.
                        Please let us know if you have any questions or feedback.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Reply</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 shrink-0">
                          <img src="/placeholder.svg" alt="Admin Avatar" />
                          <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Aurora Consults Admin</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">New announcement</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">4h ago</div>
                    </div>
                    <div className="mt-4 prose prose-sm">
                      <p>
                        We are excited to announce the launch of our new educational program. Check the dashboard for
                        more details.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Reply</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 shrink-0">
                          <img src="/placeholder.svg" alt="Admin Avatar" />
                          <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Aurora Consults Admin</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">New document shared</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">6h ago</div>
                    </div>
                    <div className="mt-4 prose prose-sm">
                      <p>Please find the updated policy document attached. Let us know if you have any questions.</p>
                    </div>
                    <div className="mt-4 flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Reply</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <div className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src="/placeholder.svg" alt="Communication" className="rounded-lg" />
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
          <p className="text-sm text-[#D1D5DB]">&copy; 2024 Aurora Consults. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}