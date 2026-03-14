"use client"

import { motion } from "framer-motion"

export default function Hero() {

  return (

    <section className="grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-20 py-28 bg-gray-900 text-white">

      <motion.div
        initial={{opacity:0, x:-50}}
        animate={{opacity:1, x:0}}
        transition={{duration:1}}
      >

        <h1 className="text-5xl font-bold leading-tight">

          Transform Customer
          <br/>
          Experience with AI

        </h1>

        <p className="mt-6 text-lg text-gray-300">

          We help enterprises modernize customer
          engagement using AI, analytics, and cloud platforms.

        </p>

        <button className="mt-8 px-7 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">

          Start Your Transformation

        </button>

      </motion.div>


      <motion.img
        src="/images/ai.jpg"
        className="rounded-xl shadow-lg mt-10 md:mt-0"
        initial={{opacity:0, x:50}}
        animate={{opacity:1, x:0}}
        transition={{duration:1}}
      />

    </section>

  )
}