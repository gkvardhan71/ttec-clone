export default function Navbar() {
  return (

    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

      <h1 className="text-xl font-bold text-blue-600">
        GK Solutions
      </h1>

      <div className="space-x-6 font-medium">

        <a href="#" className="hover:text-blue-600">
          Solutions
        </a>

        <a href="#" className="hover:text-blue-600">
          Services
        </a>

        <a href="#" className="hover:text-blue-600">
          Insights
        </a>

        <a href="#" className="hover:text-blue-600">
          Contact
        </a>

      </div>

    </nav>

  )
}