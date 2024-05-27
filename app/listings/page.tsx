/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NY4wVkUrBHO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">Aurora Consults</span>
        </Link>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 dark:bg-gray-800">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Job Listings</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Browse our extensive job listings for various occupations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Card className="h-full">
                <CardHeader className="h-full">
                  <CardTitle className="truncate text-base">Software Engineer</CardTitle>
                  <CardDescription className="truncate text-sm">
                    Full-time position at a leading tech company
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-5">Location: San Francisco, CA</div>
                    <Button className="mt-3" size="sm" variant="outline">
                      Apply
                    </Button>
                  </div>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader className="h-full">
                  <CardTitle className="truncate text-base">Marketing Coordinator</CardTitle>
                  <CardDescription className="truncate text-sm">
                    Part-time position at a growing startup
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-5">Location: Seattle, WA</div>
                    <Button className="mt-3" size="sm" variant="outline">
                      Apply
                    </Button>
                  </div>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader className="h-full">
                  <CardTitle className="truncate text-base">Accountant</CardTitle>
                  <CardDescription className="truncate text-sm">Full-time position at a mid-size firm</CardDescription>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-5">Location: Chicago, IL</div>
                    <Button className="mt-3" size="sm" variant="outline">
                      Apply
                    </Button>
                  </div>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader className="h-full">
                  <CardTitle className="truncate text-base">Administrative Assistant</CardTitle>
                  <CardDescription className="truncate text-sm">
                    Part-time position at a professional services firm
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-5">Location: Miami, FL</div>
                    <Button className="mt-3" size="sm" variant="outline">
                      Apply
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Button
                className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-600 dark:focus:ring-offset-gray-800"
                type="submit"
              >
                View All Job Listings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}