import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface DoctorCardProps {
  id: string
  name: string
  specialty: string
  experience: string
  languages: string[]
  videoPrice: number
  chatPrice: string
  rating: number
}

export function DoctorCard({
  id,
  name,
  specialty,
  experience,
  languages,
  videoPrice,
  chatPrice,
  rating,
}: DoctorCardProps) {
  return (
    <div className="rounded-lg p-6 flex flex-col items-center bg-[#FFF7E2] border-r-5 w-[356px] shadow-md">
      <div className="relative mb-4">
        <Image
          src="/prerna.png"
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="absolute -bottom-2 right-0 bg-black text-white text-sm px-2 py-0.5 rounded-full flex items-center">
          {rating} ★
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <div className="text-center mb-4 text-gray-600">
        <div className="mb-1">{specialty}</div>
        <div className="mb-1">{experience}</div>
        <div>Speaks: {languages.join(", ")}</div>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="text-center p-1 border-2">
          <div className="font-medium ">Video Consultation</div>
          <div className="text-sm">₹{videoPrice}</div>
        </div>
        <div className="text-center p-1 border-2">
          <div className="font-medium">Chat Consultation</div>
          <div className="text-sm">{chatPrice}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Button variant="outline" className="w-full">
          View Profile
        </Button>
        <Button 
          className="w-full bg-[#2d5a27] hover:bg-[#234a1f]"
          asChild
        >
          <Link href={`/booking/${id}`}>
            Book a consultation
          </Link>
        </Button>
      </div>
    </div>
  )
}

