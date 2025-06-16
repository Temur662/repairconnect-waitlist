"use client"
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

export default function Reviews() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-24 mb-16">
    <h2 className="text-2xl md:text-5xl font-semibold text-center text-gray-800 mb-4">Don't just take our word for it.</h2>
    <p className="text-center text-gray-500 mb-10 text-lg">Hear What industry experts are saying
    </p>
    {/* Carousel Logic */}
    {(() => {
      const reviews = [
        {
          text: `This will be a lifeline for shops drowning in logistics.\n\nRunning an auto shop means my phone never stops ringing. Juggling scheduling with actual repair work is a constant battle. The promise of Repair Connect is that it will automate our entire booking process, letting us focus on the cars instead of the phones. Having a tool that will not only fill our schedule but also manage it intelligently is exactly what independent shops like mine have been waiting for.`,
          author: "Maria Flores",
          role: "Owner, Flores Auto & Performance",
          icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Robert",
          rating: 5,
        },
        {
          text: `Repair Connect is poised to be the great equalizer.\n\nGetting the word out is the biggest challenge for a specialty shop. We know we offer better service, but competing with the marketing budgets of national chains feels impossible. Repair Connect will finally level the playing field. The ability to be matched directly with customers seeking our specific expertise—that's a paradigm shift. We're excited to partner with them at launch and showcase our skills to a wider audience.`,
          author: "David Chen",
          role: "Lead Technician, Chen's Garage",
          icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=George",
          rating: 5,
        },
        {
          text: `We invest in companies that redefine markets. This is one of them.\n\nWe are always looking for companies that aren't just improving a market, but are set to redefine it entirely. The auto repair industry is ripe for disruption, and Repair Connect has the vision and the technology to do it. Their platform will create the seamless, trustworthy connection that both consumers and mechanics have been desperate for. We're confident in our investment; they are building the future of car care.`,
          author: "Alexandra Vance",
          role: "Partner, Momentum Ventures",
          icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Luis",
          rating: 5,
        },
        {
          text: `This is more than an app; it's the blueprint for a new ecosystem.\n\nThe most compelling investments create value on all sides of the transaction. Repair Connect's model is brilliant because it will empower thousands of small business owners with world-class tools while solving a huge consumer headache. This isn't just another app; it's a robust ecosystem designed to unlock the massive, untapped potential of the independent repair industry. We believe it's going to be a game-changer, and we're proud to be in on the ground floor.`,
          author: "Ben Carter",
          role: "Angel Investor",
          icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Leo",
          rating: 5,
        },
        {
          text: `Repair Connect has transformed our customer engagement.\n\nBefore using this platform, we struggled to keep up with customer inquiries and bookings. Now, everything is streamlined, and our customers appreciate the ease of scheduling. It's like having an extra team member dedicated to customer service, and it has significantly improved our workflow.`,
          author: "Jessica Lee",
          role: "Manager, Lee's Auto Repair",
          icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Jessica",
          rating: 5,
        },
        {
          text: `A must-have for any modern auto shop.\n\nIn today's fast-paced world, efficiency is key. Repair Connect has given us the tools to operate more efficiently and effectively. The integration with our existing systems was seamless, and the support team has been fantastic. I can't imagine running our shop without it now.`,
          author: "Michael Thompson",
          role: "Owner, Thompson's Auto Service",
          icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Michael",
          rating: 5,
        },
        {
          text: `An innovative solution for the auto repair industry.\n\nRepair Connect has not only simplified our scheduling but also enhanced our visibility in the market. The platform's ability to connect us with potential customers who need our specific services is invaluable. It's a game-changer for small businesses like ours.`,
          author: "Samantha Green",
          role: "Co-Founder, Green's Auto Solutions",
          icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Samantha",
          rating: 5,
        },
        {
          text: `The future of auto repair is here.\n\nWith Repair Connect, we've seen a noticeable increase in customer satisfaction and retention. The platform's user-friendly interface and powerful features have made it an essential part of our operations. It's not just a tool; it's a partner in our success.`,
          author: "John Doe",
          role: "CEO, Doe's Auto Works",
          icon: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=John",
          rating: 5,
        },
      ];

      // React state for carousel
      const [currentPair, setCurrentPair] = React.useState(0);
      const totalPairs = Math.ceil(reviews.length / 2);
      
      const handlePrev = () => setCurrentPair(i => Math.max(0, i - 1));
      const handleNext = () => setCurrentPair(i => Math.min(totalPairs - 1, i + 1));

      const slideVariants = {
        enter: (direction: number) => ({
          x: direction > 0 ? '100%' : '-100%',
          opacity: 0.5,
          scale: 0.95,
        }),
        center: {
          x: 0,
          opacity: 1,
          scale: 1,
        },
        exit: (direction: number) => ({
          x: direction < 0 ? '100%' : '-100%',
          opacity: 0,
        })
      };

      const swipeConfidenceThreshold = 10000;
      const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
      };

      const [[page, direction], setPage] = React.useState([0, 0]);

      const paginate = (newDirection: number) => {
        if (newDirection > 0 && currentPair < totalPairs - 1) {
          handleNext();
        } else if (newDirection < 0 && currentPair > 0) {
          handlePrev();
        }
        setPage([page + newDirection, newDirection]);
      };

      // Get current pair of reviews
      const currentReviews = reviews.slice(currentPair * 2, (currentPair * 2) + 2);

      return (
        <div className="relative w-full max-w-4xl flex flex-col items-center">
          <div className="flex flex-row gap-8 w-full justify-center items-stretch py-2 relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
               {currentReviews.map((review, i) => (
                <motion.div
                key={`${review.author}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", duration: 0.5 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="flex-1 bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col justify-between h-110 min-w-[320px] max-w-md"
              >
                {/* <div className="flex items-center gap-4 mb-4"> */}
                 
                  {/* <div className="flex items-center ml-auto gap-1">
                    {Array.from({ length: currentReviews[0].rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div> */}
                {/* </div> */}
                <p className="text-gray-700 mb-6 whitespace-pre-line">{review.text}</p>
                <div className="flex items-center gap-4">
                  <Image src={review.icon} alt={review.author} width={40} height={40} className="rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900">{review.author}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </div>
                </div>
              </motion.div>
              ))} 
            </AnimatePresence>
          </div>
          {/* Carousel Controls */}
          <div className="flex gap-4 justify-center mt-6 items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(-1)} 
              disabled={currentPair === 0} 
              className={`rounded-full p-2 px-4 border border-gray-300 bg-white shadow transition ${currentPair === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              {'←'}
            </motion.button>
            {Array.from({ length: totalPairs }).map((_, i) => (
              <motion.span 
                key={i} 
                className={`w-3 h-3 rounded-full mx-1 ${i === currentPair ? 'bg-[#536bf2] opacity-80' : 'bg-[#b0b0c3] opacity-30'}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(1)} 
              disabled={currentPair === totalPairs - 1} 
              className={`rounded-full p-2 px-4 border border-gray-300 bg-white shadow transition ${currentPair === totalPairs - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              {'→'}
            </motion.button>
          </div>
        </div>
      );
    })()}
  </section>
  )
}