import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { mockJobs, mockCompanies } from "@/lib/mock-data"
import { notFound } from "next/navigation"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const job = mockJobs.find((job) => job.id === params.id)

  if (!job) {
    notFound()
  }

  const company = mockCompanies.find((company) => company.id === job.companyId)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Link href="/jobs" className="text-primary hover:underline mb-4 inline-block">
            ← Back to jobs
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
              {company?.logo ? (
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company?.name}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <span className="text-xl font-bold">{company?.name.charAt(0)}</span>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>{company?.name}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline">{job.type}</Badge>
            <Badge variant="outline">
              ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
            </Badge>
            {job.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Job Description</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>{job.description}</p>

              <h3>Requirements:</h3>
              <ul>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>

              <h3>Responsibilities:</h3>
              <ul>
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">About {company?.name}</h2>
            <p className="mb-4">{company?.description}</p>
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="text-muted-foreground block text-sm">Founded</span>
                <span>{company?.founded}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-sm">Company Size</span>
                <span>{company?.size}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-sm">Industry</span>
                <span>{company?.industry}</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">Apply for this job</h2>
            <p className="mb-6 text-muted-foreground">
              Submit your application now and hear back from the hiring team at {company?.name}.
            </p>
            <Button className="w-full mb-4">Apply Now</Button>
            <Button variant="outline" className="w-full">
              Save Job
            </Button>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-2">Job Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Posted</span>
                  <span>{job.postedAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Job Type</span>
                  <span>{job.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span>{job.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

