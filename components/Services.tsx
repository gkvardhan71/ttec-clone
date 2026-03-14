"use client"

import { motion } from "framer-motion"

export default function Services() {

  return (

<motion.section
initial={{opacity:0, y:40}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="py-24 bg-gray-50"
>

<h2 className="text-4xl font-bold text-center">
Our Capabilities
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 md:px-20 mt-16">

<div className="p-8 bg-white shadow-lg rounded-lg">
<img src="/images/ai.jpg" className="rounded mb-4"/>
<h3 className="text-xl font-bold">Artificial Intelligence</h3>
<p className="mt-3 text-gray-600">Automation and AI solutions</p>
</div>

<div className="p-8 bg-white shadow-lg rounded-lg">
<img src="/images/analytics.jpg" className="rounded mb-4"/>
<h3 className="text-xl font-bold">Data Analytics</h3>
<p className="mt-3 text-gray-600">Enterprise insights</p>
</div>

<div className="p-8 bg-white shadow-lg rounded-lg">
<img src="/images/crm.jpg" className="rounded mb-4"/>
<h3 className="text-xl font-bold">CRM Platforms</h3>
<p className="mt-3 text-gray-600">Customer experience systems</p>
</div>

</div>

</motion.section>

  )

}