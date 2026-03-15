"use client"

import { useState } from "react"

export default function ContactForm() {

const [formData, setFormData] = useState({
name: "",
phone: "",
message: ""
})

function handleChange(e:any){
setFormData({
...formData,
[e.target.name]: e.target.value
})
}

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

  e.preventDefault()

  try {
    const formBody = new URLSearchParams({
      name: formData.name,
      phone: formData.phone,
      message: formData.message
    })

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxG1CqomKTofKBTugABBqlMoImimY8igzSVsbimNWSztGPk02QcxrAWIu5Ai7g-y90/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      }
    )

    if (response.ok) {
      alert("Message sent successfully!")
      setFormData({ name: "", phone: "", message: "" })
    } else {
      alert("Something went wrong. Please try again.")
    }
  } catch (error) {
    alert("Something went wrong. Please try again.")
  }

}

return (


<section className="py-24 bg-gray-50">

  <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg">

    <h2 className="text-3xl font-bold text-center text-gray-800">
      Contact Us
    </h2>

    <p className="text-center text-gray-500 mt-2">
      Tell us about your project
    </p>

    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-5"
    >

      <div>
        <label className="text-sm font-medium text-gray-700">
          Name *
        </label>

        <input
          type="text"
          name="name"
          required
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
          className="w-full mt-2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Phone Number *
        </label>

        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          placeholder="Enter your phone number"
          onChange={handleChange}
          className="w-full mt-2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Message
        </label>

        <textarea
          name="message"
          value={formData.message}
          placeholder="Write a short message"
          onChange={handleChange}
          className="w-full mt-2 border border-gray-300 p-3 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Send Message
      </button>

    </form>

  </div>

</section>


)

}
