import Image from "next/image";
import applemap from "@/public/applemap.png";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Iphone16Pro } from "@/components/ui/iphone-16-pro";
import { CompaniesMarquee } from "@/components/CompaniesMarquee";
import { Avatars } from "@/components/Avatar";
import HowWeConnect from "@/components/HowWeConnect";
import ResultsOfUs from "@/components/ResultsOfUs";
import SignUpSection from "@/components/SignUpSection";
import { ShinyButton } from "@/components/magicui/shiny-button";
import SlidingDiv from "@/components/Sliding";
import Features from "@/components/Features";

export default function Home() {
  //  bg-gradient-to-b  from-white to-[#0a2257]
  return (
    <main className="relative flex min-h-screen mt-20 flex-col items-center justify-center overflow-hidden px-20 bg-white">
      {/* Landing Page Header */}
      <section className="w-full flex flex-col items-center justify-center mt-12 mb-16">
        <ShinyButton
        className="bg-gradient-to-br from-[#536bf2]  to-[#007FFF] border-none border-white/50 shadow-pink-500/30 px-2 rounded-full py-1"
        content="drop-shadow shadow-black text-white"
        >
          <h2 className="font-semibold text-xs text-white">✨ Join the waitlist</h2>
        </ShinyButton>
        <h1 className="text-5xl px-10 w-1/2 font-extrabold text-center text-black leading-tight" style={{fontFamily: 'Geist, Arial, sans-serif'}}>
        Time for a tune-up?<br/> Book your appointment in just a few clicks.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-center text-[#5a5a89] max-w-2xl">
        Car maintenance that finally fits your schedule. Find a top-rated pro near you and get your service booked in under a minute, right from your phone. 
        </p>
        <form className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-1 px-4 py-4 rounded-xl shadow text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#536bf2]  to-[#007FFF] text-white font-semibold text-sm shadow transition"
          >
            Join Waitlist
          </button>
        </form>
        <div className="flex flex-row items-center justify-center gap-4 mt-8">
          <Avatars />
          <p className="text-sm bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">Join 1000+ others who signed up</p>
        </div>
      </section>     
      <section className="w-full flex flex-col items-center justify-center px-40">
        <div className="z-20 flex flex-col relative items-center justify-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/16 bg-gradient-to-r from-white to-transparent "></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/16 bg-gradient-to-l from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/12 bg-gradient-to-b from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/12 bg-gradient-to-t from-white to-transparent"></div>
          {/* Map Image */}
          <Image
            src={applemap}
            alt="World Map"
            className="rounded-3xl w-full aspect-video object-cover"
            priority
          />
          {/* Avatars and Cards */}
  
          {/* Top Left Avatar */}
          <div className="absolute left-1/4 top-1/4 flex flex-col items-center">
            <SlidingDiv className="flex flex-col " position="left">
              <div className="flex flex-col items-center">
                <Image src={'https://randomuser.me/api/portraits/men/10.jpg'} width={64} height={64} alt="Avatar 1" className="w-16 h-16 rounded-full border-2 border-white" />
                <div className="mt-2 bg-white/80 backdrop-blur-md rounded-xl shadow p-3 w-64 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="font-medium">Johnathan Smith</span>
                  </div>
                  <span className="text-xs text-gray-600">2:00 PM - 5:00 PM, 10 Years Exp.</span>
                  <br />
                  <span className="text-xs text-gray-600">Doe's Auto Repair</span>
                </div>
              </div>
            </SlidingDiv>
          </div>
  
          {/* Top Right Avatar */}
          
          <div className="absolute right-1/4 top-1/8 flex flex-col items-center">
           <SlidingDiv className="flex flex-col" position="right" delay={2}>
              <div className="flex flex-col items-center">
                <Image src={'https://randomuser.me/api/portraits/men/5.jpg'} width={64} height={64} alt="Avatar 1" className="w-16 h-16 rounded-full border-2 border-white" />
                <div className="mt-2 bg-white/80 backdrop-blur-md rounded-xl shadow p-3 w-64 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="font-medium">Sami Dharmaj</span>
                  </div>
                  <span className="text-xs text-gray-600">9:00 AM - 2:00 PM, 8 Years Exp.</span>
                  <br />
                  <span className="text-xs text-gray-600">Sami's Body Shop</span>
                </div>
              </div>
           </SlidingDiv>
          </div>
          {/* Bottom Left Avatar */}
          <div className="absolute left-1/3 bottom-1/4 flex flex-col items-center">
            <Reveal className="" delay={3}>
              <div className="flex flex-col items-center">
              <Image src={'https://randomuser.me/api/portraits/men/14.jpg'} width={64} height={64} alt="Avatar 1" className="w-16 h-16 rounded-full border-2 border-white" />
              <div className="mt-2 bg-white/80 backdrop-blur-md rounded-xl shadow p-3 w-64 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="font-medium">Alex Johnson</span>
                  </div>
                  <span className="text-xs text-gray-600">10:00 AM - 1:00 PM, 20 Years Exp.</span>
                  <br />
                  <span className="text-xs text-gray-600">Brooklyn Repair Inc.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* Iphone 16 Pro, How we connect users and auto shops */}
      <section className="px-40 w-full flex"><HowWeConnect /></section>
      {/* Reviews Section */}
      <section className="w-full flex flex-col items-center justify-center mt-24 mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">Trusted by Top Auto Shops & Investors</h2>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-stretch">
          {/* Review Card 1 */}
          <div className="flex-1 bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col justify-between">
            <p className="text-gray-700 mb-6">"RepairConnect has given me the ability to easily win the best auto jobs for my shop! Seamless to use, fast payouts, and my customers love the experience. Highly recommend to any auto shop owner, especially if targeting growth!"</p>
            <div className="flex items-center gap-4 mt-auto">
              <span className="text-2xl">🚗</span>
              <div>
                <div className="font-semibold text-gray-900">Alex Johnson</div>
                <div className="text-xs text-gray-500">Owner, Johnson Auto</div>
              </div>
              <div className="flex items-center ml-auto gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="ml-2 text-xs text-gray-500">5.0 Rating</span>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="flex-1 bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col justify-between">
            <p className="text-gray-700 mb-6">"Investing in RepairConnect has streamlined my portfolio and given me early tech insights in the auto industry. The team is fantastic, always shipping new features, and the platform is growing fast. Best investment I've made in years!"</p>
            <div className="flex items-center gap-4 mt-auto">
              <span className="text-2xl">💼</span>
              <div>
                <div className="font-semibold text-gray-900">Morgan Lee</div>
                <div className="text-xs text-gray-500">Investor, AutoTech Ventures</div>
              </div>
              <div className="flex items-center ml-auto gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="ml-2 text-xs text-gray-500">5.0 Rating</span>
            </div>
          </div>
        </div>
        {/* Dots for carousel effect (static for now) */}
        <div className="flex gap-2 justify-center mt-6">
          <span className="w-3 h-3 rounded-full bg-[#b0b0c3] opacity-60"></span>
          <span className="w-3 h-3 rounded-full bg-[#b0b0c3] opacity-30"></span>
        </div>
      </section>
      {/* Features Section */}
      <section className="px-40 w-full flex py-20"><Features /></section>
      <section className="px-40 w-full flex"><CompaniesMarquee /></section>
      {/* Marquee Backed By Section */}
      <section className="px-40 w-full flex"><ResultsOfUs /></section>
      <section className="px-40 w-full flex"><SignUpSection /></section>
    </main>
  );
}
