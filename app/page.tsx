import Link from "next/link"
import { JobCard } from "@/components/job-card"
import { JobFilters } from "@/components/job-filters"
import { Button } from "@/components/ui/button"
import { mockJobs } from "@/lib/mock-data"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 sm:text-5xl">Find Your Dream Job Today</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Browse thousands of job opportunities from top companies around the world. Your next career move is just a
          click away.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/jobs">Browse All Jobs</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/companies/dashboard">For Employers</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Jobs</h2>
          <Link href="/jobs" className="text-primary hover:underline">
            View all jobs →
          </Link>
        </div>
        <JobFilters />
        <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {mockJobs.slice(0, 6).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <section className="bg-muted rounded-xl p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">For Employers</h2>
          <p className="text-muted-foreground mb-6">
            Post your job openings to reach thousands of qualified candidates. Our platform connects you with the right
            talent for your company.
          </p>
          <Button asChild size="lg">
            <Link href="/companies/dashboard">Post a Job</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">For Job Seekers</h3>
          <p className="text-muted-foreground">
            Create a profile, upload your resume, and get matched with companies looking for your skills.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">For Companies</h3>
          <p className="text-muted-foreground">
            Post job openings, manage applications, and find the perfect candidates for your team.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Easy Application</h3>
          <p className="text-muted-foreground">
            Apply with just a few clicks. Our streamlined process makes job hunting simple and efficient.
          </p>
        </div>
      </section>
    </div>
  )
}

