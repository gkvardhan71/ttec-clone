"use client"

export default function CaseStudies() {

  return (

<section className="py-24 bg-gray-100">

<h2 className="text-4xl font-bold text-center">
Case Studies
</h2>

<p className="text-center text-gray-600 mt-4">
See how we help organizations transform their customer experience.
</p>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mt-16">


<div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">

<img src="/images/ai.jpg" className="w-full h-48 object-cover"/>

<div className="p-6">

<h3 className="text-xl font-bold">
Healthcare Transformation
</h3>

<p className="mt-3 text-gray-600">
AI-powered patient support platform improving response time.
</p>

</div>

</div>


<div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">

<img src="/images/analytics.jpg" className="w-full h-48 object-cover"/>

<div className="p-6">

<h3 className="text-xl font-bold">
AI Customer Support
</h3>

<p className="mt-3 text-gray-600">
Automated support chatbot reducing customer service costs.
</p>

</div>

</div>


<div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">

<img src="/images/crm.jpg" className="w-full h-48 object-cover"/>

<div className="p-6">

<h3 className="text-xl font-bold">
Omnichannel CRM Platform
</h3>

<p className="mt-3 text-gray-600">
Unified CRM experience across email, chat, and voice channels.
</p>

</div>

</div>


</div>

</section>

  )

}