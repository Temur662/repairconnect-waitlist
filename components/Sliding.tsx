"use client"
import React, {JSX, useRef, useEffect } from "react"
import Image from "next/image"
import JamalLawMeeting from '@/public/JamalLawMeeting.jpeg'
import { motion, useInView, useAnimation } from 'framer-motion'
interface SlidingDivProps {
    className : string
    position: "left" | "right"
    children : React.ReactNode
    delay? : number
}
export default function SlidingDiv({ position, className, children, delay = 1 }: SlidingDivProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once : true })

    const mainControls = useAnimation()

    useEffect(() => {
    if( isInView ){
        // Fire Animation
        const timeout = setTimeout(() => {
            mainControls.start('visible')
        }, delay * 1000 )
        return () => clearTimeout(timeout)

    }
    }, [isInView])
    return (
      <div className={className}
      ref={ref}
      >
        {/* Content container */}
        <motion.div
          className="w-full"
          variants={{
                hidden : { opacity : 0, x : position == 'left' ? -150 : 150 },
                visible : { opacity : 1, x : 0}
            }}
           initial='hidden'
           animate={mainControls}
           transition={{ duration : 0.5, delay : 0.25}}
        >
          {children}
        </motion.div>
      </div>
    )
  }