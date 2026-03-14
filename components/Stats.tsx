"use client"

import CountUp from "react-countup"

export default function Stats() {

  return (

<section className="bg-blue-600 text-white py-20">

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10">

<div>

<h2 className="text-5xl font-bold">
<CountUp end={500} duration={3}/>+
</h2>

<p className="mt-2">Clients Worldwide</p>

</div>

<div>

<h2 className="text-5xl font-bold">
<CountUp end={20} duration={3}/>+
</h2>

<p className="mt-2">Countries Served</p>

</div>

<div>

<h2 className="text-5xl font-bold">
<CountUp end={15} duration={3}/>+
</h2>

<p className="mt-2">Years Experience</p>

</div>

</div>

</section>

  )

}