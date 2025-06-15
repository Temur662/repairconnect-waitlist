import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"
import { Iphone16Pro } from "@/components/ui/iphone-16-pro"
import Image from "next/image"
import Reveal from "./Reveal"
export default function SignUpSection() {
  return (
    <footer className="relative w-full flex justify-center py-16">
      {/* Main container */}
      <div className="relative isolate w-full max-w-7xl overflow-visible border rounded-3xl bg-gradient-to-br from-[#F0FFFF]  to-[#007FFF] px-6 md:px-16 py-16">
        {/* Decorative radial gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(253,244,226,0.6)_0%,rgba(255,255,255,0)_70%)]" />

        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
          {/* Text */}
          <div className="w-full flex flex-col space-y-4">
            <span className="uppercase text-xs font-semibold tracking-widest text-muted-foreground">
              Join the waitlist
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-center tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Ready to Connect <br className="hidden sm:block" /> with Top Auto Shops?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700 text-center px-40">
              Say goodbye to long waits and uncertainty. Connect with trusted auto shops in your area effortlessly. Be the first to know when we launch and gain exclusive early access.
            </p>

            <Button className="mt-10 h-auto rounded-full bg-white px-6 self-center py-4 text-base font-semibold text-black hover:bg-black/90">
              Join the waitlist
            </Button>
           
          </div>
        </div>
      </div>
    </footer>
  )
}


