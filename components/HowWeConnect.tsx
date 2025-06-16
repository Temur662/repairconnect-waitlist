'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Iphone16Pro } from './ui/iphone-16-pro'
import { AnimatedBeam } from './magicui/animated-beam'
import { Ripple } from '@/components/magicui/ripple'
import { Globe } from '@/components/magicui/globe'
import MapLayout from '@/public/3dmaplayout.png'
import Image from 'next/image'
import CartoonTown from '@/public/landingmap.png'
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
    <main className="w-full relative flex flex-col items-center justify-center"
    ref={containerRef}
    >
        <div className="w-full flex flex-col space-y-4 items-center justify-center">
            <h1 className='text-5xl text-center font-bold'> Car care has never been this <span className='bg-gradient-to-br from-[#F0FFFF]  to-[#007FFF] bg-clip-text text-transparent'>Easy</span></h1>
            <p className='text-center text-gray-500 text-xl px-20'>
            Our app uses real-time data and location services to connect you with a network of vetted mechanics. See live availability, compare shops based on verified reviews, and schedule your service instantly—no back-and-forth required.
            {/* Just tell us what you need. Our app handles everything from finding a pro to booking the service. */}
            </p>
        </div>
        <section className="w-full flex flex-col items-center justify-center mt-24 mb-16">
          <div className="w-full flex flex-row items-center justify-between gap-8">
            {/* Card on the left */}
            <div className="flex-shrink-0 z-10" ref={div7Ref}>
              {/* <Iphone16Pro
                src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                className="h-100 w-full"
              /> */}
              <div className="bg-white/10 backdrop-blur-3xl rounded-2xl shadow-lg p-8 w-70 border border-gray-100">
                <div className="flex flex-row items-center justify-between w-fit bg-blue-300/80 rounded-full py-1 px-2 mb-2">
                  <p className='text-xs text-gray-900 font-semibold'>Service in minutes</p>
                </div>
                <h2 className="text-xl font-bold mb-4 text-gray-900 ">Find a Pro</h2>
                <div className="mb-3">
                  <div className="text-xs text-gray-500 font-semibold mb-1">My Vehicle</div>
                  <div className="text-base font-medium text-gray-800">Toyota Camry SE 2024</div>
                </div>
                <div className="mb-3">
                  <div className="text-xs text-gray-500 font-semibold mb-1">Service Required</div>
                  <select className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <option>Scheduled Maintenance</option>
                    <option>Engine Diagnostics</option>
                    <option>Battery Replacement</option>
                    <option>AC Service</option>
                  </select>
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 font-semibold mb-1">Tasks</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {["Oil Change", "Tire Rotation", "Brake Inspection", "100k Mile Service"].map(task => (
                      <span key={task} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100">{task}</span>
                    ))}
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#536bf2] to-[#007FFF] text-white font-semibold text-sm shadow transition hover:from-[#4256c7] hover:to-[#005fcc]">
                  Get Quotes
                </button>
              </div>
            </div>
            {/* Network Visualization on the right */}
            <div className="relative flex items-center justify-center" style={{ width: 600, height: 600 }}>
              {/* Glowing Circle */}
              {/* <div className="absolute rounded-full backdrop-blur-3xl" style={{ width: 440, height: 440, background: 'rgba(255, 255, 255, 0.2)', boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }} /> */}
              {/* <Globe className='h-full text-white w-full '  /> */}
              {/* Center Person (faded) */}
              {/* <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)', opacity: 0.2 }}>
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-20 h-20 rounded-full border-4 border-gray-700" alt="Mary Hoff" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/60 text-white text-center text-xs font-semibold shadow">Mary Hoff<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div> */}
                <div className='h-full w-full [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem),linear-gradient(to_bottom,transparent,black_6rem),linear-gradient(to_top,transparent,black_6rem)] rotate-x-20 -skew-x-20 p-4  '>
                  <Image src={CartoonTown} alt='Map Layout' className='h-full w-full object-cover' draggable={false} />
                </div>


              {/* Top Person */}
              <div className="absolute right-0 top-10" style={{ }} ref={div1Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Christopher" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="Richard Levy" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">Richard Levy<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div>
              {/* Left Person */}
              <div className="absolute top-1/3 left-20" style={{ transform: 'translateY(-50%)' }} ref={div2Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Luis" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="Marion S. Combs" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">Rafeo Keen<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div>
              {/* Bottom Person */}
              {/* <div className="absolute left-1/2 -bottom-10" style={{ transform: 'translateX(-50%)' }} ref={div3Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/men/68.jpg" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="James Justin" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">James Justin<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div> */}
              {/* Right Person */}
              <div className="absolute top-1/2 right-1/3" style={{ transform: 'translateY(-50%)' }} ref={div4Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Luisg" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="Kenny Acevedo" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">Kenny Acevedo<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div>
              {/* Bottom Right Person */}
              <div className="absolute right-1/4 bottom-10" ref={div5Ref}>
                <div className="flex flex-col items-center">
                  <img src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Alexander" className="w-16 h-16 rounded-full border-4 border-gray-700" alt="William Johnson" />
                  <div className="mt-2 px-4 py-2 rounded-xl bg-black/80 text-white text-center text-xs font-semibold shadow">William Johnson<br /><span className="font-normal">Auto Shop Owner</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* AnimatedBeams */}
      {isReady && (
        <>
          <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div7Ref} duration={3}  />
          <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div7Ref} duration={3}  />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div3Ref} duration={3}  />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} duration={3}  />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} duration={3}  />
          <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div5Ref} duration={3}  />
          {/* <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} /> */}
        </>
      )}
    </main>
  )
}
