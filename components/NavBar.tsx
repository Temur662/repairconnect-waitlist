import React from 'react'
import { Link, Wrench } from 'lucide-react'
import { Button } from './ui/button'
import Logo from '@/public/repairconnectlogo.png'
import Image from 'next/image'
export default function NavBar() {
  return (
    <nav className='w-full flex fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl flex-row items-center justify-between px-20 py-4'>
        <div className='flex flex-row items-center space-x-2 justify-between'>
            <Image src={Logo} alt='Repair Connect Logo' className='w-20 h-20' />
        </div>

        <div className='flex flex-row items-center space-x-4'> 
            <Button className='bg-gradient-to-r from-[#536bf2]  to-[#007FFF] text-white font-semibold text-sm shadow transition'>
                Join the Beta
            </Button>
        </div>
    </nav>
  )
}
