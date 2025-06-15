"use client"
import React, { JSX, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Reveal({children, className, delay = 0} : { children : JSX.Element, className : string | undefined, delay? : number}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once : true })

  const mainControls = useAnimation()

  useEffect(() => {
    if( isInView ){
        // Fire Animation
        const timeout = setTimeout(() => {
          mainControls.start('visible')
        }, delay * 1000)
        return () => clearTimeout(timeout)
    }
  }, [isInView])
  return (
    <div ref={ref} style={{ position : 'relative', overflow : 'hidden'}}
    className={cn(" bg-transparent ", className)}
    >
        <motion.div 
            variants={{
                hidden : { opacity : 0, y : 75 },
                visible : { opacity : 1, y : 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration : 0.5, delay : 0.25 }}
        >
            {children}
        </motion.div>
    </div>
  )
}