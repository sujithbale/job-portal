import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompanyJobsList } from "@/components/company-jobs-list"
import { CompanyStats } from "@/components/company-stats"
import { PostJobForm } from "@/components/post-job-form"
import { mockCompanyJobs } from "@/lib/mock-data"

export default function CompanyDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Company Dashboard</h1>
          <p className="text-muted-foreground">Manage your job listings and applications</p>
        </div>
        <Button>Post a New Job</Button>
      </div>

      <CompanyStats />

      <Tabs defaultValue="jobs" className="mt-8">
        <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
          <TabsTrigger value="jobs">Active Jobs</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="post">Post a Job</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <Card>
            <CardHeader>
              <CardTitle>Your Job Listings</CardTitle>
              <CardDescription>Manage your active job postings and view applications</CardDescription>
            </CardHeader>
            <CardContent>
              <CompanyJobsList jobs={mockCompanyJobs} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Job Applications</CardTitle>
              <CardDescription>Review and manage applications for your job listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">No applications to display yet.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="post">
          <Card>
            <CardHeader>
              <CardTitle>Post a New Job</CardTitle>
              <CardDescription>Create a new job listing to attract qualified candidates</CardDescription>
            </CardHeader>
            <CardContent>
              <PostJobForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

