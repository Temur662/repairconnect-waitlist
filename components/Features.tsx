import { CarIcon, Share2Icon, VenetianMask, WrenchIcon } from 'lucide-react'
import React from 'react'
import { Iphone16Pro } from '@/components/ui/iphone-16-pro'
import { BentoCard, BentoGrid } from './magicui/bento-grid'
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
export default function Features() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>    
  )
}