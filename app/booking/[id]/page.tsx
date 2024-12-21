import { SiteHeader } from "@/components/site-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Facebook, Instagram, Twitter, Youtube, Building2 } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { SessionType } from "@/components/appointments/SessionType"
import { TimeSlot } from "@/components/appointments/TimeSlot"
import { DateSlot } from "@/components/appointments/DateSlot"

export default function BookingPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#f8f5f1]">
      <SiteHeader />
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-48 rounded-t-xl bg-[#e1eadd]" />
          <div className="relative -mt-16 px-4 pb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Avatar className="h-32 w-32 border-4 border-white">
                <AvatarImage src="/doctor.png" />
                <AvatarFallback>DW</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">Dr. Bruce Willis</h1>
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-gray-600">Gynecologist</p>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-semibold">4.5</span>
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">
                      {star}
                    </span>
                  ))}
                <div className="flex gap-9 ml-auto  mr-auto text-center">
                <div>
                  <div className="text-sm text-gray-600">Followers</div>
                  <div className="text-xl font-bold">850</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Following</div>
                  <div className="text-xl font-bold">18K</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Posts</div>
                  <div className="text-xl font-bold">250</div>
                </div>
              </div>
                </div>
              </div>
              <Button className="bg-[#2d5a27] hover:bg-[#234a1f]">
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8 md:col-span-2">
            {/* About Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">A Little About me</h2>
                  <Button variant="outline" size="sm">
                    Follow +
                  </Button>
                </div>
                <p className="text-gray-600 mb-4">
                  Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
                  Surat. love to work with all my hospital staff and seniour doctors.
                  Completed my graduation in Gynaecologist Medicine from the...
                </p>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Language Spoken</h3>
                  <div className="flex gap-2">
                    <Badge variant="secondary">English</Badge>
                    <Badge variant="secondary">Hindi</Badge>
                    <Badge variant="secondary">Telugu</Badge>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    <Youtube className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Specialization Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">I Specialize In</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Women's Health", "Skin Care", "Immunity", "Hair Care"].map(
                    (specialty) => (
                      <div
                        key={specialty}
                        className="flex flex-col items-center gap-2 p-4 bg-[#f8f5f1] rounded-lg"
                      >
                        <div className="h-12 w-12 rounded-full bg-[#e1eadd] flex items-center justify-center">
                          <Image
                            src="/Women 1.png"
                            alt={specialty}
                            width={24}
                            height={24}
                          />
                        </div>
                        <span className="text-sm font-medium text-center">
                          {specialty}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Concerns Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">The Concerns I Treat</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Skin Treatment",
                    "Pregnancy",
                    "Period Doubts",
                    "Endometriosis",
                    "Pelvic Pain",
                    "Ovarian Cysts",
                  ].map((concern) => (
                    <Badge
                      key={concern}
                      variant="secondary"
                      className="px-4 py-2 bg-[#f8f5f1]"
                    >
                      {concern}
                    </Badge>
                  ))}
                  <Button variant="ghost" size="sm" className="text-[#2d5a27]">
                    + 5 More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">My Work Experience</h2>
                <div className="text-sm text-[#2d5a27] font-medium mb-4">
                  I HAVE BEEN IN PRACTICE FOR: 7+ YEARS
                </div>
                <div className="space-y-4">
                  {[
                    { period: "2016-PRESENT", years: "Current" },
                    { period: "2010-2015", years: "5 years" },
                  ].map((experience, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-[#f8f5f1]"
                    >
                      <div className="p-2 rounded-lg bg-white">
                        <Building2 className="h-5 w-5 text-[#2d5a27]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Midtown Medical Clinic</h3>
                        <p className="text-sm text-gray-600">Senior doctor</p>
                        <p className="text-sm text-gray-500">{experience.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Featured Reviews <span className="text-gray-500">(102)</span>
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      type: "Skin care",
                      date: "20 January 2023",
                      review:
                        "Might be bit early to confirm but yes I can see noticeable difference in my hairfall, will write again after using it for longer periods.",
                    },
                    {
                      type: "Pregnancy",
                      date: "20 January 2023",
                      review:
                        "Might be bit early to confirm but yes I can see noticeable difference, will write again after using it for longer periods.",
                    },
                  ].map((review, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-[#f8f5f1] space-y-2"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/avatar.png" />
                          <AvatarFallback>AH</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">Alicent Hightower</h3>
                          <p className="text-sm text-gray-600">
                            Consulted for {review.type}
                          </p>
                        </div>
                        <div className="ml-auto text-sm text-gray-500">
                          {review.date}
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                      <p className="text-gray-600">{review.review}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Section */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Appointment Fee</h2>
                  <p className="text-2xl font-bold text-[#2d5a27]">₹699.00</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Select your mode of session</h3>
                    <div className="flex gap-1">
                    <SessionType type="In-Clinic" duration="45 mins" />
                    <SessionType type="Video" duration="45 mins" />
                    <SessionType type="Chat" duration="45 mins" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Pick a time slot</h3>
                    <div className="flex gap-1">
                    <DateSlot date="Mon, 10 Oct" slots={10} status="available" />
                    <DateSlot date="Tue, 11 Oct" slots={2} status="limited" />
                    <DateSlot date="Wed, 12 Oct" slots={5} status="warning" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Morning</h3>
                    <div className="flex gap-1">
                    <TimeSlot time="9:00 AM" />
                    <TimeSlot time="9:30 AM" />
                    <TimeSlot time="10:00 AM" />
                    <TimeSlot time="10:15 AM" />
                    <TimeSlot time="10:45 AM" />
                    <TimeSlot time="11:00 AM" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Evening</h3>
                    <div className="flex gap-1">
                    <TimeSlot time="4:00 PM" />
                    <TimeSlot time="4:15 PM" />
                    <TimeSlot time="4:30 PM" />
                    <TimeSlot time="4:45 PM" />
                    <TimeSlot time="5:15 PM" />
                    </div>
                  </div>

                  <Button className="w-full bg-[#2d5a27] hover:bg-[#234a1f]">
                    Make An Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

