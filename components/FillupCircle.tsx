"use client"
import React, { JSX, useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'
import { AnimatedCircularProgressBar } from './magicui/animated-circular-progress-bar'

export default function FillupCircle({className} : {className? : string}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once : true })
  const mainControls = useAnimation()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isInView) {
      // Fire Animation
      mainControls.start('visible')

      // Counter logic
      let start = 0
      const end = 100
      const duration = 2000 // 2 seconds
      const increment = end / (duration / 10) // increment every 10ms

      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          start = end
          clearInterval(counter)
        }
        setProgress(start)
      }, 10)
    }
  }, [isInView])

  return (
    <div ref={ref} style={{ position : 'relative', overflow : 'hidden'}}
    className={cn(" bg-transparent ", className)}>
        <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={progress}
        gaugePrimaryColor="rgb(34 197 94)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        />
    </div>
  )
}
