'use client';

import { Search, MapPin, ChevronDown, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { DoctorCard } from "@/components/doctor-card"

const doctors = [
  {
    id: "dr-prerna-1",
    name: "Dr. Prerna Narang",
    specialty: "Male-Female Infertility",
    experience: "7 years of Experience",
    languages: ["English", "Hindi", "Marathi"],
    videoPrice: 800,
    chatPrice: "Free",
    rating: 4.5
  },
  {
    id: "dr-prerna-2",
    name: "Dr. Prerna Narang",
    specialty: "Male-Female Infertility",
    experience: "7 years of Experience",
    languages: ["English", "Hindi", "Marathi"],
    videoPrice: 800,
    chatPrice: "Free",
    rating: 4.5
  },
  {
    id: "dr-prerna-3",
    name: "Dr. Prerna Narang",
    specialty: "Male-Female Infertility",
    experience: "7 years of Experience",
    languages: ["English", "Hindi", "Marathi"],
    videoPrice: 800,
    chatPrice: "Free",
    rating: 4.5
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f1]">
      <SiteHeader />

      <main className="container my-none mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="text-center mb-8 bg-[#CFEBCF] h-[241px] flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Find Expert Doctors For An In-Clinic Session Here
          </h1>
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <Select>
              <SelectTrigger className="w-full md:w-[200px] bg-white">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <SelectValue placeholder="Select Location" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="e.g. Doctor, specialisation, clinic name"
                className="w-full pl-4 pr-10 bg-white"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-4">
            {["Expertise", "Gender", "Fees", "Languages"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                className="bg-white"
                onClick={() => {}}
              >
                {filter}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            ))}
            <Button
              variant="outline"
              className="bg-[#e8f3e7] text-[#2d5a27] border-[#2d5a27]"
            >
              All filters
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Hair care",
              "Female",
              "Rs.0-Rs.500",
              "Hindi"
            ].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-[#f8f5f1] px-3 py-1.5"
              >
                {tag}
                <X className="ml-2 h-3 w-3" />
              </Badge>
            ))}
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
      </main>
    </div>
  )
}

