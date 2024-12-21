import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-[#2d5a27]">
            AMRUTAM
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/doctors" className="text-sm font-medium">
              Find Doctors
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About Us
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Login</Button>
          <Button className="bg-[#2d5a27] hover:bg-[#234a1f]">Sign-up</Button>
        </div>
      </div>
    </header>
  )
}

