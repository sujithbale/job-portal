import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import { mockCompanies } from "@/lib/mock-data"

interface JobCardProps {
  job: any
  variant?: "default" | "horizontal"
}

export function JobCard({ job, variant = "default" }: JobCardProps) {
  const company = mockCompanies.find((c) => c.id === job.companyId)

  if (variant === "horizontal") {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center shrink-0">
                  {company?.logo ? (
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company?.name}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <span className="text-lg font-bold">{company?.name.charAt(0)}</span>
                  )}
                </div>
                <div className="flex-1">
                  <Link href={`/jobs/${job.id}`} className="hover:underline">
                    <h3 className="font-bold text-lg">{job.title}</h3>
                  </Link>
                  <div className="text-muted-foreground mb-2">
                    {company?.name} • {job.location}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline">{job.type}</Badge>
                    <Badge variant="outline">
                      ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
                    </Badge>
                    {job.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm line-clamp-2">{job.description.substring(0, 150)}...</p>
                </div>
              </div>
            </div>
            <div className="border-t md:border-t-0 md:border-l p-6 flex flex-row md:flex-col justify-between items-center gap-4 bg-muted/30">
              <div className="text-sm">
                <div className="text-muted-foreground">Posted</div>
                <div>{job.postedAt}</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button asChild>
                  <Link href={`/jobs/${job.id}`}>Apply</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardContent className="p-0">
        <div className="p-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center">
              {company?.logo ? (
                <img src={company.logo || "/placeholder.svg"} alt={company?.name} className="w-6 h-6 object-contain" />
              ) : (
                <span className="text-sm font-bold">{company?.name.charAt(0)}</span>
              )}
            </div>
            <Badge variant="outline">{job.type}</Badge>
          </div>

          <Link href={`/jobs/${job.id}`} className="hover:underline">
            <h3 className="font-bold mb-1">{job.title}</h3>
          </Link>
          <div className="text-sm text-muted-foreground mb-2">
            {company?.name} • {job.location}
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {job.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="text-sm mb-4">
            <span className="font-medium">
              ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
            </span>
            <span className="text-muted-foreground"> / year</span>
          </div>
        </div>

        <div className="p-4 border-t mt-auto">
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">Posted {job.postedAt}</div>
            <Button asChild size="sm">
              <Link href={`/jobs/${job.id}`}>View Job</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

