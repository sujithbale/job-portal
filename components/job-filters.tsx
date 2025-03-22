"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, MapPin, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function JobFilters() {
  const [salary, setSalary] = useState([50000, 150000])

  const jobTypes = [
    { id: "full-time", label: "Full-time" },
    { id: "part-time", label: "Part-time" },
    { id: "contract", label: "Contract" },
    { id: "internship", label: "Internship" },
    { id: "remote", label: "Remote" },
  ]

  const experienceLevels = [
    { id: "entry", label: "Entry Level" },
    { id: "mid", label: "Mid Level" },
    { id: "senior", label: "Senior Level" },
    { id: "executive", label: "Executive" },
  ]

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Job title, keyword, or company" className="pl-9" />
        </div>
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="City, state, or remote" className="pl-9" />
        </div>
        <Button>Search</Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Narrow down your job search with filters</SheetDescription>
            </SheetHeader>
            <div className="py-4 space-y-6">
              <MobileFilters
                jobTypes={jobTypes}
                experienceLevels={experienceLevels}
                salary={salary}
                setSalary={setSalary}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-4">Job Type</h3>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox id={`job-type-${type.id}`} />
                  <Label htmlFor={`job-type-${type.id}`}>{type.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Experience Level</h3>
            <div className="space-y-2">
              {experienceLevels.map((level) => (
                <div key={level.id} className="flex items-center space-x-2">
                  <Checkbox id={`exp-${level.id}`} />
                  <Label htmlFor={`exp-${level.id}`}>{level.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Salary Range</h3>
            <div className="space-y-4">
              <Slider value={salary} min={0} max={300000} step={10000} onValueChange={setSalary} />
              <div className="flex items-center justify-between">
                <span>${salary[0].toLocaleString()}</span>
                <span>${salary[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function MobileFilters({
  jobTypes,
  experienceLevels,
  salary,
  setSalary,
}: {
  jobTypes: { id: string; label: string }[]
  experienceLevels: { id: string; label: string }[]
  salary: number[]
  setSalary: (value: number[]) => void
}) {
  return (
    <>
      <div>
        <h3 className="font-medium mb-4">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox id={`mobile-job-type-${type.id}`} />
              <Label htmlFor={`mobile-job-type-${type.id}`}>{type.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Experience Level</h3>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <div key={level.id} className="flex items-center space-x-2">
              <Checkbox id={`mobile-exp-${level.id}`} />
              <Label htmlFor={`mobile-exp-${level.id}`}>{level.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Salary Range</h3>
        <div className="space-y-4">
          <Slider value={salary} min={0} max={300000} step={10000} onValueChange={setSalary} />
          <div className="flex items-center justify-between">
            <span>${salary[0].toLocaleString()}</span>
            <span>${salary[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <Button className="w-full">Apply Filters</Button>
    </>
  )
}

