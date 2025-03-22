import { JobCard } from "@/components/job-card"
import { JobFilters } from "@/components/job-filters"
import { Pagination } from "@/components/pagination"
import { mockJobs } from "@/lib/mock-data"

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Jobs</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <JobFilters />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-muted-foreground">Showing {mockJobs.length} jobs</p>
            <select className="bg-background border rounded-md px-3 py-1.5 text-sm">
              <option>Most Recent</option>
              <option>Highest Salary</option>
              <option>Most Relevant</option>
            </select>
          </div>

          <div className="space-y-4">
            {mockJobs.map((job) => (
              <JobCard key={job.id} job={job} variant="horizontal" />
            ))}
          </div>

          <div className="mt-8">
            <Pagination totalPages={5} currentPage={1} />
          </div>
        </div>
      </div>
    </div>
  )
}

