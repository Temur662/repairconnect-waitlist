import { CarIcon, Share2Icon, VenetianMask, WrenchIcon } from 'lucide-react'
import React from 'react'
import { Iphone16Pro } from '@/components/ui/iphone-16-pro'
import { BentoCard, BentoGrid } from './magicui/bento-grid'
import { TiltedScroll } from './ui/tilted-scroll'
import DisplayCards from "@/components/ui/display-cards";
import { Sparkles } from "lucide-react";
import { AnimatedCircularProgressBar } from './magicui/animated-circular-progress-bar'
import FillupCircle from './FillupCircle'
// flex flex-col items-center justify-center w-full bg-gradient-to-br from-[#E6F0FF]  to-[#007FFF]
const features = [
    {
        Icon: Share2Icon,
        name: "Book a Service",
        description: "Book a service in minutes.",
        href: "#",
        cta: "Book Now",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className=''>
                <Iphone16Pro
                    src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                    className="h-50 w-full py-2"
                />
            </div>
        ),
      },
    {
        Icon: WrenchIcon,
        name: "Find a Pro",
        description: "Find a pro near you",
        href: "#",
        cta: "Book Now",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Iphone16Pro
                src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                className="h-50 w-full py-2"
            />
        ),
      },
      {
        Icon : CarIcon,
        name: "Mechanic to your door",
        description: "Book with a mobile mechanic",
        href: "#",
        cta: "Book Now",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Iphone16Pro
                src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                className="h-50 w-full py-2"
            />
        ),
      },
      {
        Icon : VenetianMask,
        name: "Clear and Transparent",
        description: "Clear and transparent pricing",
        href: "#",
        cta: "Book Now",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Iphone16Pro
                src="https://res.cloudinary.com/deelfmnhg/image/upload/v1733892005/Neon_Graaadients_D1_1_icds31.jpg"
                className="h-50 w-full py-2"
            />
        ),
      }
     
]   

const customItems = [
  { id: "1", text: "Oil Change" },
  { id: "2", text: "Check Engine Light" },
  { id: "3", text: "Brake Repair" },
  { id: "4", text: "Tire Rotation" },
  { id: "5", text: "Battery Replacement" },
  { id: "6", text: "Tire Rotation" },
  { id: "7", text: "Coolant Leak" },
]
const defaultCards = [
  {
    icon: 'https://api.dicebear.com/9.x/notionists-neutral/svg?seed=George',
    title: "James Justin",
    description: "Lead Mechanic at Chen's Garage",
    date: "Available at 11:00 AM",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    // icon: <Sparkles className="size-4 text-blue-300" />,
    icon: 'https://api.dicebear.com/9.x/notionists-neutral/svg?seed=George',
    title: "Micheal Reeves",
    description: "Mechanic at Brooklyn Auto Shop",
    date: "Available at 10:00 AM",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: 'https://api.dicebear.com/9.x/notionists-neutral/svg?seed=George',
    title: "Angelo Pappas",
    description: "Mechanic at Staten Island Tires",
    date: "Available Now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];
export default function Features() {
  return (
    <main className=' flex flex-col items-center w-full'>
      <div className='flex flex-col items-center w-full space-y-4'>
        <h1 className='text-5xl font-bold'>How Does it Work?</h1>
        <p className='text-gray-500 text-lg'>
        We've simplified the process of finding and booking auto repair services. Here's how it works:
        </p>
      </div>

      <div className=' flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center space-x-8'>
          <h1 className='text-5xl font-bold'>1.</h1>
          <div className=' flex flex-col'>
            <h1 className='text-2xl font-bold'>Pinpoint the Problem</h1>
            <p className='text-gray-500 w-[80%]'>
              Describe the issue you're experiencing with your car with our AI-powered diagnostic tool or from our expert templates that your mechanic will use to diagnose your car.
            </p>
          </div>
        </div>

        <div className='space-y-8'>
          <TiltedScroll 
            items={customItems}
            className="mt-8"
          />
        </div>

      </div>

      <div className=' flex flex-row items-center justify-between w-full '>
        <div className='flex flex-row items-center space-x-8'>
          <h1 className='text-5xl font-bold'>2.</h1>
          <div className=' flex flex-col'>
            <h1 className='text-2xl font-bold'> Connect with a Trusted Pro</h1>
            <p className='text-gray-500 w-[80%]'>
            Browse certified mechanics near you. Compare availability, ratings, reviews, and pricing to find the perfect fit for your needs and budget.
            </p>
          </div>
        </div>

        <div className="flex min-h-[400px] w-full items-center justify-center py-20">
          <div className="w-full max-w-3xl">
            <DisplayCards cards={defaultCards} />
          </div>
        </div>

      </div>

      <div className=' flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center space-x-8'>
          <h1 className='text-5xl font-bold'>3.</h1>
          <div className=' flex flex-col'>
            <h1 className='text-2xl font-bold'>Get Back on the Road Faster</h1>
            <p className='text-gray-500 w-[80%]'>
            Track Your Service in Real-Time. Your mechanic is on the job. Follow along with every step of the repair process, from diagnosis to completion, and get notified the moment your car is ready.
            </p>
          </div>
        </div>

        <div className="flex min-h-[400px] w-full items-center justify-center py-20">
          <div className="">
            <FillupCircle />
          </div>
        </div>

      </div>

    </main>
    // <BentoGrid>
    //   {features.map((feature, idx) => (
    //     <BentoCard key={idx} {...feature} />
    //   ))}
    // </BentoGrid>    
  )
}