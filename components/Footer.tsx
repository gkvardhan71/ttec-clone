export default function Footer() {

  return (

    <footer className="bg-gray-900 text-gray-300 py-12 px-10">

      <div className="grid md:grid-cols-3 gap-10">

        <div>

          <h3 className="text-xl font-bold text-white">
            GK Solutions
          </h3>

          <p className="mt-3">
            Transforming customer experience
            through AI and data.
          </p>

        </div>


        <div>

          <h4 className="font-bold text-white">
            Services
          </h4>

          <p className="mt-3">AI Solutions</p>
          <p>Analytics</p>
          <p>CRM Platforms</p>

        </div>


        <div>

          <h4 className="font-bold text-white">
            Contact
          </h4>

          <p className="mt-3">
            keshav@gksolutions.com
          </p>

        </div>

      </div>

      <p className="text-center mt-10 text-gray-500">

        © 2026 GK Solutions

      </p>

    </footer>

  )

}