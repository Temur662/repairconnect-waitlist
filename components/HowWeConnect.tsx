'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Iphone16Pro } from './ui/iphone-16-pro'
import { AnimatedBeam } from './magicui/animated-beam'

export default function HowWeConnect() {
    const containerRef = useRef<HTMLDivElement>(null)
    const div1Ref = useRef<HTMLDivElement>(null)
    const div2Ref = useRef<HTMLDivElement>(null)
    const div3Ref = useRef<HTMLDivElement>(null)
    const div4Ref = useRef<HTMLDivElement>(null)
    const div5Ref = useRef<HTMLDivElement>(null)
    const div6Ref = useRef<HTMLDivElement>(null)
    const div7Ref = useRef<HTMLDivElement>(null)
    const [isReady, setIsReady] = useState(false)
  
    useEffect(() => {
      const timer = setTimeout(() => setIsReady(true), 100)
      return () => clearTimeout(timer)
    }, [])
  
  return (
    <main className="w-full relative flex flex-col items-center justify-center mt-24 mb-16 px-10"
    ref={containerRef}
    >
        <div className="w-full flex flex-col space-y-4 items-center justify-center">
            <h1 className='text-4xl text-center font-bold'>Smart Tech for <span className='bg-gradient-to-br from-[#F0FFFF]  to-[#007FFF] bg-clip-text text-transparent'>Smarter Car Care</span></h1>
            <p className='text-center text-gray-500 text-xl px-20'>
            Our app uses real-time data and location services to connect you with a network of vetted mechanics. See live availability, compare shops based on verified reviews, and schedule your service instantly—no back-and-forth required.
            </p>
        </div>
        <section className="w-full flex flex-col items-center justify-center mt-24 mb-16">
          <div className="w-full flex flex-row items-center justify-between gap-8">
            {/* iPhone on the left */}
            <div className="flex-shrink-0 z-10" ref={div7Ref}>
              <Iphone16Pro
                src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                className="h-100 w-full"
              />
            </div>
            {/* Network Visualization on the right */}
            <div className="relative flex items-center justify-center" style={{ width: 500, height: 500 }}>
              {/* Glowing Circle */}
              <div className="absolute rounded-full" style={{ width: 440, height: 440, background: 'radial-gradient(circle at 50% 50%, #23233b 60%, #0a0a23 100%)', boxShadow: '0 0 80px 20px #3b3b5c, 0 0 0 8px #23233b' }} />
              {/* Center Person (faded) */}
              <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)', opacity: 0.2 }}>
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-20 h-20 rounded-full border-4 border-gray-700" alt="Mary Hoff" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/60 text-white text-center text-xs font-semibold shadow">Mary Hoff<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div>

              {/* Top Person */}
              <div className="absolute left-1/2" style={{ top: 10, transform: 'translateX(-50%)' }} ref={div1Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="Richard Levy" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">Richard Levy<br /><span className="font-normal">Sr. Auto Shop Owner</span></div>
                </div>
              </div>
              {/* Left Person */}
              <div className="absolute top-1/3 left-0" style={{ transform: 'translateY(-50%)' }} ref={div2Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="Marion S. Combs" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">Marion S. Combs<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div>
              {/* Bottom Person */}
              <div className="absolute left-1/2 bottom-0" style={{ transform: 'translateX(-50%)' }} ref={div3Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="Lisa J. Bollin" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">Lisa J. Bollin<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div>
              {/* Right Person */}
              <div className="absolute top-1/3 right-0" style={{ transform: 'translateY(-50%)' }} ref={div4Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/men/76.jpg" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="Kenny Acevedo" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">Kenny Acevedo<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div>
              {/* Bottom Right Person */}
              <div className="absolute right-4 bottom-10" ref={div5Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/men/85.jpg" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="William Johnson" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">William Johnson<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* AnimatedBeams */}
      {isReady && (
        <>
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div1Ref} duration={3} />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div2Ref} duration={3} />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div3Ref} duration={3} />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} duration={3} />
          <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div5Ref} duration={3} />
          <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} />
          <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />
          {/* <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} /> */}
        </>
      )}
    </main>
  )
}
